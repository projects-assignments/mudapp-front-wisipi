import { NavBar } from "./navbar/NavBar";
import { Outlet } from "react-router-dom";

import  Footer  from "./footer/Footer";
// import {FacilSeguro} from "./facilseguro/FacilSeguro"




// import React from 'react'

type Props = {}

const Layout = () => {
  return (
    <>
    <NavBar />
   
    {/* <FacilSeguro/> */}
    <Outlet />
   <Footer />
    </>
  )
}

export default Layout


