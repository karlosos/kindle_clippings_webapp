import React, { useState } from 'react'
import { Menu } from 'antd';
import {
  BookFilled,
  SettingOutlined,
  HomeFilled,
  PlusSquareFilled,
  HighlightFilled,
  HeartFilled,
  DeleteFilled
} from '@ant-design/icons';
import { Input, Space } from 'antd';


const { SubMenu } = Menu;
const { Search } = Input;

const SideMenu = () => {

  const handleClick = e => {
    console.log('click ', e);
  };

  const onSearch = value => console.log(value);

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 232 }}
      defaultOpenKeys={['1, books']}
      mode="inline"
      style={{ height: '100%', borderRight: 0 }}
      inlineIndent={16} 
    >
      <SubMenu key="1" title="Quick Links" expandIcon={<></>}>
        <Menu.Item key="dashboard"><HomeFilled /> Dashboard</Menu.Item>
        <Menu.Item key="import"><PlusSquareFilled /> Import</Menu.Item>
        <Menu.Item key="allhighlights"><HighlightFilled /> All Highlights</Menu.Item>
        <Menu.Item key="favorites"><HeartFilled /> Favorites</Menu.Item>
        <Menu.Item key="deleted"><DeleteFilled /> Deleted</Menu.Item>
      </SubMenu>
      <SubMenu key="books" title="Books" expandIcon={<></>}>
        <li style={{ paddingLeft: "16px", paddingRight: "16px", marginTop: '8px', marginBottom: '4px' }}>
          <Search placeholder="Search Book" onSearch={onSearch} style={{ width: 200 }} />
        </li>
        <Menu.Item key="1"><BookFilled /> Book 1</Menu.Item>
        <Menu.Item key="2"><BookFilled /> Book 2</Menu.Item>
        <Menu.Item key="3"><BookFilled /> Book 3</Menu.Item>
        <Menu.Item key="4"><BookFilled /> Book 4</Menu.Item>
      </SubMenu>
    </Menu>
  )
}

export default SideMenu