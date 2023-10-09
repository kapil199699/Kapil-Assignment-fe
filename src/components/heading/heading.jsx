import React from "react";
import "./heading.css";

const Heading = (props) => {
  return (
    <div>
      <div className="heading">
        <div className="heading-left"></div>
        <div className="heading-text">{props.name}</div>
        <div className="heading-right"></div>
      </div>
    </div>
  );
};

export default Heading;
