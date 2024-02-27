import { NavBar } from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import  Footer  from "../componets/footer/Footer";




export const Layoud =()=> {
  

  return (
    
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
      
    
  )
}


