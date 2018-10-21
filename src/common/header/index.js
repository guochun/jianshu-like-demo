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
              in={this.props.focused}
              timeout={2000}
              classNames="slider"
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <i
              className={this.props.focused ? 'focused iconfont' : 'iconfont'}
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

    if (this.props.focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwicth>换一批</SearchInfoSwicth>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.hotSearchList.map((item) => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    hotSearchList: state.getIn(['header', 'hotSearchList']),
  }
}

const mapDsipatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreator.getHotSearchList())
      dispatch(actionCreator.createSearchFocusAction())
    },
    handleInputBlur() {
      dispatch(actionCreator.createSearchBlurAction())
    }
  }
}

export default connect(mapStateToProps, mapDsipatchToProps)(Header);