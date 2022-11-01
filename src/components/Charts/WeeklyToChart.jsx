import React from "react";
import { useEffect } from "react";
import Chart from "react-apexcharts";
import { Turnover_KPI, Turnover_KPI_month, Wareh_KPI_IN, Wareh_KPI_IN_month } from "../../Data/data";
import { Font_color, FormatCash, MergeBy } from "../functions";

export default function WeeklyToChart(props) {
  //#region
  ////////////////Data Calcul//////////////
  const turnover_kpis = Turnover_KPI_month(8);
  
let  this_month = new Date().getMonth()-1
  // (month +1 = current month)

  var to_thisMonth = [];
  for (let i = 0; i < turnover_kpis.length; i++) {
      if (props.selectedids.length === 0) {
        to_thisMonth[i] = turnover_kpis[i];
      } else if (props.selectedids.includes(turnover_kpis[i]?.clinet_ID)) {
        to_thisMonth[i] = turnover_kpis[i];
      }
  }
  var wi_thisMonth = Wareh_KPI_IN_month(8);
  //////// weekly values --------
  const to_weekly = Object.values(
    to_thisMonth.reduce((acc, { week_nb, total_Value }) => {
      acc[week_nb] = acc[week_nb] || {
        week_number: week_nb,
        SumOfTotale_value: 0,
      };
      acc[week_nb].SumOfTotale_value += total_Value;
      return acc;
    }, {})
  );

  const wi_weekly = Object.values(
    wi_thisMonth.reduce((acc, { week_nb, total_value }) => {
      acc[week_nb] = acc[week_nb] || {
        week_number: week_nb,
        SumOfTotale_value: 0,
      };
      acc[week_nb].SumOfTotale_value += total_value;
      return acc;
    }, {})
  );
  const Weekly_to_weekNb = [];
  const Weekly_to_values = [];
  const Weekly_wi_values = [];

  for (let i = 0; i < to_weekly.length; i++) {
    Weekly_to_weekNb.push(to_weekly[i]?.week_number);
    Weekly_to_values.push(to_weekly[i]?.SumOfTotale_value);
    Weekly_wi_values.push(wi_weekly[i]?.SumOfTotale_value);
  }

  //#endregion


  /////colors setup

  //////Design ///////
  const font_color = Font_color(props.theme)
  var fontSize = null;
  if(props.main){
    fontSize = "12px"
  }else{ fontSize = "14px"}

  var chartHeight;
  var offsetY;
  if (window.screen.width < 1000) {
    chartHeight = "120%";
  } else if (window.screen.width > 1600) {
    chartHeight = "300";
    fontSize ='20px'
    offsetY=20;

  } else if (window.screen.width > 1000) {
    chartHeight = "100%";
    offsetY=5;
  }

  ////////Chart Render/////////////
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
        columnWidth: "90%",
        barHeight  :'100%',
        endingShape: "sq",
        dataLabels: {
          orientation: "vertical",
          position: "bottom",

        },
      },
    },

    grid :{
      show : false,
    },
    legend: {
      fontSize: "13px",
      fontFamily: "DM sans, sans-serif",
      fontWeight: "400",
      labels: {
        colors: font_color,
        useSeriesColors: false,
      },
    },
    dataLabels: {
      offsetY: offsetY,
      horizontal : true,
      enabled: true,
      formatter: function (value) {
        return FormatCash(value);
      },
      style: {
        colors: ["#000000"],
        fontFamily: "DM sans, sans-serif",
        fontWeight: 700,
        fontSize: fontSize,
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: Weekly_to_weekNb,
      labels: {
        style: {
          colors: font_color,
          fontSize: "12px",
          fontFamily: "DM sans, sans-serif",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      show : false ,
      labels: {
        formatter: function (value) {
          return FormatCash(value);
        },
        style: {
          colors: font_color,
          fontSize: "12px",
          fontFamily: "DM sans, sans-serif",
          fontWeight: 500,
        },
      },
    },
    fill: {
      opacity: 1,
    },

  };
  const series = [
    {
      name: "Weekly TurnOver",
      data: Weekly_to_values,
      color : "#e64141"
    },
    {
      name: "Weekly Warehouse Inputs",
      data: Weekly_wi_values,
      color : "#0eff5e"
    },
  ];

  return (
    <div className="chart-container">
      <div className="mixed-chart">
        <Chart
          options={options}
          series={series}
          type="bar"
          width={"100%"}
          height={chartHeight}
        />
      </div>
    </div>
  );
}
