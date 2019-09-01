import React from 'react'
import {Avatar, Layout} from "antd";
import './HeaderBar.scss'

const {
  Header
} = Layout;

export class HeaderBar extends React.Component {

  render() {
    const avatarStyle = {
      backgroundColor: '#555555'
    };

    const {
      layout,
      switchFullScreen,
    } = this.props;
    return (
      <Header style={{background: '#fff'}}>
        <a onClick={switchFullScreen} className='header-right'>
          <Avatar size='small' icon={layout.fullScreen ? 'shrink' : 'arrows-alt'} style={avatarStyle}/>
        </a>
      </Header>

    )

  }
}