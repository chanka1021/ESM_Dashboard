import React,{useState} from 'react'
import TopClientTableChart from '../Charts/TopClientTableChart'
import './style.css'


function TopCards(props) {
  const [selectedIds, setSelectedIds] = useState([]);
  props.setSelectedIds(selectedIds)

  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";
  return (
    <div className={className+'container'}>
            <p className={className+'title'}>top <span>fcst clients</span></p>
          <TopClientTableChart setSelectedIds={setSelectedIds} main={props.main}/>
    </div>
  )
}

export default TopCards