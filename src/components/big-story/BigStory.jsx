import React from "react";
import "./bigStory.css";

const BigStory = () => {
  return (
    <div>
      <div className="big-story-heading">
        <div className="bsLeft"></div>
        <div className="bgHeading">BIG STORY</div>
        <div className="bsLeft"></div>
      </div>
      <div className="big-story">
        <div className="big-story-img">
          <img
            src="https://im.indiatimes.in/content/2023/Oct/bill-gates-networth_651e8dfabd977.jpg?w=1100&h=535&cc=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BigStory;
