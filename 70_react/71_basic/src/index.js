import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReducerSample from './ReducerSample';
import ReducerSample2 from './ReducerSample2';
import MusicReducerApp from './MusicReducerApp';
import MovieReducerApp from './MovieReducerApp';

ReactDOM.render(
  <React.StrictMode>
    <MovieReducerApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
