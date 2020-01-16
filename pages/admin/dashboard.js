import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import AppLayout from '../../components/layout';
// import Footer from '../../components/footer';

const { Header, Sider, Content, Footer } = Layout;

const AdminDashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <AppLayout bodyStyle={{ width: '100%' }} navStyle={{ paddingLeft: '24px' }}>
      <Layout style={{ minHeight: 'calc(100vh - 72px)' }}>
        <Sider trigger={null} collapsible collapsed={false}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="form" />
              <span>Articles</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="video-camera" />
              <span>Videos</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="file-image" />
              <span>Images</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="user" />
              <span>Users</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={isCollapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggleCollapse}
            />
          </Header> */}
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            Content
          </Content>
          <Footer>&copy; 2020 NURC</Footer>
        </Layout>
      </Layout>
      <style jsx>{`
        #components-layout-demo-custom-trigger .trigger {
          font-size: 18px;
          line-height: 64px;
          padding: 0 24px;
          cursor: pointer;
          transition: color 0.3s;
        }

        #components-layout-demo-custom-trigger .trigger:hover {
          color: #1890ff;
        }

        #components-layout-demo-custom-trigger .logo {
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          margin: 16px;
        }
      `}</style>
    </AppLayout>
  );
};

export default AdminDashboard;
