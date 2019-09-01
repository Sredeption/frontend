import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {configureStore} from "./Stores";
import {ConfigProvider} from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const store = configureStore();


ReactDOM.render(
  <ConfigProvider locale={enUS}>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
