/* eslint-disable no-unused-vars */
import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Decide Meals you want to donate",
      text: "First Decide what you want to donate and as per that make your mind",
    },
    {
      image: ChooseMeals,
      title: "Make Sure the quality is good",
      text: "We don't want to donate uncooked expired meals so make sure before putting up your donation request the meal should be good",
    },
    {
      image: DeliveryMeals,
      title: "Delivering to the needy",
      text: "Once your request is accepted by the NGO they will donate your food to the needy.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          End to End food donation to the needy. We make sure the food is delivered to the needy and not wasted.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
