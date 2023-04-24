import React from "react";
import ReactEChart from "echarts-for-react";
import { Forcast_hist_today, Turnover_KPI_today } from "../../Data/data";
import "../Cards/style.css";
import { Font_color, OtifColor } from "../functions";
export default function OtifChart(props) {
  //#region  Data import and calcul otif
  //// Data //////
  /////// Salido pedido & Qtt SUM  & OTIF CALCUL///////
/*
  var todayDate = new Date().toISOString().slice(0, 10);
  const salido_PedidoToday = Forcast_hist_today(todayDate);
  const QttToday = Turnover_KPI_today(todayDate);

  let sumSalidoPedido = 0;
  for (let i = 0; i < salido_PedidoToday.length; i++) {
    sumSalidoPedido += salido_PedidoToday[i]?.salido_Pedido;
  }
  let sumTurnoverQTT = 0;
  for (let i = 0; i < QttToday.length; i++) {
    sumTurnoverQTT += QttToday[i]?.qtt;
  }
  let OTIF = (sumTurnoverQTT / sumSalidoPedido) * 100;
  //#endregion
*/
let OTIF = 78;
  ////////design//////////
  const ChartColor = OtifColor(OTIF);
  const font_color = Font_color(props.theme);
  if (props.main) {
    var fontSize = 15;
    var Chartwidth = 15;
    var distance = -25;
    var className = "f-";
  } else {
    fontSize = 20;
    Chartwidth = 30;
    distance = -40;
    className = "";
  }
  if (window.screen.width > 3000) {
    Chartwidth = 55;
    fontSize = 33;

  }
  ////////////////////Chart Render ////////////
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
            value: 78,
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
            value: 85,
          },
        ],
      },
    ],
  };
  return (
    <div className="otif-wh-gauge">
      <ReactEChart
        option={eChartsOption}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
    </div>
  );
}
