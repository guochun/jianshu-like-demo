import React, { Component, Fragment } from 'react';
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
          <GlobalStyle />
          <IconFontStyle />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
