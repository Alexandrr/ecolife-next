import React from 'react'
import { Route, Routes } from 'react-router'
import {Code} from "@/app/pages/code"
import {Name} from "@/app/pages/name"
import {HomePage} from "@/app"
import { Layout } from 'antd'


export default function AppRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={< HomePage/>}/>
                <Route path='code' element={< Code/>}/>
                <Route  path='name' element={< Name/>}/>
            </Route>
        </Routes>
    </>
  )
}
