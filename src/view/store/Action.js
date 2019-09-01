import {RECEIVE_HELLO} from "./Type";

import axios from 'axios'
import {message} from "antd";

const receiveHello = (data) => {
  return {
    type: RECEIVE_HELLO,
    data: data
  }
};

export function requestHello() {
  return dispatch => {
    let handler = message.loading('Say hello...');
    return axios.get('/api/hello')
      .then(response => {
        handler();
        dispatch(receiveHello(response.data));
        message.success(response.data);
      })
  }
}