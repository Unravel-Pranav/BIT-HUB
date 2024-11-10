import React from "react";
import "./home.css";

import GoalTestinominal from "../../components/GoalTestimonial";

import FilterComponent from "../../components/FilterComponent";

export default function Home() {
  return (
    <>
      <div className="container ">
        <div className="row ">
          {/* Left Side of home page */}
          <div className="col-md-6 ">
            <div className="center-text" style={{ textAlign: "center" }}>
              <h1> Cloud Computing CA2 Activity</h1>
            </div>
            <div className="">
            {/* Filter box */}
            <FilterComponent />
            </div>
          </div>
          {/* Right side of home page */}
          <div className="col-md-6 mb-2 d-none d-md-block">
            <img
              className="img-fluid"
              src="https://github.com/Unravel-Pranav/BIT-HUB/blob/main/client/public/Animated_Maa_Saraswati_devi.png"
              alt=""
            />
          </div>
        </div>

        <div className="">
          <GoalTestinominal />
        </div>
      </div>
    </>
  );
}
