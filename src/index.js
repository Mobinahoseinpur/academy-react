import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../src/App'
import { store } from './store';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
    </React.StrictMode>
    ,
     document.getElementById("root"))
