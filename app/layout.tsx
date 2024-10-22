import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
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
        <Layout style={{minHeight: "100vh"}}>
        <AppHeader/>
        {/* <Layout hasSider>
          <AppSider>

          </AppSider>
        </Layout> */}
        <Content>{children}</Content>
        <Footer></Footer>
        </Layout>
        
        
      </body>
    </html>
  );
}
