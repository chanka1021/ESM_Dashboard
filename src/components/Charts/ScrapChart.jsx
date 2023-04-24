import React from 'react'
import { Scrap } from '../../Data/data'
import styled from "styled-components";
import { ScrapRowColor } from "../functions";

function ScrapChart(props) {



//const scrap = Scrap();
/*
let sum_sh1 = 0;
let sum_sh2 = 0;
let sum_sh3 = 0;
let tatal = 0;
let A_sum = 0;
let B_sum = 0;
let C_sum = 0;
let ASS_sum = 0;
let T_scr_sum = 0;
let PRG_sum = 0;
let T_sum = 0;
const scrape_total = []
for(let i=0;i<scrap.length;i++){
sum_sh1 += scrap[i].sum_scrap1
sum_sh2 += scrap[i].sum_scrap2
sum_sh3 += scrap[i].sum_scrap3
tatal += scrap[i].total_prd
A_sum += scrap[i].a
B_sum += scrap[i].b
C_sum += scrap[i].c
ASS_sum += scrap[i].assemblage
T_scr_sum += scrap[i].t_scr
PRG_sum += scrap[i].purge
T_sum += scrap[i].total
}
*/

let scrap = [10,20,30]
var className = "";
if (props.main) {
  className = "f-";
} else className = "";

const Mydiv = styled.div`
width: 99%;
margin-bottom : 5.5%;
`
  return (
    <Mydiv>
      <table className={className+"scrap-table"}>
        <thead>
        <tr className={className+"scrap-total-tr1"}>
            <td colSpan={"5"} className={className+"scrap-total-td"}>Production</td>
            <td colSpan={"7"}  className={className+"scrap-total-td"}>Warehouse</td>          
          </tr>
          <tr>
            <th className={className+"scrap-th"}>DATE</th>
            <th className={className+"scrap-th"}>Shift 1</th>
            <th className={className+"scrap-th"}>Shift 2</th>
            <th className={className+"scrap-th"}>Shift 3</th>
            <th className={className+"scrap-th"}>Total</th>
            <th className={className+"scrap-th"}>A</th>
            <th className={className+"scrap-th"}>B</th>
            <th className={className+"scrap-th"}>C</th>
            <th className={className+"scrap-th"}>ASS</th>
            <th className={className+"scrap-th"}>T_scr</th>
            <th className={className+"scrap-th"}>PRG</th>
            <th className={className+"scrap-th"}>Total</th>
          </tr>
        </thead>
        <tbody>
          {scrap.map((value, key) => {
            return (
              <tr key={key}>
                <td className={className+"scrap-td"}>
                  {new Date(value.date).toLocaleDateString("fr-FR")}
                </td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.sum_scrap1+0)}}>{(value.sum_scrap1+0).toFixed(0)}</td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.sum_scrap2+0)}}>{(value.sum_scrap2+0).toFixed(0)}</td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.sum_scrap3+0)}}>{(value.sum_scrap3+0).toFixed(0)}</td>
                <td className={className+"scrap-td"} >{(value.total_prd+0).toFixed(1)}</td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.a+0)}}>{(value.a+0)}</td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.b+0)}}>{(value.b+0)}</td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.c+0)}}>{(value.c+0)}</td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.assemblage+0)}}>{(value.assemblage+0)}</td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.t_scr+0)}}>{(value.t_scr+0)}</td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.purge+0)}}>{(value.purge+0)}</td>
                <td className={className+"scrap-td"} style={{backgroundColor: ScrapRowColor(value.total+0)}}>{(value.total+0)}</td>
              </tr>
            );
          })}
          <tr className={className+"scrap-total-tr"}>
            <td className={className+"scrap-total-td"}>TOTAL</td>
            <td className={className+"scrap-total-td"}>{280}</td>
            <td className={className+"scrap-total-td"}>{280}</td>
            <td className={className+"scrap-total-td"}>{280}</td>
            <td className={className+"scrap-total-td"}>{280}</td>
            <td className={className+"scrap-total-td"}>{280}</td>
            <td className={className+"scrap-total-td"}>{280}</td>
            <td className={className+"scrap-total-td"}>{280}</td>
            <td className={className+"scrap-total-td"}>{280}</td>
            <td className={className+"scrap-total-td"}>{280}</td>
            <td className={className+"scrap-total-td"}>{280}</td>
            <td className={className+"scrap-total-td"}>{280}</td>
          </tr>
        </tbody>
      </table>
    </Mydiv>
  )
}

export default ScrapChart