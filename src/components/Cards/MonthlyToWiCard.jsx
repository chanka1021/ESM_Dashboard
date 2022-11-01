import React from 'react'
import './style.css'
import MonthlyToWiChart from '../Charts/MonthlyToWiChart'


function MonthlyToWiCard(props) {
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";

  return (
    <div className={className+'container'}>
        <p className={className+'title'}> Monthly <span>TO & WI </span></p>
        <MonthlyToWiChart theme={props.theme} main={props.main}/>
    </div>
  )
}

export default MonthlyToWiCard