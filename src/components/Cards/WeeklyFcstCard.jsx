import React from 'react'
import './style.css'
import WeeklyFCSTChart from '../Charts/WeeklyFCSTChart'

function WeeklyFcstCard(props) {
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";

  return (
    <div className={className+'container'}>
        <p className={className+'title'}> Weekly <span>FCST</span></p>
        <WeeklyFCSTChart selectedids={props.selectedids} theme={props.theme} main={props.main}/>
    </div>
  )
}

export default WeeklyFcstCard