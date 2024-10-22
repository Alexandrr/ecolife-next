import React from "react";
import { Header } from "antd/es/layout/layout";
import Search from "antd/es/input/Search";
import Title from "antd/es/typography/Title";
import { Color } from "antd/es/color-picker";


export default function AppHeader(){
    return (
        <Header style={{
            position: "sticky",
            top: 0,
            padding: 0,
            display: "flex",
            alignItems:"center",
            justifyContent:"space-between"
          }}>
        <Title level={3} style={{margin:0, color:"#FFFFFF"}}>EcoLife</Title>
        <Search 
            size="large"
            style={{width:300}}
            enterButton ="Поиск"
            placeholder="Поиск по сайту"
        />
          </Header>
    )
}