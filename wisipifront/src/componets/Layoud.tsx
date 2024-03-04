import { NavBar } from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import  Footer  from "../componets/footer/Footer";
import  Card  from "./Card/Card";




// import React from 'react'

type Props = {}

const Layoud = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <Card />
    <Footer />
    </>
  )
}

export default Layoud


