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
  padding: 0 20px;
  border: 1px solid #ec6149;

  &.reg {
    color: #ec6149;
    background: #fff;
  }

  &.writting {
    background:  #ec6149;
    color: #fff;
  }
`