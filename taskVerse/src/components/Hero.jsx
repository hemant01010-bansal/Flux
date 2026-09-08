import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";

function Hero() {
    return (
        <>
            <div className="headingLines">
                <h1>Organize Your Life.</h1>
                <h1>One Task at a Time.</h1>

                <p>Designed by the World's Best Developers</p>

                {/* Time quote */}
                <div className="timeQuote">
                    "Time is your most valuable resource. Spend it with purpose."
                </div>
            </div>

            <div className="start">
                <NavLink to="home">
                    <button>
                        Start <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </NavLink>
            </div>
        </>
    );
}

export default Hero;