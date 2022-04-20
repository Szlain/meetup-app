import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css'; // shouldnt really ever include theme css at this level ideally, maybe just generic stuff like a browser reset

ReactDOM.render(
  <React.StrictMode>
    {/* NOTE: moved out the layout from here as i feel the index should be as minimal as possible because it's non-trivial to unit test */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

