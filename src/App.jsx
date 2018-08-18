import React, { Component } from 'react';

import 'normalize.css';
import './App.css';

import Cheque from './Cheque';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Cheque />
      </div>
    );
  }
}

let ExportedApp = App;

if (__DEV__) {
  const { hot, setConfig } = require('react-hot-loader');
  setConfig({ logLevel: 'debug' });
  ExportedApp = hot(module)(App);
}

export default ExportedApp;
