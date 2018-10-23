import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';

import GlobalStyle from './styles.js';
import IconFontStyle from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Fragment>
          <Header />
          <BrowserRouter>
            <Fragment>
              <Route path="/" exact render={ ()=> <div>首页</div>} />
              <Route path="/detail" exact render={ ()=> <div>详细</div>}/>
            </Fragment>
          </BrowserRouter>
          <GlobalStyle />
          <IconFontStyle />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
