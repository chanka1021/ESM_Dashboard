import React from "react";
import styled from "styled-components";
import { Kpi_wip } from "../../Data/data";

function WipChart(props) {
//#region Data Calcul
const kpi_wip = Kpi_wip();
const kpi_wip_7days = kpi_wip.filter((x) =>new Date(x.date).getTime() >= new Date('09-02-2022').getTime())
kpi_wip_7days.sort(
    (objA, objB) => Number(new Date(objA.date)) - Number(new Date(objB.date))
  );
   
  //#endregion
  
  //Desgin
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";

  const Mydiv = styled.div`
    width: 99%;
  `


  return (
      <Mydiv>
        <table className={className+"wip-table"}>
          <thead>
            <tr className={className+"wip-tr"}>
              <th className={className+"wip-th"}>
                DATE
              </th>
              <th className={className+"wip-th"}>
                MH
              </th>
              <th className={className+"wip-th"}>
                VALUE
              </th>
            </tr>
          </thead>
          <tbody>
          {
            kpi_wip_7days.map((value, key) => {
              return (
                <tr key={key}>
                  <td className={className+"wip-td"}>{ new Date(value.date).toLocaleDateString('fr-FR')}</td>
                  <td className={className+"wip-td"}>{value.wip_MH.toFixed(0)}</td>
                  <td className={className+"wip-td"}>{value.wip_valeo.toFixed(0)+'$'}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </Mydiv>
  );
}

export default WipChart;
