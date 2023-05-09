import React from "react";
import "./feature.css";

export const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <section className="gpt3__features-container__feature-title">
      <div className="gradient-line" />
      <h1>{title}</h1>
    </section>

    <section className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </section>
  </div>
);
