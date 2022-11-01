import React from "react";
import OeeTodayYesterdayCard from "../../Cards/OeeTodayYesterdayCard";
import useLocalStorage from "use-local-storage";
import "./style2.css";
import MachHTodayYesterdayCard from "../../Cards/MachHTodayYesterdayCard";
import ManHTodayYesterdayCard from "../../Cards/ManHTodayYesterdayCard";
import WipCard from "../../Cards/WipCard";
import ScrapCard from "../../Cards/ScrapCard";
import ElastomerCard from "../../Cards/ElastomerCard";

function Page2() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="p2-main-container" data-theme={theme}>
      <div onClick={switchTheme} className="div0">
      <ElastomerCard />
      </div>
      <div className="content">
      <div  className="oee">
          <div className="oee-yesterday">
            <OeeTodayYesterdayCard
              yesterday={true}
              theme={theme}
              color="#ffa600"
              title="Yesterday's"
            />
          </div>
          <div className="oee-today">
            <OeeTodayYesterdayCard
              yesterday={false}
              theme={theme}
              color="#88ff00"
              title="Today's"
            />
          </div>
        </div>
        <div className="machH">
          <div className="machH-yesterday">
            <MachHTodayYesterdayCard
              yesterday={true}
              theme={theme}
              color="#ffa600"
              title="Yesterday's"
            />
          </div>
          <div className="machH-today">
            <MachHTodayYesterdayCard
              yesterday={false}
              theme={theme}
              color="#88ff00"
              title="Today's"
            />
          </div>
      </div>
        
        <div className="manH">
          <div className="manH-yesterday">
            <ManHTodayYesterdayCard
              yesterday={true}
              theme={theme}
              color="#ffa600"
              title="Yesterday's"
            />
          </div>
          <div className="manH-today">
            <ManHTodayYesterdayCard
              yesterday={true}
              theme={theme}
              color="#88ff00"
              title="Today's"
            />
          </div>
        </div>
        <div className="scrap-wip">
          <div className="scrap">
            <ScrapCard/>
          </div>
          <div className="wip">
            <WipCard/> 
          </div>
        </div>
    </div>
      </div>
 
  );
}

export default Page2;
