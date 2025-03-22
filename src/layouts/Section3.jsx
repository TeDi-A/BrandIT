import "../styles/Section3.css";
import { PryBtn, SecBtn } from "../components/button";
import { CircleCheckIcon } from "lucide-react";
import { useState } from "react";

const PricingPlans = ({
  pricingName,
  pricingDesc,
  pricingCost,
  pricingListItem1,
  pricingListItem2,
  pricingListItem3,
  pricingListItem4,
  ButtonItem,
  ButtonContent,
}) => {

  return (
    <div className="pricing-plan">
      <div className="pricing-text">
        <h3 className="pricing-plan-name">{pricingName}</h3>
        <p className="pricing-plan-desc">{pricingDesc}</p>
        <h2 className="pricing-plan-cost">{pricingCost}</h2>
      </div>
      <ButtonItem>{ButtonContent}</ButtonItem>

      <div className="pricing-details">
      <ul>
          {pricingListItem1 && (
            <li>
              <CircleCheckIcon className="list-check" />
              {pricingListItem1}
            </li>
          )}
          {pricingListItem2 && (
            <li>
              <CircleCheckIcon className="list-check" />
              {pricingListItem2}
            </li>
          )}
          {pricingListItem3 && (
            <li>
              <CircleCheckIcon className="list-check" />
              {pricingListItem3}
            </li>
          )}
          {pricingListItem4 && (
            <li>
              <CircleCheckIcon className="list-check" />
              {pricingListItem4}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <>
      <section className="section-3 container">
        <div className="section-3-text">
          <h2 className="section-3-header">Pricing</h2>
          <p className="section-3-description">Choose an affordable plan</p>
        </div>
        <div className="pricing-containers">
          <div className="pricing-container">
            <PricingPlans
              pricingName="Basic"
              pricingDesc="For individuals and small firms"
              pricingCost="$10"
              ButtonItem={SecBtn}
              ButtonContent="Get Started"
              pricingListItem1="Lorem ipsum"
              pricingListItem2="Lorem ipsum"
            />

            <PricingPlans
              pricingName="Standard"
              pricingDesc="For medium to large scale firms"
              pricingCost="$10"
              ButtonItem={PryBtn}
              ButtonContent="Get Started"
              pricingListItem1="Lorem ipsum"
              pricingListItem2="Lorem ipsum"
              pricingListItem3="Lorem ipsum"
            />

            <PricingPlans
              pricingName="Premium"
              pricingDesc="For enterprises and companies"
              pricingCost="$10"
              ButtonItem={SecBtn}
              ButtonContent="Get Started"
              pricingListItem1="Lorem ipsum"
              pricingListItem2="Lorem ipsum"
              pricingListItem3="Lorem ipsum"
              pricingListItem4="Lorem ipsum"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
