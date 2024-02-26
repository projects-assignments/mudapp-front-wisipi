import { Outlet } from "react-router-dom";
import { NavBar } from "./navbar/NavBar";
import { AuthProvider } from "../context/AuthContext";
import {Footer} from "./footer/Footer";

export const AuthLayoud = () => {
  return (
    <>
      <NavBar />
      <AuthProvider>
        <Outlet />
      </AuthProvider>
      <Footer/>
    </>
  );
};
