import React from "react";
import './Features.css';

function Features(){
    return(
        <>
        <section className="feature">

            <div className="feature-item">
                <div className="content">
                    <span className="small-heading">FOCUS ON WHAT'S IMPORTANT</span>
                    <h1>Stay organized and focused</h1>
                    <p>
                        Achieve mental clarity by sorting tasks into Today,
                        Upcoming, or custom filters. Focus only on what
                        matters at the right moment.
                    </p>
                </div>
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1758640920659-0bb864175983?w=600&h=450&auto=format&fit=crop&q=60"
                        alt="Task organization app"/>
                </div>
            </div>

            <div className="feature-item reverse">
                <div className="image">
                    <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=60"
                        alt="Weekly planning calendar"/>
                </div>
                <div className="content">
                    <span className="small-heading">PLAN WITH CONFIDENCE</span>
                    <h1>Simplify your planning</h1>
                    <p>
                        Plan your entire week using an intuitive calendar,
                        recurring tasks and reminders. Never miss what
                        matters again.
                    </p>
                </div>
            </div>

        </section>


        <div className="adCards">
            <div className="adCard">
                <div className="adCardIcon"><i className="fa-solid fa-play" style={{color: "rgb(255, 255, 255)"}}></i></div>
                <h2>Intuitive</h2>
                <p>orem impus faclkl jasfdkljeoi </p>
            </div>

            <div className="adCard">
                <div className="adCardIcon"><i className="fa-solid fa-arrow-trend-up" style={{color: "rgb(255, 255, 255)"}}></i>
                </div>
                <h2>Visual Progress</h2>
                <p>orem impus faclkl jasfdkljeoi </p>
            </div>

            <div className="adCard">
                <div className="adCardIcon"><i className="fa-solid fa-database" style={{color: "rgb(255, 255, 255)"}}></i></div>
                <h2>Store ur tasks</h2>
                <p>We store your tasks so that you can see them later. </p>
            </div>
        </div>
        </>
    )
}

export default Features;