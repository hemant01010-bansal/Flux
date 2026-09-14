import React from "react";
import './SignUp.css'
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/exportImages";

function SignUp() {
    return (
        <>
            <div className="signup-page">

                <NavLink to="/"><img src={logo} alt="Flux Logo" className="flux-logo" /></NavLink>

                <div className="final-div">
                    <div className="signup-container">

                        <h2 className="signup-text">Sign up to continue</h2>
                        <p className="signup-subtitle">Let's Get Started</p>

                        <form>
                            <input type="text" className="input-email" placeholder="Name" />
                            <input type="email" className="input-email" placeholder="Email" autoComplete="email" />

                            <div className="password-div">
                                <input className="input-password" type="password" placeholder="Password" autoComplete="current-password" />
                            </div>

                            <button type="submit" className="signup-btn">
                                SignUp
                            </button>
                        </form>

                        <div className="signup-divider">
                            <span>or</span>
                        </div>

                        <div className="signup-with-google">
                            <p><i class="fa-brands fa-google" style={{ color: "rgb(255, 255, 255)" }}></i>Continue with Google</p>
                        </div>

                        <div className="show-signup">
                            <p>Already have an account?</p>
                            <NavLink to="/logIn">Log in</NavLink>
                        </div>

                    </div>
                </div>

                <footer className="footerc">
                    <p>© 2026 Flux. All rights reserved.</p>
                    <p>Built with ❤️ </p>
                </footer>

            </div>
        </>
    )
}

export default SignUp;