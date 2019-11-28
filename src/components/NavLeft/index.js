import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig'
import './index.less'
const { SubMenu } = Menu;

export default class NavLeft extends React.Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    })
  }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo_antd.svg" alt=""/>
          <h1>Admin-AntD</h1>
        </div>
        <Menu theme="dark" className="sidebar">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}