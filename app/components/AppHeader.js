import React from "react";
import { Header } from "antd/es/layout/layout";
import Search from "antd/es/input/Search";
import Title from "antd/es/typography/Title";
import { Color } from "antd/es/color-picker";
import { Button, Flex, Image, Space, Switch } from "antd";
import logo3 from "@/app/photos/logo3.jpg";  // Большой логотип


export default function AppHeader(){
    return (
        <Header style={{
            position: "sticky",
            top:0,
            padding:0,
            zIndex:1,
            width: "100%",
            display: "flex",
            alignItems:"center",
            justifyContent:"space-between"
          }}>
        <div id="logo"> <img
        style={{margin:"auto", display: "block"}}
         width={200}    
         src="https://ledline.az/image/cache/catalog/frametheme/ecolife-200x33.png"
        /></div>
       
        <Search 
            size="small"
            style={{width:300}}
            placeholder="Поиск по сайту"
        />
        

        <Flex>
            <Switch checkedChildren="RU" unCheckedChildren="AZ" />
        </Flex>
        </Header>
    )
}