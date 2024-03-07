import { NavBar } from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import  Footer  from "./footer/Footer";
import {FacilSeguro} from "./facilseguro/FacilSeguro";
import Card from "./Card/Card";
import { useLocation } from "react-router-dom";







// import React from 'react'

type Props = {}

export const Layout = () => {
  const location = useLocation();
  const isProfilePage = location.pathname === "/Profile"
  // const isModal_paymentPage = location.pathname === "/Modal_payment"
  return (
    <>
    <NavBar />
    {!isProfilePage 
     &&   <Header/>} 
    {!isProfilePage && <Card/>}
    {!isProfilePage && <FacilSeguro/> }
    <Outlet />
    <Footer />
   
    </>
  )
}

export default Layout


