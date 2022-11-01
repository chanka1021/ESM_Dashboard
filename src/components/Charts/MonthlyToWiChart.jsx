import React from "react";
import Chart from "react-apexcharts";
import { Budget_TO, Monthly_To_Wi, Turnover_KPI, Wareh_KPI_IN } from "../../Data/data";
import { Font_color, FormatCash,ToMonthName } from "../functions";

export default function MonthlyToWiChart(props) {
  //#region  Data
 

  /////////////////////////////////////////data Calcul /////////////////////////
const arr= Monthly_To_Wi();
  ///split for the chart
  const months = [];
  const budgets = [];
  const TO = [];
  const WI = [];
  for (let i = 0; i < arr.length; i++) {
    months.push(arr[i].month);
    budgets.push(arr[i].budget);
    TO.push(arr[i].to_);
    WI.push(arr[i].wi_);
  }
  //#endregion
  ////Desgin
  var fontSize = null;

const font_color = Font_color(props.theme)


  if (props.main) {
    fontSize = "11px";
  } else {
    fontSize = "14px";
  }

  var chartHeight;
  if (window.screen.width < 1000) {
    chartHeight = "120%";
  } else if (window.screen.width > 1650) {
    chartHeight = "300";
    fontSize ='20px'
  } else if (window.screen.width > 1000) {
    chartHeight = "100%";
  }

  //////Render Chart /////////
  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "90%",
        height: "100%",
        endingShape: "sq",
        dataLabels: {
          orientation: "vertical",
          position: "bottom",
        },
      },
    },
    grid: {
      show: false,
    },
    legend: {
      fontSize: "14px",
      fontFamily: "DM sans, sans-serif",
      fontWeight: "700",
      labels: {
        colors: font_color,
        useSeriesColors: false,
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: 5,
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
      categories: months,
      labels: {
        formatter: function (value) {
          return ToMonthName(value);
        },
        style: {
          colors: font_color,
          fontSize: "12px",
          fontFamily: "DM sans, sans-serif",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      show: false,
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
      name: "Budget",
      data: budgets,
    },
    {
      name: "TO",
      data: TO,
    },
    {
      name: "WI",
      data: WI,
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
