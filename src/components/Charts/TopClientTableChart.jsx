import React from "react";
import { addMonths } from "date-fns";
import { KPI_FORCAST } from "../../Data/data";
import  {useState } from "react";
import { FormatCash } from "../functions";
import '../Cards/style.css'

export default function TopClientTableChart(props) {
  //#region Data Calcul
  const kpi_forcast = KPI_FORCAST();
  //////////// values of Next 2 Months ////////////////
  const arr = kpi_forcast.filter(
    (x) =>
      new Date(x.livraison) >= new Date() &&
      new Date(x.livraison) <= addMonths(new Date(), 2)
  );
  ////////////// sum of values By id & name//////
  const fcst_top_clients = Object.values(
    arr.reduce((acc, { code_client, fcS_Value, name }) => {
      acc[code_client] = acc[code_client] || {
        code_client: code_client,
        name: name,
        SumOfTotale_value: 0,
      };
      acc[code_client].SumOfTotale_value += fcS_Value;
      return acc;
    }, {})
  );
  /////////////// sort top 9//////////

  const top_9_Clients = fcst_top_clients
    .sort(
      (objB, objA) =>
        Number(new Date(objA.SumOfTotale_value)) -
        Number(new Date(objB.SumOfTotale_value))
    )
    .slice(0, 9);

//#endregion


const [selectedIds,setSelectedIds] = useState([]);

const handleCheck = (event) => {
  var selectedIds_array = [...selectedIds];
  if (event.target.checked) {
    selectedIds_array = [...selectedIds, parseInt(event.target.id)];
  } else {
    selectedIds_array.splice(selectedIds.indexOf(event.target.id), 1);
  }
  setSelectedIds(selectedIds_array);
};
props.setSelectedIds(selectedIds)
////Desgin ////
var className = "";
if (props.main) {
  className = "f-";
} else className = "";

 ///////////////Render Chart ///////////////////
  return (<>

<div>

<ul className="ul-top-client">
    <li className={className+"li-top-client"}>
        <div class="flex items-center pl-3">
            <input  onChange={handleCheck} id={top_9_Clients[0]?.code_client} type="checkbox" value="" />
            <p className="top-client-label"></p>
            <label  className={className+"ul-top-client-label"}>{top_9_Clients[0]?.name}</label>
            <label className={className+"ul-top-client-label-money"}> {FormatCash(top_9_Clients[0]?.SumOfTotale_value) } </label>
        </div>
    </li>
    <li className={className+"li-top-client"}>
        <div class="flex items-center pl-3">
            <input onChange={handleCheck} id={top_9_Clients[1]?.code_client} type="checkbox" value=""/>
            <p className="top-client-label"></p>          
            <label className={className+"ul-top-client-label"}>{top_9_Clients[1]?.name}</label>
            <label className={className+"ul-top-client-label-money"}> {FormatCash(top_9_Clients[1]?.SumOfTotale_value) } </label>
        </div>
    </li>
    <li className={className+"li-top-client"}>
        <div class="flex items-center pl-3">
            <input onChange={handleCheck} id={top_9_Clients[2]?.code_client} type="checkbox" value="" />
            <p className="top-client-label"></p>         
            <label className={className+"ul-top-client-label"}>{top_9_Clients[2]?.name}</label>
            <label className={className+"ul-top-client-label-money"}> {FormatCash(top_9_Clients[2]?.SumOfTotale_value) } </label>
        </div>
    </li>
    <li className={className+"li-top-client"}>
        <div class="flex items-center pl-3">
            <input onChange={handleCheck} id={top_9_Clients[3]?.code_client} type="checkbox" value="" />
            <p className="top-client-label"></p>
            <label className={className+"ul-top-client-label"}>{top_9_Clients[3]?.name}</label>
            <label className={className+"ul-top-client-label-money"}> {FormatCash(top_9_Clients[3]?.SumOfTotale_value) } </label>
        </div>
    </li>
    <li className={className+"li-top-client"}>
        <div class="flex items-center pl-3">
            <input onChange={handleCheck} id={top_9_Clients[4]?.code_client} type="checkbox" value="" />
            <p className="top-client-label"></p>         
            <label className={className+"ul-top-client-label"}>{top_9_Clients[4]?.name}</label>
            <label className={className+"ul-top-client-label-money"}> {FormatCash(top_9_Clients[4]?.SumOfTotale_value) } </label>
        </div>
    </li>
</ul>

    </div>
  </>)


}
