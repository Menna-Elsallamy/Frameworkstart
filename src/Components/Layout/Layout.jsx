import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Headerone from '../Headerone/Headerone'

export default function Layout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Headerone></Headerone>
        <Footer></Footer>
    </div>
  )
}
