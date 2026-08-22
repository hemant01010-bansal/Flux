import React from "react";
import './Footer.css';
import logo from '../images/logo.jpg'
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="site-footer">

                <div className="footer-top">

                    <div className="footer-brand">
                        <NavLink to="/"><img src={logo} alt="Flux" className="logo" /></NavLink>
                            <p className="footer-tagline">
                                Stay organized, plan with confidence, and focus
                                on what matters most — every single day.
                            </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Product</h4>
                            <a href="#">Features</a>
                            <a href="#">Pricing</a>
                        </div>

                        <div className="footer-col">
                            <h4>Company</h4>
                            <a href="#">About</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </div>

                        <div className="footer-col">
                            <h4>Resources</h4>
                            <a href="#">Help Center</a>
                            <a href="#">Community</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; <span id="year"></span> Flux. All rights reserved.</p>

                    <div className="footer-socials">
                        <a href="#" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;