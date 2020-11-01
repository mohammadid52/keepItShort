import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { Header, Sidebar, MainContent } from '../Components';

const { Sider } = Layout;

const Home = () => {
  const { uid } = useSelector(({ firebase: { auth } }) => auth);

  if (!uid) {
    return <Redirect to="/login" />;
  }
  return (
    <Layout style={{ height: '100vh', width: '100vw' }}>
      <Sider
        style={{ height: '100%', background: '#fff', zIndex: 10 }}
        width={200}
        className="site-layout-background">
        <Sidebar />
      </Sider>
      <Layout>
        <Header />
        <MainContent />
      </Layout>
    </Layout>
  );
};

export default Home;
