import React from "react";
import ReactEChart from "echarts-for-react";
import { Wareh_KPI_IN, Wareh_KPI_IN_day } from "../../Data/data";
import { startOfYesterday } from "date-fns";
import styled from "styled-components";
import { Font_color, formatDate, MachHColor, MachHrRowColor } from "../functions";

function Yesterday_today_machineH(props) {
  //#region data
  ////Data Calcul ////////
/*
  var Mydate;
  
  if (props.yesterday === true) {
    Mydate = formatDate(new Date(startOfYesterday()));
  } else {
    Mydate = formatDate(new Date());
  }

  const wareh_kpi_day = Wareh_KPI_IN_day(Mydate);

  let sumMachHR = 0;
  for (let i = 0; i < wareh_kpi_day.length; i++) {
    sumMachHR += wareh_kpi_day[i].machHR;
  }
//table
  const wareh_kpi_mach_shift = Object.values(
    wareh_kpi_day.reduce((acc, { turno, machHR }) => {
      acc[turno] = acc[turno] || {
        shift: turno,
        Sum: 0,
      };
      acc[turno].Sum += machHR;
      return acc;
    }, {})
  );
  //#endregion*/
let sumMachHR = 135;
  ////Design ///
  const font_color = Font_color(props.theme)
  const ChartColor = MachHColor(sumMachHR);

  if (props.main) {
    var fontSize = 15;
    var Chartwidth = 15;
    var distance =-25
    var className = "f-"
    var show = false

  } else {
    fontSize = 20;
    Chartwidth = 30;
    distance =-40
     className = ""
     show = true
  }
  if (window.screen.width > 1600) {
    show = true;
  }
  
  if (window.screen.width > 3000) {
    Chartwidth = 38;
    fontSize = 25;
  }


  ///////////////CHART RENDER  /////////

  const Mydiv = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `;

  const Chart = styled.div`
    width: 100%;
    height: 70%;
    align-items: center;
    display: flex;
    justify-content: center;
  `;

  const Tablediv = styled.div`
    width: 100%;
    height : 28%;
    display: flex;
    flex-direction : end;
  `;

const eChartsOption = {
  series: [
    {
      type: "gauge",
      center: ["50%", "60%"],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 355,
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
        show : show,
        distance: distance,
        splitNumber: 4,
        lineStyle: {
          width: 2,
          color: font_color,
        },
      },
      splitLine: {
        show : show,
        distance: distance,
        length: 14,
        lineStyle: {
          width: 3,
          color: font_color,
        },
      },
      axisLabel: {
        show: false,
        distance:  distance+5,
        color: font_color,
        fontSize: fontSize-2,
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
          return "{value|" + value.toFixed(0) + "}";
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
          value: sumMachHR,
        },
      ],
    },
    {
      type: "gauge",
      center: ["50%", "60%"],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 355,
      itemStyle: {
        color: ChartColor[0].secoColor,
      },
      progress: {
        show: true,
        width: Chartwidth*0.26,
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
          value: 255,
        },
      ],
    },
  ],
};
  return (
    <Mydiv>
      <Chart>
        <div className="oee-man-mach-gauge">
          <ReactEChart option={eChartsOption}   style={{
          height: "100%",
          width: "100%",
        }}/>
        </div>
      </Chart>
      <Tablediv>
        <table className={className+"mach-man-table"}>
          <thead>
            <tr>
              <th className={className+"mach-man-table-th"}></th>
              <th className={className+"mach-man-table-th"}>Shift 1</th>
              <th className={className+"mach-man-table-th"}>Shift 2</th>
              <th className={className+"mach-man-table-th"}>Shift 3</th>
            </tr>
          </thead>
          <tbody>
            <tr className={className+"mach-man-table-tr"}>
              <td className={className+"mach-man-table-td"}>NB-H</td>
              <td className={className+"mach-man-table-td"} style={{backgroundColor: MachHrRowColor(57)}}>{57}</td>
              <td className={className+"mach-man-table-td"} style={{backgroundColor: MachHrRowColor(70)}}>{70}</td>
              <td className={className+"mach-man-table-td"} style={{backgroundColor: MachHrRowColor(85)}}>{85}</td>
            </tr>
          </tbody>
        </table>
      </Tablediv>
    </Mydiv>
  );
}

export default Yesterday_today_machineH;
