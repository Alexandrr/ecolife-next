"use client";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { AppstoreOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, SettingOutlined, ContainerOutlined, BarcodeOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import AppHeader from "@/app/components/AppHeader"
import AppSider from "@/app/components/AppSider"
import AppBreadcrumb from "@/app/components/AppBreadcrumb"





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const breadcrumbItems = [
    {title: 'По Коду', path: '/code'},
  ];
  return (
    <html lang="en">
      <body>
        <Layout style={{minHeight: '100vh',}}>
          <AppHeader/>
          <Layout hasSider>
            <AppSider/>
              <Layout style={{padding: 16}}>    
                <AppBreadcrumb items = {breadcrumbItems}/>
                <Content style={{margin: '0 16px'}}>
                <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
                    {children}
        </div>
                  </Content>
              </Layout>                
          </Layout> 
        </Layout>        
      </body>
    </html>
  );
}


