import React from "react";
import WeeklyToChart from "../Charts/WeeklyToChart";
import "./style.css";

function WeeklyToCard(props) {
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";

  return (
    <div className={className+"container"}>
      <p className={className+"title"}>
        {" "}
        Weekly <span>TO & WI</span>
      </p>
      <WeeklyToChart selectedids={props.selectedids} theme={props.theme} main={props.main}/>
    </div>
  );
}

export default WeeklyToCard;
