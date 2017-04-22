// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// App code
import Game from './components/Game';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
