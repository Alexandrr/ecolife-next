import React from 'react'
import { useState } from 'react'
import { Breadcrumb } from 'antd'


export default function AppBreadcrumb({items}) {
  console.log(items)
  return (
    <div>
       <Breadcrumb style={{ margin: '16px 0' }} items={items}/>   
    </div>         
  )
}
