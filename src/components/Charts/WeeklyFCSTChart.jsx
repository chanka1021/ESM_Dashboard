/* eslint-disable no-array-constructor */

import React from "react";
import Chart from "react-apexcharts";
import { KPI_FORCAST } from "../../Data/data";
import {
  DateInext2Months,
  Font_color,
  FormatCash,
  MergeBy,
} from "../functions";

export default function WeeklyFCSTChart(props) {
  //#region
  //////////////Calcul Data //////////
  /*
  const kpi_forcasts = KPI_FORCAST();
  /////////////// check date in 2 months function/////////////

  //////////////////// sort week number  && 2 months values ////////////////////
  const arr = [];
  for (let i = 0; i < kpi_forcasts.length; i++) {
    if (DateInext2Months(new Date(kpi_forcasts[i].livraison))) {
      var obj = {};
      if (props.selectedids.length === 0) {
        obj["yearWeek"] =
          "" +
          ("0" + kpi_forcasts[i].year).slice(-2) +
          "" +
          ("0" + kpi_forcasts[i].week_NR).slice(-2);
        obj["week_NR"] = kpi_forcasts[i].week_NR;
        obj["fcS_Value"] = kpi_forcasts[i].fcS_Value;
        arr.push(obj);
      } else if (props.selectedids.includes(kpi_forcasts[i].code_client)) {
        obj["yearWeek"] =
          "" +
          ("0" + kpi_forcasts[i].year).slice(-2) +
          "" +
          ("0" + kpi_forcasts[i].week_NR).slice(-2);
        obj["week_NR"] = kpi_forcasts[i].week_NR;
        obj["fcS_Value"] = kpi_forcasts[i].fcS_Value;
        arr.push(obj);
      }
    }
  }

  ////////////// next 2 months values ////////////
  const next2months = Object.values(
    arr.reduce((acc, { yearWeek, week_NR, fcS_Value }) => {
      acc[yearWeek] = acc[yearWeek] || {
        week_number: week_NR,
        SumOfTotale_value: 0,
      };
      acc[yearWeek].SumOfTotale_value += fcS_Value;
      return acc;
    }, {})
  );

  const next2_weekNb = [];
  const next2_values = [];
  for (let i = 0; i < next2months.length; i++) {
    next2_weekNb.push(next2months[i].week_number);
    next2_values.push(next2months[i].SumOfTotale_value);
  }

  //#endregion
  ////colors setup
 

 
*/
let next2_values=[44,55,66,77,88,99,20,110,6]

const colors = [
  {
    rank: 1,
    color: "#00ff62",
  },
  {
    rank: 2,
    color: "#c8ff00",
  },
  {
    rank: 3,
    color: "#33ffaa",
  },
  {
    rank: 4,
    color: "#e5ff00",
  },
  {
    rank: 5,
    color: "#f1e100",
  },
  {
    rank: 6,
    color: "#f1b900",
  },
  {
    rank: 7,
    color: "#f17400",
  },
  {
    rank: 8,
    color: "#f16000",
  },
  {
    rank: 9,
    color: "#f5310e",
  },
  {
    rank: 10,
    color: "#ff0000",
  },
];
var sorted = next2_values.slice().sort(function (a, b) {
  return b - a;
});
var ranks = next2_values.map(function (v) {
  return sorted.indexOf(v) + 1;
});
  const values_rank = [];
  for (let i = 0; i < next2_values.length; i++) {
    var obj = {};
    obj["value"] = next2_values[i];
    obj["rank"] = ranks[i];
    values_rank.push(obj);
  }

  const sortedcolors = [];
  for (let i = 0; i < MergeBy("rank", values_rank, colors).length; i++) {
    sortedcolors[i] = MergeBy("rank", values_rank, colors)[i].color;
  }

  ////Design ///
  const font_color = Font_color(props.theme);

  var fontSize = null;
  if (props.main) {
    fontSize = "13px";
  } else {
    fontSize = "16px";
  }

  var chartHeight = "100%";
  var offsetY = 10;
  var fontSize2 = "13px";

  if (window.screen.width < 1000) {
    fontSize = "8px";
  } else if (window.screen.width > 1650) {
    chartHeight = "180%";
    fontSize = "20px";
    offsetY = 20;
  }
  if (window.screen.width > 3000) {
    chartHeight = "400%";
    fontSize = "40px";
    fontSize2 = "23px";
    offsetY = 30;

  }

  /////// chart render////////
  const options = {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        categories: [36,37,38,39,40,41,42,43,44],
        labels: {
          style: {
            colors: font_color,
            fontSize: fontSize2,
            fontFamily: "DM sans, sans-serif",
            fontWeight: 500,
          },
        },
      },
      grid: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          distributed: true,
          barHeight: "100%",
          horizontal: false,
          dataLabels: {
            orientation: "vertical",
            position: "bottom",
          },
        },
      },
      colors: sortedcolors,
      dataLabels: {
        enabled: true,
        offsetY: offsetY,
        style: {
          colors: ["#000000"],
          fontFamily: "DM sans, sans-serif",
          fontWeight: 900,
          fontSize: fontSize,
        },
        formatter: function (value) {
          return FormatCash(value) + "€";
        },
      },
    },
    series = [
      {
        name: "Weekly value",
        data: next2_values,
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
