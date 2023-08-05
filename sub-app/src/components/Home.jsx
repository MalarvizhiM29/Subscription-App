import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="sub-page">
        <div className="container">
          <div className="top-heading">
            <h1 className="title">Subscription </h1>
            <img
              className="title-img"
              src="https://cdn-icons-png.flaticon.com/128/9398/9398952.png"
            ></img>
          </div>
          <cards className="plan-cards">
            <ul className="sub-cards">
              <li>
                <h2>FREE</h2>
              </li>
              <li>
                <span>$0</span>
              </li>
              <li>
                <p>
                  Unlock a daily dose of knowledge and assistance with our
                  complimentary subscription card. Post one thought-provoking
                  question each day and receive insightful answers. Expand your
                  horizons effortlessly!
                </p>
              </li>
              <li>
                <button className="btn">Free</button>
              </li>
            </ul>
            <ul className="sub-cards">
              <li>
                <h2>SILVER</h2>
              </li>
              <li>
                <span>$100</span>/MONTH
              </li>
              <li>
                <p>
                  Elevate your curiosity with our Silver Plan, offering the
                  freedom to post up to 5 intriguing questions daily. Embark on
                  a journey of discovery as our website provides you with
                  insightful answers and valuable insights at your fingertips.
                </p>
              </li>
              <li>
                <button className="btn">Buy Plan</button>
              </li>
            </ul>
            <ul className="sub-cards">
              <li>
                <h2>GOLD</h2>
              </li>
              <li>
                <span>$1000</span>/MONTH
              </li>
              <li>
                <p>
                  Experience limitless exploration with our Gold Unlimited Plan.
                  Seamlessly post unlimited questions daily and delve into a
                  world of knowledge as ourwebsite provides you with
                  comprehensive and enlightening answers.
                </p>
              </li>
              <li>
                <button className="btn">Buy Plan</button>
              </li>
            </ul>
          </cards>
        </div>
      </div>
    </>
  );
};

export default Home;
