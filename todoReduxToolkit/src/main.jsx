import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  // instead of value, we send store here
  // we need a wrapper here too, could be applied in App.jsx or here.
  <Provider store={store}>
    <App></App>
  </Provider>,
)