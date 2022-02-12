import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function MainImg() {
  return (
    <div id="icon">
      <ReactAnimatedWeather
        icon={"CLEAR_DAY"}
        color="#000"
        size="100"
        animate="true"
      />
    </div>
  );
}
