import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div `
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  width: 100px;
  height: 58px;
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div `
  width: 960px;
  height: 100%;
  margin: 0 auto;
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`

export const NavItem = styled.div `
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }

  &.active {
    color: #ea6f5a;
  }

`

export const SearchWrapper = styled.div `
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 25px;
    bottom: 12px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    &.focused {
      background: #ccc;
      color: #fff;
    }
  }

`


export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
}) `
  width: 240px;
  height: 36px;
  border: 1px solid #eee;
  border-radius: 40px;
  padding: 0 40px 0 20px;
  font-size: 14px; 
  margin: 10px 20px;
  outline:none;
  background: #eee;
  box-sizing: border-box;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 350px;
   
  }
  &.slider-enter {
    transition: all .4s ease-out;
  }
  &.slider-enter-active {
      width: 350px;
  }
  &.slider-exit {
      transition: all .4s ease-out;
  }
  &.slider-exit-active {
      width: 240px;
  }
`
export const SearchInfo = styled.div `
  position: absolute;
  left: 40px;
  top: 58px;
  width: 200px;
  padding: 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 10px solid transparent;
    border-bottom-color: #fff;
  }
`
export const  SearchInfoTitle = styled.div `
  margin-bottom: 15px;
  line-height: 20px;
  color: #969696;
  font-size: 14px;
`
export const SearchInfoSwicth = styled.div `
  float: right;
  font-size: 12px;
  cursor: pointer;
`

export const SearchInfoList = styled.div `
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`
export const SearchInfoItem = styled.a `
  display: block;
  float: left;
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 0 5px;
  line-height: 20px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`
export const Addition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  
`
export const Button = styled.button `
  float: right;
  line-height: 38px;
  font-size: 14px;
  border-radius: 19px;
  margin-right: 20px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  outline: none;

  &.reg {
    color: #ec6149;
    background: #fff;
    padding: 0 30px;
  }

  &.writting {
    background:  #ec6149;
    color: #fff;
    padding: 0 20px;
  }
  
  .iconfont{
    line-height: 20px;
  }
`