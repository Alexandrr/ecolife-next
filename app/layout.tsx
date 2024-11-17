"use client";
import { Content} from "antd/es/layout/layout";
import { Layout, theme} from 'antd';
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
  return (
    <html lang="en">
      <body>
        <Layout style={{minHeight: '100vh',}}>
          <AppHeader/>
          <Layout hasSider>
            <AppSider/>
              <Layout style={{padding: 16}}>    
                <AppBreadcrumb/>
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


