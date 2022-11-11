import React from "react";
import { KPI_Stock_Utilisation } from "../../Data/data";
import { FormatCash } from "../functions";

function WarehouseValueCard(props) {
  ////////////////DATA CALCUL/////////////////

  const kpi_stock_utilisations = KPI_Stock_Utilisation();
  let WarehouseValue = 0;
  for (let i = 0; i < kpi_stock_utilisations.length; i++) {
    WarehouseValue +=
      kpi_stock_utilisations[i].prix_AVG *
      kpi_stock_utilisations[i].qtt_Box;
  }
  
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
