import React from 'react'
import {Menu, Icon} from 'antd'
import {Link} from "react-router-dom";


export class Menus extends React.Component {

  render() {
    const {
      layout
    } = this.props;
    return (
      <Menu mode={layout.siderbarFold ? 'vertical' : 'inline'} theme='light'>
        <Menu.Item key='Home'>
          <Link to='/'>
            <Icon type='bars'/>
            <span>Home</span>
          </Link>
        </Menu.Item>

        <Menu.SubMenu key='Network' title={<span><Icon type='bars'/><span>Network</span></span>}>
          <Menu.Item key='Http'>
            <Link to='/http'>
              Http
            </Link>
          </Menu.Item>
          <Menu.Item key='WebSocket'>
            <Link to='/websocket'>
              WebSocket
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

      </Menu>
    )
  }
}