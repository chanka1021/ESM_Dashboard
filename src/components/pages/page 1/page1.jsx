import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import MonthlyToWiCard from "../../Cards/MonthlyToWiCard";
import OtifCard from "../../Cards/OtifCard";
import ThisMonthToCard from "../../Cards/ThisMonthToCard";
import TopCards from "../../Cards/TopCards";
import WarehouseInputsCard from "../../Cards/WarehouseInputsCard";
import WarehouseValueCard from "../../Cards/WarehouseValueCard";
import WarehousUtilisCard from "../../Cards/WarehousUtilisCard";
import WeeklyFcstCard from "../../Cards/WeeklyFcstCard";
import WeeklyToCard from "../../Cards/WeeklyToCard";
import "./style.css";
import ElastomerCard from "../../Cards/ElastomerCard";

function Page1(props) {
  const [selectedIds, setSelectedIds] = useState([]);

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="main-container" data-theme={theme}>
      <div onClick={switchTheme} className="div0">
        <ElastomerCard />
      </div>
      <div className="div1">
        <div className="otif-whUtilis">
          <div className="otif">
            <OtifCard theme={theme} />
          </div>
          <div className="month-to-whValue">
            <ThisMonthToCard />
            <WarehouseValueCard />
          </div>
          <div className="wh-utilis">
            <WarehousUtilisCard theme={theme} />
          </div>
        </div>
        <div className="wh-inputs">
          <WarehouseInputsCard theme={theme} />
        </div>
      </div>
      <div className="div2">
        <div className="weekly-to">
          <WeeklyToCard selectedids={selectedIds} theme={theme} />
        </div>
        <div className="weekly-fcst">
          <WeeklyFcstCard selectedids={selectedIds} theme={theme} />
        </div>
      </div>
      <div className="div3">
        <div className="monthly-to-wi">
          <MonthlyToWiCard theme={theme} />
        </div>
        <div className="fcst-top-client">
          <TopCards setSelectedIds={setSelectedIds} />
        </div>
      </div>
    </div>
  );
}

export default Page1;
