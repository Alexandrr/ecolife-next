"use client";
import React from 'react'
import { Breadcrumb } from 'antd'
import { usePathname } from "next/navigation";



export default function AppBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "");
  var items = []
  segments.map((item)=>{
      if (item == "code")
      {
        items.push({title: 'По Коду'})
      }
      if (item == "name")
      {
        items.push({title: 'По Номенклатуре'})
      }
      
  });
  return (
    <div>
       <Breadcrumb style={{ margin: '16px 0' }} items={items}/>   
    </div>         
  )
}
