import React from "react";
import { KPI_Stock_Utilisation } from "../../Data/data";
import { FormatCash } from "../functions";

function WarehouseValueCard(props) {
  ////////////////DATA CALCUL/////////////////

  const kpi_stock_utilisations = KPI_Stock_Utilisation();
  let WarehouseValue = 236.80
  
  ////Desing //////
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";

  return (
    <div className={className+"sm-card-container"}>
      <p className={className+"sm-title"}>
        Warehoue <span>Value</span>{" "}
      </p>
      <div className={className+"card-money"}>{FormatCash(WarehouseValue)}€</div>
    </div>
  );
}

export default WarehouseValueCard;
