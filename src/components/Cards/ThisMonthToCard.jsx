import React from 'react'
import { Turnover_KPI, Turnover_KPI_month } from '../../Data/data';
import {FormatCash} from '../functions'

function ThisMonthToCard(props) {
  /////Data Calcul ///////
/*
  let this_month = new Date().getMonth() +1
  let this_month_Values = Turnover_KPI_month(this_month)


  const monthTotalValues = this_month_Values.reduce((accumulator, object) => {
    return accumulator + object.total_Value;
  }, 0);
*/
////Desing //////
var className = "";
if (props.main) {
  className = "f-";
} else className = "";

  return (
    <div className={className+'sm-card-container'}>
            <p className={className+'sm-title'}>This <span>month TO</span> </p>
            <div className={className+'card-money'}>{FormatCash(240.540)}€</div>
    </div>
  )
}

export default ThisMonthToCard