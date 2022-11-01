import React from 'react'
import WarehouseInputsChart from '../Charts/WarehouseInputsChart'
import './style.css'

function WarehouseInputsCard(props) {
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";
 
  return (
    <div className={className+'container'}>
        <div className={className+"title"}>Warehouse<span>inputs</span></div>
        <WarehouseInputsChart theme={props.theme} main={props.main}/>
    </div>
  )
}

export default WarehouseInputsCard