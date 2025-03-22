import "../styles/HeroSection.css";
import { PryBtn } from "../components/button";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="main-text">
              <div>The Next Level</div>
              <div>
                <span className="content-lvl-1">Marketing </span> For
              </div>
              <div>
                <span className="content-lvl-2">Your Brand</span>
              </div>
            </div>
            <div className="sub-text">
              <p>Grow your business the right way!</p>
            </div>
            <div>
              <PryBtn>Get Started</PryBtn>
            </div>
          </div>

          <div>
            <img
              className="hero-image"
              src="./assets/images/Marketing Campaign.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
