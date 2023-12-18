import React from "react";
import "./Cardadata.css";
import carddata from "../../Jsondata/carddata.json";

const CardDataComponent = () => {
  return (
    <div className="task">
      <h3 className="taskname">Card Data UI</h3>
      {carddata.map((data) => {
        return (
          <div className="cardcontainer">
            <p className="title">{data.title}</p>
            <p className="value">{data.value}</p>
            <p className="description">{data.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardDataComponent;
