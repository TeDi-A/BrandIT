import "../styles/Section2.css";
import { useEffect } from "react";

import {
  toggleSectionImageLg,
  toggleSectionImageMobile,
} from "../helpers/toggleSectionImage";
const Section2 = () => {
  useEffect(() => {
    if (window.innerWidth > 900) {
      window.addEventListener("scroll", toggleSectionImageLg);
      return () => {
        window.removeEventListener("scroll", toggleSectionImageLg);
      };
    } else {
      toggleSectionImageMobile();
    }
  }, []);

  return (
    <section className="section-2 container">
      <div className="section-2-content ">
        <div className="feature-text-container">
          <div className="feature-text feature-1">
            <h1 className="feature-header">
              Customized solutions to your business goal
            </h1>
            <p className="feature-content">
              Our team of experts will help you build the right solution for
              your business. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deserunt quia dolorum alias tempora labore perspiciatis
              omnis aliquid, hic sapiente expedita repudiandae nesciunt
              temporibus vel.
            </p>
            <div className="mobile-img-container">
              <img
                className="feature-img-mobile"
                src="./assets/images/Solutions.png"
                alt=""
              />
            </div>
          </div>
          <div className="feature-text feature-2">
            <h1 className="feature-header">
              Review trending marketing consulting topics
            </h1>
            <p className="feature-content">
              We provide you with the latest trends in marketing consulting to
              help you stay ahead of the competition. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Deserunt quia dolorum alias tempora
              labore perspiciatis omnis aliquid, hic sapiente expedita
              repudiandae nesciunt temporibus vel.
            </p>
            <div className="mobile-img-container">
              <img
                className="feature-img-mobile"
                src="./assets/images/Trending.png"
                alt=""
              />
            </div>
          </div>
          <div className="feature-text feature-3">
            <h1 className="feature-header">
              Automate advertisement operations
            </h1>
            <p className="feature-content">
              Our platform allows you to automate your advertisement operations
              to save you time and money. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deserunt quia dolorum alias tempora labore
              perspiciatis omnis aliquid, hic sapiente expedita repudiandae
              nesciunt temporibus vel.
            </p>
            <div className="mobile-img-container">
              <img
                className="feature-img-mobile"
                src="./assets/images/Automate ads.png"
                alt=""
              />
            </div>
          </div>
          <div className="feature-text feature-4">
            <h1 className="feature-header">
              Reach out to your target customers
            </h1>
            <p className="feature-content">
              We help you reach out to your target customers and increase your
              revenue. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt quia dolorum alias tempora labore perspiciatis omnis
              aliquid, hic sapiente expedita repudiandae nesciunt temporibus
              vel.
            </p>
            <div className="mobile-img-container">
              <img
                className="feature-img-mobile"
                src="./assets/images/Target audience.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="feature-img-container">
          <div className="sticky-img-container">
            <img
              className="feature-img-lg"
              src="./assets/images/Solutions.png"
              alt=""
            />
            <img
              className="feature-img-lg"
              src="./assets/images/Trending.png"
              alt=""
            />
            <img
              className="feature-img-lg"
              src="./assets/images/Automate ads.png"
              alt=""
            />
            <img
              className="feature-img-lg"
              src="./assets/images/Target audience.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
