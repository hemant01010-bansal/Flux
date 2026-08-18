import React, { useState } from "react";
import './Header.css';
import logo from '../images/logo.jpg'
import { useRef } from "react";

function Header() {
    const [isOpen, setisOpen]=useState(false);

    return (
        <>
            {/* full screen bar for small width devices and display none for laptops width */}
            <div className={`sideBar ${isOpen? 'show':''}`}>
                <div className="sideBarHead">
                    <a href="front.html"><img src={logo} alt="Flux" className="logo" /></a>
                    <div className="sideBarClose" onClick={()=> setisOpen(false)}>
                        <i className="fa-solid fa-xmark" style={{color: "rgb(255, 255, 255)"}}></i>
                    </div>
                </div>

                <div className="sideBarLinks">
                    <a href="#">About</a>
                    <a href="#">Help</a>
                    <a href="#">Contact</a>
                    <a href="blog.html">Blogs</a>
                </div>

                <div className="sideBarsyLogin">
                    <button className="login">Login</button>
                    <button className="signin">Sign Up</button>
                </div>
            </div>

            {/* nav bar for laptops width and display not for small width devices */}
            <nav>
                <div className="logo"><a href="front.html"><img src={logo} alt="Flux" className="logo" /></a></div>
                <div className="navLinks">
                    <a href="#">About</a>
                    <a href="#">Help</a>
                    <a href="#">Contact</a>
                    <a href="blog.html">Blogs</a>
                </div>
                <div className="syLogin">
                    <button className="login">Login</button>
                    <button className="signin">Sign Up</button>
                </div>
                <div className="headBar" onClick={()=> setisOpen(true)}><i className="fa-solid fa-bars" style={{ color: "rgb(255, 255, 255)" }}></i></div>
            </nav>
        </>
    )
}

export default Header;