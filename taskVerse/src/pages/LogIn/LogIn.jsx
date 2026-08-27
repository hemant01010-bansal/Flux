import React from "react";
import "./LogIn.css";
import logo from "../../images/exportImages";
import { NavLink } from "react-router-dom";

function LogIn() {
    return (
        <div className="login-page">

            <img src={logo} alt="Flux Logo" className="flux-logo" />

            <div className="final-div">
                <div className="login-container">

                    <h2 className="login-text">Log in to Flux</h2>
                    <p className="login-subtitle">Welcome Back 👋</p>

                    <form>
                        <input type="email" className="input-email" placeholder="Email" autoComplete="email" />

                        <div className="password-div">
                            <input className="input-password" type="password" placeholder="Password" autoComplete="current-password" />
                        </div>

                        <button type="submit" className="login-btn">
                            Login
                        </button>
                    </form>

                    <div className="login-divider">
                        <span>or</span>
                    </div>

                    <div className="login-with-google">
                        <p><i class="fa-brands fa-google" style={{color: "rgb(255, 255, 255)"}}></i>Continue with Google</p>
                    </div>

                    <div className="show-signup">
                        <p>Don't have an account?</p>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </div>

                </div>
            </div>

            <footer className="footerc">
                <p>© 2026 Flux. All rights reserved.</p>
                <p>Built with ❤️ </p>
            </footer>

        </div>
    );
}

export default LogIn;