import { NavBar } from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import  Footer  from "./footer/Footer";


type Props = {}

const Layout = () => {
  
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout


