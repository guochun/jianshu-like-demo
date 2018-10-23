import React, {Component} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Write from './components/Write';
import Recommend from './components/Recommend';

import {

  HomeWrapper,
  HomeLeft,
  HomeRight,

} from './style';

class Home extends Component {

  render() {
    return(
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" alt='banner' src="//upload.jianshu.io/admin_banners/web_images/4516/cd9298634ca88ca71fc12752acf47917967a5d31.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Write />
        </HomeRight>
      </HomeWrapper>
    )
  }
  
}

export default Home;