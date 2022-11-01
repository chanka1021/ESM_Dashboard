import React from 'react'
import Yesterday_today_Oee from '../Charts/Yesterday_today_Oee'
function OeeTodayYesterdayCard(props) {
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";

  return (
    <div className={className+'container'} data-theme={props.theme}>
      <p className={className+'title'}> {props.title} <span>OEE</span> </p>
      <Yesterday_today_Oee theme={props.theme} yesterday={props.yesterday} color={props.color} main={props.main}/>
    </div>
  )
}

export default OeeTodayYesterdayCard