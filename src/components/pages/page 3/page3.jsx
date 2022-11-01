import React from "react";
import { useState } from "react";
import useLocalStorage from "use-local-storage";
import ElastomerCard from "../../Cards/ElastomerCard";
import MachHTodayYesterdayCard from "../../Cards/MachHTodayYesterdayCard";
import ManHTodayYesterdayCard from "../../Cards/ManHTodayYesterdayCard";
import MonthlyToWiCard from "../../Cards/MonthlyToWiCard";
import OeeTodayYesterdayCard from "../../Cards/OeeTodayYesterdayCard";
import OtifCard from "../../Cards/OtifCard";
import ScrapCard from "../../Cards/ScrapCard";
import ThisMonthToCard from "../../Cards/ThisMonthToCard";
import TopCards from "../../Cards/TopCards";
import WarehouseInputsCard from "../../Cards/WarehouseInputsCard";
import WarehouseValueCard from "../../Cards/WarehouseValueCard";
import WarehousUtilisCard from "../../Cards/WarehousUtilisCard";
import WeeklyFcstCard from "../../Cards/WeeklyFcstCard";
import WeeklyToCard from "../../Cards/WeeklyToCard";
import WipCard from "../../Cards/WipCard";
import Page1 from "../page 1/page1";
import Page2 from "../page 2/page2";

import "./style3.css";

function Page3(props) {
  const [selectedIds, setSelectedIds] = useState([]);

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="p3-main-container" data-theme={theme}>
      <div onClick={switchTheme} className="f-div0">
        <ElastomerCard main />
      </div>
      <div className="Content">
        <div className="kpi">
          <div className="div1">
            <div className="otif-whUtilis">
              <div className="otif">
                <OtifCard theme={theme} main />
              </div>
              <div className="month-to-whValue">
                <ThisMonthToCard theme={theme} main />
                <WarehouseValueCard theme={theme} main />
              </div>
              <div className="wh-utilis">
                <WarehousUtilisCard theme={theme} main />
              </div>
            </div>
            <div className="wh-inputs">
              <WarehouseInputsCard theme={theme} main />
            </div>
          </div>
          <div className="div2">
            <div className="weekly-to">
              <WeeklyToCard selectedids={selectedIds} theme={theme} main />
            </div>
            <div className="weekly-fcst">
              <WeeklyFcstCard selectedids={selectedIds} theme={theme} main />
            </div>
          </div>
          <div className="div3">
            <div className="monthly-to-wi">
              <MonthlyToWiCard theme={theme} main />
            </div>
            <div className="fcst-top-client">
              <TopCards theme={theme} setSelectedIds={setSelectedIds} main />
            </div>
          </div>
        </div>
        <div className="production">
          <div  className="f-oee">
            <div className="f-oee-yesterday">
              <OeeTodayYesterdayCard
                yesterday={true}
                theme={theme}
                color="#ffa600"
                title="Yesterday's"
                main
              />
            </div>
            <div className="f-oee-today">
              <OeeTodayYesterdayCard
                yesterday={false}
                theme={theme}
                color="#88ff00"
                title="Today's"
                main
              />
            </div>
          </div>
          <div className="f-machH">
            <div className="f-machH-yesterday">
              <MachHTodayYesterdayCard
                yesterday={true}
                theme={theme}
                color="#ffa600"
                title="Yesterday's"
                main
              />
            </div>
            <div className="f-machH-today">
              <MachHTodayYesterdayCard
                yesterday={false}
                theme={theme}
                color="#88ff00"
                title="Today's"
                main
              />
            </div>
          </div>
          <div className="f-manH">
          <div className="f-manH-yesterday">
            <ManHTodayYesterdayCard
              yesterday={true}
              theme={theme}
              color="#ffa600"
              title="Yesterday's"
              main
            />
          </div>
          <div className="f-manH-today">
            <ManHTodayYesterdayCard
              yesterday={true}
              theme={theme}
              color="#88ff00"
              title="Today's"
              main
            />
          </div>
          </div>
          <div className="f-scrap-wip">
          <div className="f-scrap">
            <ScrapCard main />
          </div>
          <div className="f-wip">
            <WipCard main/> 
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
