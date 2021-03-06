import styled  from 'styled-components';

export const HomeWrapper = styled.div `
  width: 960px;
  margin: 0 auto;

  &::after {
    content: "";
    display: block;
    clear: both;
  }

`

export const HomeLeft = styled.div `
  width: 625px;
  margin-left: 15px;
  margin-top: 30px;
  float: left;

  .banner-img {
    width: 625px;
    height: 270px;
    
  }

`

export const HomeRight = styled.div `
  width: 240px;
  float: right;

`

export const TopicWrapper =  styled.div `
  padding: 20px 0 10px 0;
  
`
export const TopicItem = styled.div `
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  margin: 0 18px 18px 0;
  border-radius: 4px;
  height: 32px;
  line-height: 32px;
  vertical-align: top;
  display: inline-block;
  padding-right: 10px;
  .topic_pic {
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`