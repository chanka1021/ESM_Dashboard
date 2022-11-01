import { getISOWeek } from "date-fns";
import React from "react";
import styled from "styled-components";
import { Kpi_Data_Prod, Kpi_Data_Prod_week } from "../../Data/data";
import { ScrapRowColor } from "../functions";

function ScrapChart(props) {
  ////////////////////Data Calcul////////////////////
//#region  data calcul
//const CurrentWeek =getISOWeek(new Date()
const CurrentWeek =getISOWeek(new Date("09-09-2022"))

  const kpi_data_prod_week = Kpi_Data_Prod_week(CurrentWeek);

  const arr = [];
  let sum = 0;
  for (let i = 0; i < kpi_data_prod_week.length; i++) {
    var obj = {};
    sum =
      (kpi_data_prod_week[i].weight * kpi_data_prod_week[i].defaut +
        kpi_data_prod_week[i].weight * kpi_data_prod_week[i].def_MM) *
      1.2;
    obj["sum"] = sum;
    obj["shift"] = kpi_data_prod_week[i].shift;
    obj["date"] = kpi_data_prod_week[i].date_to;
    arr.push(obj);
  }
/// grouping by shift and date
  const computeArray = (arr) => {
    const result = {};
    arr.forEach((item) => {
      const field = `shift${item.shift}`;
      if (!result[item.date]) {
        result[item.date] = {};
      }
      result[item.date][field] = (result[item.date][field] || 0) + item.sum;
      result[item.date].total = (result[item.date].total || 0) + item.sum;
    });

    return Object.keys(result).map((key) => ({
      date: key,
      ...result[key],
    }));
  };
  const ScrapArray = computeArray(arr);

  const scrape_total = Object.values(
    arr.reduce((acc, { shift, sum }) => {
      acc[shift] = acc[shift] || {
        shift: shift,
        Sum: 0,
      };
      acc[shift].Sum += sum;
      return acc;
    }, {})
  );
const shifts_sums_total = ScrapArray.reduce((n, {total}) => n + total, 0)
//#endregion
///////Design///

var className = "";
if (props.main) {
  className = "f-";
} else className = "";
const Mydiv = styled.div`
width: 99%;
`
return (
    <Mydiv>
      <table className={className+"scrap-table"}>
        <thead>
          <tr>
            <th className={className+"scrap-th"}>DATE</th>
            <th className={className+"scrap-th"}>Shift 1</th>
            <th className={className+"scrap-th"}>Shift 2</th>
            <th className={className+"scrap-th"}>Shift 3</th>
            <th className={className+"scrap-th"}>Total</th>
          </tr>
        </thead>
        <tbody>
          {ScrapArray.map((value, key) => {
            return (
              <tr key={key}>
                <td className={className+"scrap-td"}>
                  {new Date(value.date).toLocaleDateString("fr-FR")}
                </td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.shift1+0)}}>{(value.shift1+0).toFixed(1)}</td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.shift2+0)}}>{(value.shift2+0).toFixed(1)}</td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.shift3+0)}}>{(value.shift3+0).toFixed(1)}</td>
                <td className={className+"scrap-td"} >{value.total.toFixed(1)}</td>
              </tr>
            );
          })}
          <tr className={className+"scrap-total-tr"}>
            <td className={className+"scrap-total-td"}>TOTAL</td>
            <td className={className+"scrap-total-td"}>{scrape_total[0]?.Sum.toFixed(1)}</td>
            <td className={className+"scrap-total-td"} >{scrape_total[1]?.Sum.toFixed(1)}</td>
            <td className={className+"scrap-total-td"}>{scrape_total[2]?.Sum.toFixed(1)}</td>
            <td className={className+"scrap-total-td"}>{shifts_sums_total.toFixed(1)}</td>
          </tr>
        </tbody>
      </table>
    </Mydiv>
  );
}

export default ScrapChart;
