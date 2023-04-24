import { endOfWeek, startOfWeek } from "date-fns/esm";
import React from "react";
import styled from "styled-components";
import { Kpi_wip, Scrapp } from "../../Data/data";

function WhScrap(props) {
  //#region Data Calcul
  const kpi_wip = Kpi_wip();
  const kpi_wip_7days = kpi_wip.filter(
    (x) => new Date(x.date).getTime() >= new Date("09-02-2022").getTime()
  );
  kpi_wip_7days.sort(
    (objA, objB) => Number(new Date(objA.date)) - Number(new Date(objB.date))
  );

  var startofweek = startOfWeek(new Date(), { weekStartsOn: 1 });
  var endofweek = endOfWeek(new Date());

  const scrapp = Scrapp();
  var WhScrap = [];
  for (let i = 0; i < scrapp.length; i++) {
    if (
      new Date(scrapp[i].date) >= startofweek &&
      new Date(scrapp[i].date) < endofweek
    ) {
      var obj = {};
      obj["date"] = scrapp[i].date;
      obj["A"] = scrapp[i].scrap1;
      obj["B"] = scrapp[i].scrap2;
      obj["C"] = scrapp[i].scrap3;
      obj["ASM"] = scrapp[i].assemblage;
      obj["T_Scr"] = scrapp[i].total_scrap;
      obj["Prg"] = scrapp[i].purge;
      obj["Total"] = scrapp[i].total;
      WhScrap.push(obj);
    }
  }
  console.log(WhScrap, "s");
  //#endregion

  //Desgin
  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";

  const Mydiv = styled.div`
    width: 99%;
  `;

  return (
    <Mydiv>
      <table className={className + "wip-table"}>
        <thead>
          <tr className={className + "wip-tr"}>
            <th className={className + "wip-th"}>DATE</th>
            <th className={className + "wip-th"}>A</th>
            <th className={className + "wip-th"}>B</th>
            <th className={className + "wip-th"}>C</th>
            <th className={className + "wip-th"}>ASM</th>
            <th className={className + "wip-th"}>T_Scr</th>
            <th className={className + "wip-th"}>Prg</th>
            <th className={className + "wip-th"}>Total</th>
          </tr>
        </thead>
        <tbody>
          {WhScrap.map((value, key) => {
            return (
              <tr key={key}>
                <td className={className + "wip-td"}>
                  {new Date(value.date).toLocaleDateString("fr-FR")}
                </td>
                <td className={className + "wip-td"}>
                  {value.A}
                </td>
                <td className={className + "wip-td"}>
                  {value.B}
                </td>
                <td className={className + "wip-td"}>
                  {value.C }
                </td>
                <td className={className + "wip-td"}>
                  {value.ASM }
                </td>
                <td className={className + "wip-td"}>
                  {value.T_Scr }
                </td>
                <td className={className + "wip-td"}>
                  {value.Prg }
                </td>
                <td className={className + "wip-td"}>
                  {value.Total }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Mydiv>
  );
}

export default WhScrap;
