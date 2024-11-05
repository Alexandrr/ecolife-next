import { Content, Footer, Header } from "antd/es/layout/layout";
import { AppstoreOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, SettingOutlined, ContainerOutlined, BarcodeOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import AppHeader from "@/app/components/AppHeader"
import AppSider from "@/app/components/AppSider"





export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout style={{minHeight: '100vh',}}>
          <AppHeader/>
          <Layout hasSider>
            <AppSider/>
              <Layout style={{minHeight: "calc(100vh-64px)", padding: 16}}>    
                <Content>{children}</Content>
              </Layout>
          </Layout> 
        </Layout>
        <Footer>footer</Footer>        
      </body>
    </html>
  );
}


