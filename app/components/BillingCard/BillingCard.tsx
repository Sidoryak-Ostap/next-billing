"use client";
import "./billingCard.css";

import { useEffect, useState } from "react";

import BenefitsList from "../BenefitsList/BenefitsList";
import Slider from "../Slider/Slider";
import ToogleButton from "../ToogleButton/ToogleButton";

import { plans } from "./plans";
import {
  rangeDivider,
  discountRate,
  defaultPlan,
  defaultSliderRange,
} from "./constants";
import StartMyTrialButton from "../StartMyTrialButton/StartMyTrialButton";

export type PlanType = {
  pageviews: string;
  price: number;
};

const BillingCard = () => {
  const [isButtonToogle, setIsButtonToogle] = useState<boolean>(false);
  const [sliderRange, setSliderRange] = useState<number>(defaultSliderRange);
  const [currentPlan, setCurrentPlan] = useState<PlanType>(defaultPlan);

  const calculatePrice = (price: number) =>
    isButtonToogle ? price * (1 - discountRate) : price;

  const handleButtonToogle = () => {
    setIsButtonToogle((prev) => !prev);
  };

  const handleSliderRange = (value: number) => {
    setSliderRange(value);
  };

  useEffect(() => {
    const planNumber: number = Math.round(sliderRange / rangeDivider);
    const newCurrentPlan: PlanType = plans[planNumber];

    const newPrice = calculatePrice(newCurrentPlan.price);
    setCurrentPlan({ ...newCurrentPlan, price: newPrice });
  }, [sliderRange, isButtonToogle]);

  return (
    <article className="card">
      <section className="card-header">
        <p className="pageviews">{currentPlan.pageviews} pageviews</p>
        <p className="price">
          <span className="price-value">${currentPlan.price}.00</span> /
          <span className="price-month">month</span>
        </p>
      </section>

      <Slider handleSliderRange={handleSliderRange} sliderRange={sliderRange} />

      <section className="billing-container" aria-label="Billing options">
        <p className="billing">Monthly billing</p>

        <ToogleButton handleButtonToogle={handleButtonToogle} />

        <p className="billing">Yearly billing</p>
        <p className="discount">
          25% <span className="discount-text">discount</span>
        </p>
      </section>

      <section className="card-footer">
        <BenefitsList />
        <StartMyTrialButton content="Start my trial" />
      </section>
    </article>
  );
};

export default BillingCard;
