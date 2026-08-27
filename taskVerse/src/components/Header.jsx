import React, { useState } from "react";
import './Header.css';
import logo from '../images/logo.jpg'
import { useRef } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [isOpen, setisOpen]=useState(false);

    return (
        <>
            {/* full screen bar for small width devices and display none for laptops width */}
            <div className={`sideBar ${isOpen? 'show':''}`}>
                <div className="sideBarHead">
                    <NavLink to="/"><img src={logo} alt="Flux" className="logo" /></NavLink>
                    <div className="sideBarClose" onClick={()=> setisOpen(false)}>
                        <i className="fa-solid fa-xmark" style={{color: "rgb(255, 255, 255)"}}></i>
                    </div>
                </div>

                <div className="sideBarLinks">
                    {/* <a href="#">About</a>
                    <a href="#">Help</a>
                    <a href="#">Contact</a>
                    <a href="blog.html">Blogs</a> */}
                    <NavLink to="/" className={({isActive})=>`${isActive ? "onPageLinkActive" : ""}`}>About</NavLink>
                    {/* <NavLink to="/home">Home</NavLink>
                    <NavLink to="/contact">Contanct</NavLink> */}
                    <NavLink to="/blogs" className={({isActive})=>`${isActive ? "onPageLinkActive" : ""}`}>Blogs</NavLink>
                </div>

                <div className="sideBarsyLogin">
                    <button className="login">Login</button>
                    <button className="signin">Sign Up</button>
                </div>
            </div>

            {/* nav bar for laptops width and display not for small width devices */}
            <nav>
                <div className="logo"><NavLink to="/"><img src={logo} alt="Flux" className="logo" /></NavLink></div>
                <div className="navLinks">
                    {/* <a href="#">About</a>
                    <a href="#">Help</a>
                    <a href="#">Contact</a>
                    <a href="blog.html">Blogs</a> */}
                    <NavLink to="/" className={({isActive})=>`${isActive ? "onPageLinkActive" : ""}`}>About</NavLink>
                    {/* <NavLink to="/home">Home</NavLink>
                    <NavLink to="/contact">Contanct</NavLink> */}
                    <NavLink to="/blogs" className={({isActive})=>`${isActive ? "onPageLinkActive" : ""}`}>Blogs</NavLink>
                </div>
                <div className="syLogin">
                    <NavLink to="/logIn"><button className="login">Login</button></NavLink>
                    <NavLink to="/signUp"><button className="signin">Sign Up</button></NavLink>
                </div>
                <div className="headBar" onClick={()=> setisOpen(true)}><i className="fa-solid fa-bars" style={{ color: "rgb(255, 255, 255)" }}></i></div>
            </nav>
        </>
    )
}

export default Header;