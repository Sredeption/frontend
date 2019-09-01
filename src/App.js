import React from 'react';
import {Layout} from "antd";
import {Header, Sider} from "./layout";
import Routes from "./Routes";
import './App.scss'

const {
  Content,
  Footer
} = Layout;

function App() {
  return (
    <Layout>
      <Sider/>
      <Layout className='main'>
        <Header/>
        <Content className='container'>
          <Routes/>
        </Content>
        <Footer style={{textAlign: 'center'}}>Footer</Footer>
      </Layout>
    </Layout>

  );
}

export default App;
