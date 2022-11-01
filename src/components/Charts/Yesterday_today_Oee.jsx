import React from "react";
import { Kpi_Data_Prod, Kpi_Data_Prod_day, Working_Mach, Working_Mach_day } from "../../Data/data";
import ReactEChart from "echarts-for-react";
import { startOfYesterday } from "date-fns";
import styled from "styled-components";
import "../Cards/style.css";
import { Font_color, OeeRowColor ,OeeColor} from "../functions";

function Yesterday_today_Oee(props) {
  //#region  data calcul
  ///////////////////////Data Calcul //////////////////////////
  var Mydate;
  Mydate = '09-08-2022'
  /*if (props.yesterday === true) {
    Mydate = new Date(startOfYesterday());
  } else {
    Mydate = new Date();
  }*/

  const working_mach = Working_Mach_day(Mydate);
  const kpi_data_prod = Kpi_Data_Prod_day(Mydate);
  //#region Oee

  //////////////Mw Calcul /////////
  let MW = 0;
  for (let i = 0; i < working_mach.length; i++) {
      MW += working_mach[i]?.nr_machine;
    
  }
  ///////c_t_stan x production calcul ///
  let sum = 0;
  for (let i = 0; i < kpi_data_prod.length; i++) {
      sum += kpi_data_prod[i]?.c_T_Stand * kpi_data_prod[i]?.production;
    }
  
  ////////////////OEE CALCUL////
  const oee = (sum / 60 / (MW * 8)) * 100;
  //#endregion

  /////////////////////////////Shifts Table////////////////////////

  //////n_Mach

  const n_Mach_day = working_mach
  n_Mach_day.sort(
    (objA, objB) => Number(new Date(objA.shift)) - Number(new Date(objB.shift))
  );
  //////W-T

  const w_t_today = kpi_data_prod
  const w_t = Object.values(
    w_t_today.reduce((acc, { shift, wT_H }) => {
      acc[shift] = acc[shift] || {
        shift: shift,
        Sum: 0,
      };
      acc[shift].Sum += wT_H;
      return acc;
    }, {})
  );
  w_t.sort(
    (objA, objB) => Number(new Date(objA.shift)) - Number(new Date(objB.shift))
  );

  //////oee
  //sum de MW per shift

  //c_t X prod per shift

  const ct_x_prod_day = [];
  for (let i = 0; i < kpi_data_prod.length; i++) {
      var obj = {};
      obj["ct_X_production"] =
        kpi_data_prod[i].c_T_Stand * kpi_data_prod[i].production;
      obj["shift"] = kpi_data_prod[i].shift;
      ct_x_prod_day.push(obj);
      ct_x_prod_day.push(obj);
    
  }

  const ct_p = Object.values(
    ct_x_prod_day.reduce((acc, { shift, ct_X_production }) => {
      acc[shift] = acc[shift] || {
        shift: shift,
        Sum: 0,
      };
      acc[shift].Sum += ct_X_production;
      return acc;
    }, {})
  );
  const OEEs = [];
  for (let i = 0; i < ct_p.length; i++) {
    var obj1 = {};
    obj1["shift"] = ct_p[i].shift;
    obj1["oee"] = (ct_p[i].Sum / 60 / (n_Mach_day[i]?.nr_machine * 8)) * 50;
    OEEs.push(obj1);
  }

  /////////Table Merge /////
  const Oee_shifts = [];
  for (let i = 0; i < OEEs.length; i++) {
    var obj2 = {};
    obj2["shift"] = OEEs[i].shift;
    obj2["oee"] = OEEs[i]?.oee;
    obj2["n_mach"] = n_Mach_day[i].nr_machine;
    obj2["w_t"] = w_t[i].Sum;
    Oee_shifts.push(obj2);
  }
  //#endregion

  ////Design ///
  const font_color = Font_color(props.theme);
  const ChartColor = OeeColor(oee);

  if (props.main) {
    var fontSize = 15;
    var Chartwidth = 15;
    var distance = -25;
    var className = "f-";
    var show = false;
  } else {
    fontSize = 20;
    Chartwidth = 30;
    distance = -40;
    className = "";
    show = true;
  }

  if (window.screen.width > 1600) {
    show = true;
  }

  /////Chart render /////////

  const Mydiv = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;
  const Tablediv = styled.div`
    width: 100%;
  `;
  const Chart = styled.div`
    width: 100%;
    height: 45%;
    margin-top: -20px;
    align-items: center;
  `;
  const eChartsOption = {
    series: [
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        splitNumber: 1,
        itemStyle: {
          color: ChartColor[0].mainColor,
          shadowColor: ChartColor[0].shadColor,
          shadowBlur: 5,
          shadowOffsetX: 1,
          shadowOffsetY: 1,
        },
        progress: {
          show: true,
          width: Chartwidth,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            width: Chartwidth,
          },
        },
        axisTick: {
          show: show,
          distance: distance,
          splitNumber: 4,
          lineStyle: {
            width: 2,
            color: font_color,
          },
        },
        splitLine: {
          show: show,
          distance: distance,
          length: 14,
          lineStyle: {
            width: 3,
            color: font_color,
          },
        },
        axisLabel: {
          show: false,
          distance: distance + 5,
          color: font_color,
          fontSize: fontSize - 2,
        },
        anchor: {
          show: false,
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          width: "60%",
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, "0%"],
          fontSize: 60,
          fontWeight: "bolder",
          formatter: function (value) {
            return "{value|" + value.toFixed(0) + "}{unit|%}";
          },
          rich: {
            value: {
              fontSize: fontSize,
              fontWeight: "bolder",
              color: font_color,
            },
            unit: {
              fontSize: fontSize - 3,
              color: font_color,
              padding: [0, 0, 0, 10],
            },
          },
        },
        data: [
          {
            value: oee,
          },
        ],
      },
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        itemStyle: {
          color: ChartColor[0].secoColor,
        },
        progress: {
          show: true,
          width: Chartwidth * 0.26,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: 90,
          },
        ],
      },
    ],
  };

  return (
    <Mydiv>
      <Chart>
        <div className={className + "oee-man-mach-gauge"}>
          <ReactEChart option={eChartsOption} />
        </div>
      </Chart>{" "}
      <Tablediv>
        <table className={className + "oee-table"}>
          <thead>
            <tr className="oee-table-tr">
              <th className={className + "oee-table-th"}></th>
              <th className="oee-table-th">Shift 1</th>
              <th className="oee-table-th">Shift 2</th>
              <th className="oee-table-th">Shift 3</th>
            </tr>
          </thead>
          <tbody>
            <tr className="oee-table-tr">
              <td className={className + "oee-table-td"}>OEE</td>
              <td
                className={className + "oee-table-td"}
                style={{ backgroundColor: OeeRowColor(Oee_shifts[0]?.oee) }}
              >
                {Oee_shifts[0]?.oee.toFixed(2) + "%"}
              </td>
              <td
                className={className + "oee-table-td"}
                style={{ backgroundColor: OeeRowColor(Oee_shifts[1]?.oee) }}
              >
                {Oee_shifts[1]?.oee.toFixed(2) + "%"}
              </td>
              <td
                className={className + "oee-table-td"}
                style={{ backgroundColor: OeeRowColor(Oee_shifts[2]?.oee) }}
              >
                {Oee_shifts[2]?.oee.toFixed(2) + "%"}
              </td>
            </tr>
            <tr className="oee-table-tr">
              <td className={className + "oee-table-td"}>N-MACH</td>
              <td className={className + "oee-table-td"}>
                {Oee_shifts[0]?.n_mach}
              </td>
              <td className={className + "oee-table-td"}>
                {Oee_shifts[1]?.n_mach}
              </td>
              <td className={className + "oee-table-td"}>
                {Oee_shifts[2]?.n_mach}
              </td>
            </tr>
            <tr className="oee-table-tr">
              <td>W-T</td>
              <td>{Oee_shifts[0]?.w_t.toFixed(2)}</td>
              <td>{Oee_shifts[1]?.w_t.toFixed(2)}</td>
              <td>{Oee_shifts[2]?.w_t.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </Tablediv>
    </Mydiv>
  );
}

export default Yesterday_today_Oee;
