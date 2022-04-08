import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';

function HeaderComponent() {
  const { Header } = Layout;
  return (
    <>
      <Header>
        <div className="logo">
          <Link to="/">React App</Link>
        </div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="repos1">
            <Link to="/repos1">Repos 01</Link>
          </Menu.Item>
          <Menu.Item key="repos2">
            <Link to="/repos2">Repos 02</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Outlet />
    </>
  );
}

export default HeaderComponent;
