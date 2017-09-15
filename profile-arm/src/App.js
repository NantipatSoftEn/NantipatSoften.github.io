import React, { Component } from 'react';

import './css/app.css';
import Header from  './component/Header';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
      </div>
    );
  }
}

export default App;
