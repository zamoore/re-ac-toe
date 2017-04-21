// Modules
import React, { Component } from 'react';

// App code
import Board from './Board';
import Notification from './Notification';

// Styles
import '../styles/app.css';

class App extends Component {
  render() {
    return (
      <section className="app">
        <Board />
        <Notification />
      </section>
    );
  }
}

export default App;
