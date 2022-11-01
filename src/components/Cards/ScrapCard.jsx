import React from "react";
import ScrapChart from "../Charts/ScrapChart";

function ScrapCard(props) {
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";

  return (
    <div className={className+"container"}>
      <p className={className+"title"}>Scrap</p>
      <ScrapChart main={props.main}/>
    </div>
  );
}

export default ScrapCard;
