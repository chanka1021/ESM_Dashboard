import { endOfWeek, getISOWeek, startOfWeek } from "date-fns";
import { Wareh_KPI_IN_WEEK } from "../../Data/data";
import React from "react";
import Chart from "react-apexcharts";
import { Font_color, FormatCash, MergeBy } from "../functions";

export default function WarehouseInputsChart(props) {
  ////////////////CALCUL DATA///////

  let this_is_week = getISOWeek(new Date());
/*
  const wareh_kpi_ins = Wareh_KPI_IN_WEEK(50);
  ////// get start and end of week
  const currentWeekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
  const currentWeekEnd = endOfWeek(new Date());
  /////////// check if date in current week
  function DateInCurrentWeek(date) {
    if (date >= currentWeekStart && date <= currentWeekEnd) {
      return true;
    } else return false;
  }
  /////////// new array with current week warehouse values ///////
  // eslint-disable-next-line no-array-constructor
  var wareh_in_weekly = new Array();
  for (let i = 0; i < wareh_kpi_ins.length; i++) {
    if (DateInCurrentWeek(new Date(wareh_kpi_ins[i].date_KPI))) {
      wareh_in_weekly[i] = wareh_kpi_ins[i];
    }
  }
  const arr = wareh_in_weekly.filter((element) => {
    if (Object.keys(element).length !== 0) {
      return true;
    }
    return false;
  });

  let wareh_in_daily = arr.reduce(
    function (acc, obj) {
      // for each obj in data
      if (acc.map.hasOwnProperty(obj.date_KPI)) {
        // if the map contains an object for the current object's date_KPI
        acc.map[obj.date_KPI].total_value += +obj.total_value; // then add the current object's total to it
      } else {
        // otherwise
        var newObj = Object.assign({}, obj); // create a new object (a copy of the current object)
        acc.map[obj.date_KPI] = newObj; // add the new object to both the map
        acc.data.push(newObj); // ... and the data array
      }
      return acc;
    },
    { data: [], map: {} }
  ).data;

  ////////////////////////sort Weekly Array by date ////////////////////////////
  const sortedWareh_in = wareh_in_daily.sort(
    (objA, objB) =>
      Number(new Date(objA.date_KPI)) - Number(new Date(objB.date_KPI))
  );
  // split values
  const sortedWareh_in_values = [];
  for (let i = 0; i < sortedWareh_in.length; i++) {
    sortedWareh_in_values[i] = sortedWareh_in[i].total_value;
  }

  /////colors setup
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
      color: "#ffda33",
    },
    {
      rank: 4,
      color: "#ff2600",
    },
    {
      rank: 5,
      color: "#f10000",
    },
  ];
  var sorted = sortedWareh_in_values.slice().sort(function (a, b) {
    return b - a;
  });
  var ranks = sortedWareh_in_values.map(function (v) {
    return sorted.indexOf(v) + 1;
  });

  const values_rank = [];
  for (let i = 0; i < sortedWareh_in_values.length; i++) {
    var obj = {};
    obj["value"] = sortedWareh_in_values[i];
    obj["rank"] = ranks[i];
    values_rank.push(obj);
  }

  const sortedcolors = [];
  for (let i = 0; i < MergeBy("rank", values_rank, colors).length; i++) {
    sortedcolors[i] = MergeBy("rank", values_rank, colors)[i].color;
  }
*/
  /////////////Design /////////

  const font_color = Font_color(props.theme);

  var fontSize = null;
  if (props.main) {
    fontSize = "14px";
  } else {
    fontSize = "16px";
  }

  var fontSize2 = "14px";
  var chartHeight = "100%";
  if (window.screen.width < 1000) {
    chartHeight = "100%";
  } else if (window.screen.width > 1650) {
    chartHeight = "150%";
  }
  if (window.screen.width > 3000) {
    chartHeight = "300%";
    fontSize = "40px";
  var fontSize2 = "34px";

  }

  ///////////////////Chart Render /////////////////

  const options = {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        labels: {
          style: {
            colors: font_color,
            fontSize: fontSize2,
            fontFamily: "DM sans, sans-serif",
            fontWeight: 500,
          },
        },
      },
      fill: {
        opacity: 0.95,
      },
      grid: {
        show: false,
      },
      legend: {
        show: false,
      },
      yaxis: {
        show: false,
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          distributed: true,
          dataLabels: {
            position: "bottom",
          },
        },
      },
      //colors: sortedcolors,
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#000000"],
          fontFamily: "DM sans, sans-serif",
          fontWeight: 700,
          fontSize: fontSize,
        },
        formatter: function (value) {
          return FormatCash(value.toFixed(2)) + "€";
        },
      },
    },
    series = [
      {
        name: "Weekly value",
        data: [27354,44444,55555,66666],
      },
    ];

  ////////
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
