import React from 'react'
import { Turnover_KPI, Turnover_KPI_month } from '../../Data/data';
import {FormatCash} from '../functions'

function ThisMonthToCard(props) {
  /////Data Calcul ///////

  let this_month = new Date().getMonth() 
  let this_month_Values = Turnover_KPI_month(this_month)


  const monthTotalValues = 453.21
////Desing //////
var className = "";
if (props.main) {
  className = "f-";
} else className = "";

  return (
    <div className={className+'sm-card-container'}>
            <p className={className+'sm-title'}>This <span>month TO</span> </p>
            <div className={className+'card-money'}>{FormatCash(monthTotalValues)}€</div>
    </div>
  )
}

export default ThisMonthToCard