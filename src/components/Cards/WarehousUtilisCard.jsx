import React from "react";
import WarehouseUtilisChart from '../Charts/WarehouseUtilisChart'
import './style.css'


function WarehousUtilisCard(props) {
  const theme = props.theme;
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";
  
  return (
    <div className={className+"container"}>
      <div className={className+"title"}> Warehouse <span>utilization</span>  </div>
      <WarehouseUtilisChart theme={props.theme} main={props.main}/>
    </div>
  );
}

export default WarehousUtilisCard;
