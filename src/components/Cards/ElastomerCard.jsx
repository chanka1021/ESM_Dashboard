import React from "react";
import "./style.css";
import Clock from "react-live-clock";
import { getISOWeek } from "date-fns";
import logo from "../../img/logo.png";

function ElastomerCard(props) {
  let today = new Date().toISOString().slice(0, 10);

  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";

  return (
    <div className={className + "ElastomerCard"}>
      <div
        className={className + "logo"}
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <div className={className + "head-title"}>
        ESM<span>Dashboard</span>
      </div>
      <div className={className + "time"}>
        <div className={className+"clock"}>
          <Clock format={"h:mm:ssa"} ticking={true} />
        </div>
        <div className={className+"week-date"}>
          <p>{today}</p>
          <p>Week NB: {getISOWeek(new Date())}</p>
        </div>
      </div>
    </div>
  );
}

export default ElastomerCard;
