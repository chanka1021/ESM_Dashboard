import React from "react";
import OtifChart from "../Charts/OtifChart";
import "./style.css";

function OtifCard(props) {
  const theme = props.theme;
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";
  

  return (
    <div className={className+"container"} data-theme={props.theme}>
      <div className={className+"title"}> OTIF </div>
      <OtifChart theme={theme} main={props.main}/>
    </div>
  );
}

export default OtifCard;
