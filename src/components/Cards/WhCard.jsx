import React from "react";
import WhScrap from "../Charts/WhScrap";

function WhCard(props) {
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";

  return (
    <div className={className + "container"}>
      <p className={className + "title"}>WIP</p>
      <WhScrap main={props.main} />
    </div>
  );
}

export default WhCard;
