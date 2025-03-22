import { HandCoins, Expand, Handshake } from "lucide-react";
import "../styles/Section1.css";
const Section1 = () => {
  return (
    <>
      <div className="section-1 container">
        <div className="icon-text">
            <div>
              <HandCoins className="promo-icon" />
              <p>Increase your revenue</p>
            </div>
            <div>
              <Expand className="promo-icon" />
              <p>Expand brand awareness</p>
            </div>
            <div>
              <Handshake className="promo-icon" />
              <p>Build customer loyalty</p>
            </div>
                  </div>
        </div>
    </>
  );
};

export default Section1;
