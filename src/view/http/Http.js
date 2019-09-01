import React from "react";
import {Card, Button} from "antd";

export class Http extends React.Component {
  render() {
    const {
      view,
      requestHello
    } = this.props;
    return (
      <div>
        <Card title="Hello request"
              extra={<Button onClick={requestHello}>Hello</Button>}
              style={{width: 300}}>
          <p>{view.hello}</p>
        </Card>

      </div>
    )
  }
}
