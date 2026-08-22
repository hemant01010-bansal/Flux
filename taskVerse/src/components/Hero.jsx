import React from "react";
import './Hero.css';

function Hero() {
    return (
        <>
            <div className="headingLines">
                <h1>Organize Your Life.</h1>
                <h1>One Task at a Time.</h1>
                <p>Designed by the World's Best Developers</p>
            </div>

            <div className="start">
                <button>Start <i className="fa-solid fa-arrow-right" style={{color: "rgb(255, 255, 255)"}}></i></button>
            </div>
        </>
    )
}

export default Hero;