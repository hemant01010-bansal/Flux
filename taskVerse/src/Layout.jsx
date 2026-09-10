import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";

function Layout(){
    return (
        <>
        <Banner/>
        <Header/>
        <Outlet/>  {/* what ever the router send that render here */}
        <Footer/>
        </>
    )
}

export default Layout