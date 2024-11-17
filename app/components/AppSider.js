"use client";
import React, { useEffect } from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { AppstoreOutlined, SearchOutlined, SettingOutlined, ContainerOutlined, BarcodeOutlined } from '@ant-design/icons';
import Link from "next/link";
import { usePathname } from "next/navigation";


const items = [
    {
      key: 'sub1',
      label: 'Подбор товара',
      icon: <SearchOutlined />,
      children: [
        { key: '1', label: <Link href="/code">По коду</Link>, path:"/code", icon: <BarcodeOutlined /> },
        { key: '2', label: <Link href="/name">По номеру</Link>, path:"/name", icon: <ContainerOutlined /> },
      ],
    },
    { key: 'sub2', label: 'История', icon: <AppstoreOutlined /> },
    { key: 'sub3', label: 'Избранное', icon: <SettingOutlined /> },
  ];


export default function AppSider(){
    const pathname = usePathname()
    const [collapsed, setCollapsed] = React.useState(false);
    const [selectedkey, setSelectedkey] = React.useState([""])

    useEffect(()=>{
        items.forEach((item)=>{
            if (pathname.startsWith(item.path)){
                setSelectedkey([item.key])
            }
        })
    }, [pathname]);

    return (
        <Sider width = {200}  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu 
            theme="light"
            items={items}
            mode="inline"
            selectedKeys={selectedkey}
            />

        </Sider>
    )
}