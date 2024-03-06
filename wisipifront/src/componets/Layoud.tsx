import { NavBar } from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import  Footer  from "../componets/footer/Footer";
import  Transportistas  from "./Transportistas/Transportistas";




// import React from 'react'

type Props = {}

const Layoud = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <Transportistas />
    <Footer />
    </>
  )
}

export default Layoud


