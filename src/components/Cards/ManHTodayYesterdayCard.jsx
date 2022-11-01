import React from 'react'
import Yesterday_today_manH from '../Charts/Yesterday_today_manHR'

function ManHTodayYesterdayCard(props) {
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";
  return (
    <div className={className+'container'} data-theme={props.theme}>
    <p className={className+'title'}> {props.title} <span>Man HR</span> </p>
    <Yesterday_today_manH theme={props.theme} yesterday={props.yesterday} color={props.color} main={props.main}/>
  </div>
  )
}

export default ManHTodayYesterdayCard