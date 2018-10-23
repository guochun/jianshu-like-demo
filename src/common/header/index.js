import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  actionCreator

} from './store';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwicth,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from './style';

class Header extends Component {

  render() {
    const { focused, handleInputFocus, handleInputBlur, hotSearchList } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active' >首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={2000}
              classNames="slider"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={ () => { handleInputFocus(hotSearchList) } }
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i
              className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
            >
              &#xe623;
            </i>
            {this.getSearchList()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='iconfont'>&#xe600;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  getSearchList() {
    const { focused, mouseIn,hotSearchList, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const start = (page - 1) * 10;
    const end = page === totalPage ? hotSearchList.length : page * 10;
    const newList = hotSearchList.slice(start, end);
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwicth onClick={ () => { handleChangePage(page, totalPage, this.spinIcon) }}>
              <i  ref= {(icon) => { this.spinIcon = icon;}}className='iconfont spin'>&#xe851;</i>
              换一批
            </SearchInfoSwicth>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              newList.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
    
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header','mouseIn']),
    hotSearchList: state.getIn(['header', 'hotSearchList']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),

  }
}

const mapDsipatchToProps = (dispatch) => {
  return {

    handleInputFocus(hotSearchList) {
      
      (hotSearchList.size <= 0) && dispatch(actionCreator.getHotSearchList())
      dispatch(actionCreator.createSearchFocusAction())

    },

    handleInputBlur() {
      dispatch(actionCreator.createSearchBlurAction())
    },

    handleMouseEnter() {
     
      dispatch(actionCreator.createMouseEnterHotSearchPanelAction())
    },

    handleMouseLeave() {
     
      dispatch(actionCreator.createMouseLeaveHotSearchPanelAction())
    },

    handleChangePage(page, totalPage, spin) {
      
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')

      if(originAngle) {
        originAngle  = parseInt(originAngle, 10)
      }else {
        originAngle  = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`

      if(page < totalPage) {
        dispatch(actionCreator.createChangeHotSearchPanelPage(page + 1))
      }else{
        dispatch(actionCreator.createChangeHotSearchPanelPage(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDsipatchToProps)(Header);