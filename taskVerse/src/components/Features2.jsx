import React from "react";
import "./Features2.css";

function Features2() {
  return (
    <>
    {/* wavy line jsx */}
    <div className="waveDivider">
      <svg
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="wavePath"
          d="M0,75
             C180,20 300,20 480,75
             S780,130 960,75
             S1260,20 1440,75"
        />
      </svg>

      <div className="waveDot"></div>
    </div>
    

    {/* css for main 4 section */}
    <section className="features2">
      <div className="features2Heading">
        <span>WHY FLUX?</span>
        <h1>Everything you need to stay productive</h1>
        <p>
          Flux helps you organize your tasks, track your progress,
          and keep your daily work under control.
        </p>
      </div>

      <div className="features2Grid">
        <div className="features2Card">
          <div className="features2Icon">
            <i className="fa-solid fa-list-check"></i>
          </div>
          <h2>Manage Your Tasks</h2>
          <p>
            Create, edit, complete, and delete tasks from one simple
            and organized workspace.
          </p>
        </div>

        <div className="features2Card">
          <div className="features2Icon">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <h2>Track Your Progress</h2>
          <p>
            Keep track of completed tasks and see how much work
            you have accomplished throughout your day.
          </p>
        </div>

        <div className="features2Card">
          <div className="features2Icon">
            <i className="fa-solid fa-clock-rotate-left"></i>
          </div>
          <h2>Task History</h2>
          <p>
            Review your completed tasks and keep a record of your
            previous work whenever you need it.
          </p>
        </div>

        <div className="features2Card">
          <div className="features2Icon">
            <i className="fa-solid fa-bolt"></i>
          </div>
          <h2>Stay Focused</h2>
          <p>
            Keep your attention on what matters by turning your
            daily plans into clear and manageable tasks.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default Features2;