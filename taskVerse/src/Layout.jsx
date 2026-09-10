import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>  {/* what ever the router send that render here */}
        <Footer/>
        </>
    )
}

export default Layout