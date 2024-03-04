import { NavBar } from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import {Card_Home} from "./cards/Card_Home";
import  Footer  from "./footer/Footer";
import {FacilSeguro} from "./facilseguro/FacilSeguro"




// import React from 'react'

type Props = {}

const Layout = () => {
  return (
    <>
    <NavBar />
    <Card_Home/>
    <FacilSeguro/>
    <Outlet />
   <Footer />
    </>
  )
}

export default Layout


