import React, {useState} from 'react';
import { Layout, Menu,  Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
import logo from '../../img/logo.jpg';

const { Header, Content, Footer } = Layout;

const Menu_Data = [{
  label: 'HOME',
  url: '/',
  value: 'home'
}, {
  label: 'SHOP',
  url: '/shop',
  value: 'shop'
}, {
  label: 'BLOG',
  url: '/blog',
  value: 'blog'
}]

export default function LayoutWrapper(props){
  const [clickMenu, setClickMenu]= useState('home')
  return (
    <div>
      <Layout className={style.layoutWrapper}>
        <Header>
          <div className={style.headerWrapper}> 
            <div className={style.logo}>
              <img src={logo}/>
            </div>
            <div className={style.menuWrapper}>
              <Menu
                // theme="dark"
                mode="horizontal"
                // defaultSelectedKeys={['2']}
                selectedKeys={[clickMenu]}
                style={{ lineHeight: '64px' }}
                onClick={(key) => {
                  setClickMenu(key)
                }}
              >
              {
                Menu_Data.map((item, index) => {
                  return (
                    <Menu.Item key={item.value} value={item.value}>
                      <Link to={item.url}>{item.label}</Link>
                    </Menu.Item>
                  )
                })
              }
              </Menu>
            </div>
          </div>
        </Header>
        <Content>
          {props.children}
        </Content>
        <Footer>
          <div className={style.shareContent}>
          </div>
          <div className={style.footerContent}>
            Time Memory ©2020 Created by Cherish
          </div>
        </Footer>
      </Layout>
    </div>
  )
}