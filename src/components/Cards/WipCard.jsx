import React from "react";
import WipChart from "../Charts/WipChart";

function WipCard(props) {
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";

  return (
    <div className={className + "container"}>
      <p className={className + "title"}>WIP</p>
      <WipChart main={props.main} />
    </div>
  );
}

export default WipCard;
