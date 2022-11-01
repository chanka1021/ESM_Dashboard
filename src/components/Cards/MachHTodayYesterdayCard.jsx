import React from 'react'
import Yesterday_today_machineH from '../Charts/Yesterday_today_machineH'


function MachHTodayYesterdayCard(props) {
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";
  
  return (
    <div className={className+'container'} data-theme={props.theme}>
    <p className={className+'title'}> {props.title} <span>Machine H</span> </p>
    <Yesterday_today_machineH theme={props.theme} yesterday={props.yesterday} color={props.color} main={props.main}/>
  </div>
  )
}

export default MachHTodayYesterdayCard