import React from 'react'
import {Layout} from "antd";
import {Menus} from "./Menus";
import './SiderBar.scss'
import * as config from "../../utils/Config";

const {Sider} = Layout;

export class SiderBar extends React.Component {
  render() {
    const {
      layout,
      switchSiderBar
    } = this.props;

    return (
      <Sider theme='light' collapsible collapsed={layout.siderbarFold} onCollapse={switchSiderBar}>
        <div className='logo'>
          <img alt={'logo'} src={config.logo}/>
          {layout.siderbarFold ? <span/> : <span>{config.name}</span>}
        </div>

        <Menus layout={layout}/>
      </Sider>
    )
  }
}