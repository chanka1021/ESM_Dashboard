import React from "react";
import ReactEChart from "echarts-for-react";
import { KPI_Stock_Utilisation } from "../../Data/data";
import { Font_color, WarehUtilisColor } from "../functions";
import { useEffect } from "react";

export default function WarehouseUtilisChart(props) {
  //////////////////Data Calcul///////////////////
  let Stock_utilisation =99;
  ///////////////Design /////////////
  const font_color = Font_color(props.theme);

  const ChartColor = WarehUtilisColor(Stock_utilisation)


  if (props.main) {
    var fontSize = 15;
    var Chartwidth = 15;
    var distance = -25;
  } else {
    fontSize = 20;
    Chartwidth = 30;
    distance = -40;
  }

  var className = "";
  if (props.main) {
    className = "f-";
  } else className = "";
  ////////Chart render///////////
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
          distance: distance,
          splitNumber: 4,
          lineStyle: {
            width: 2,
            color: font_color,
          },
        },
        splitLine: {
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
          fontSize: fontSize - 1,
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
          offsetCenter: [0, "-0%"],
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
            value: Stock_utilisation,
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
          color: ChartColor[0].mainColor,
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
            value: Stock_utilisation,
          },
        ],
      },
    ],
  };
  return (
    <div className={className + "otif-wh-gauge"}>
      <ReactEChart width={"300"} option={eChartsOption} />
    </div>
  );
}
