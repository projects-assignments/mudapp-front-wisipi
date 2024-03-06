import { NavBar } from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import  Footer  from "./footer/Footer";
import {FacilSeguro} from "./facilseguro/FacilSeguro";
import Card from "./Card/Card";





// import React from 'react'

type Props = {}

const Layout = () => {
  return (
    <>
    <NavBar />
    <Header/> 
    <Card/>
    <FacilSeguro/> 
    <Outlet />
    <Footer />
   
    </>
  )
}

export default Layout


