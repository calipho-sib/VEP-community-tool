import React from "react";
import { INSTRUCTIONS } from "../utils/constants";

const Instructions = () => {
  return (
    <div className="instructions-container">
      <h3>instructions</h3>
      {Object.entries(INSTRUCTIONS).map(([key, value]) => {
        return (
          <div className="instructions-list" key={value}>
            <h5>{key}</h5>
            <p>{value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Instructions;
