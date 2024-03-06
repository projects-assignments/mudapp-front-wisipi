import { NavBar } from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";




// import React from 'react'

type Props = {}

const Layout = () => {
  return (
    <>
    <NavBar />
    <Header />
    <Outlet />
   
    </>
  )
}

export default Layout


