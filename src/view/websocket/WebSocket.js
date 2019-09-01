import React from "react";
import {Button} from "antd";
import io from 'socket.io-client';

export class WebSocket extends React.Component {

  connect = () => {
    io()
  };

  render() {
    return (
      <div>
        <Button onClick={this.connect}>Connect</Button>
      </div>
    )
  }
}
