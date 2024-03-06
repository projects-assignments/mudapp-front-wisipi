import { NavBar } from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import  Footer  from "../componets/footer/Footer";
import Header from "./header/Header";




// import React from 'react'

type Props = {}

const Layoud = () => {
  return (
    <>
    <NavBar />
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layoud


