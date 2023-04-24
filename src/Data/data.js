import { useEffect, useState } from "react";
import axios from "axios";


export function Turnover_KPI() {
  const [turnover_kpi, setTurnover_kpi] = useState([{}]);

  useEffect(() => {
      axios.get("http://localhost:5136/Turnover_KPI").then((response) => {
        setTurnover_kpi((existingData) => {
          return response.data;
        });
      });
  }, []);
  return turnover_kpi;
}

export function Forcast_hist() {
  const [forcast_hist, setForcast_hist] = useState([{}]);

  useEffect(() => {
    
      axios.get("http://localhost:5136/forcast_hist").then((response) => {
        setForcast_hist((existingData) => {
        return response.data;
      });
    });
  }, []);
  return forcast_hist;
}

export function KPI_Stock_Utilisation() {
  const [kpi_stock_utilisation, setKpi_stock_utilisation] = useState([{}]);
  useEffect(() => {

    axios.get("http://localhost:5136/KPI_Stock_Utilisation").then((response) => {
        setKpi_stock_utilisation((existingData) => {
        return response.data;
      });
    });
  }, []);
  return kpi_stock_utilisation;
}


export function Wareh_KPI_IN() {
  const [wareh_kpi_in, setWareh_kpi_in] = useState([{}]);

  useEffect(() => {
    axios.get("http://localhost:5136/wareh_kpi_in").then((response) => {
      setWareh_kpi_in((existingData) => {
        return response.data;
      });
    });
  }, []);
  return wareh_kpi_in;
}


export function KPI_FORCAST() {
  const [kpi_forcast, setKpi_forcast] = useState([{}]);

  useEffect(() => {
    axios.get("http://localhost:5136/KPI_FORCAST").then((response) => {
      setKpi_forcast((existingData) => {
        return response.data;
      });
    });
  }, []);
  return kpi_forcast;
}

export function Budget_TO() {
  const [budget_to, setBudget_to] = useState([{}]);

  useEffect(() => {
    axios.get("http://localhost:5136/budget_TO").then((response) => {
      setBudget_to((existingData) => {
        return response.data;
      });
    });
  }, []);
  return budget_to;
}

export function Working_Mach() {
  const [working_mach, setWorking_mach] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:5136/Working_Mach").then((response) => {
      setWorking_mach((existingData) => {
        return response.data;
      });
    });
  }, []);
  return working_mach;
}

export function Kpi_Data_Prod() {
  const [kpi_data_prod, setKpi_data_prod] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:5136/kpi_data_prod").then((response) => {
      setKpi_data_prod((existingData) => {
        return response.data;
      });
    });
  }, []);
  return kpi_data_prod;
}

export function Kpi_wip() {
  const [kpi_wip, setKpi_wip] = useState([{}]);

  useEffect(() => {
    axios.get("http://localhost:5136/kpi_wip").then((response) => {
      setKpi_wip((existingData) => {
        return response.data;
      });
    });
  }, []);
  return kpi_wip;
}

//->>>//////////////////////////////////CUSTOM TABLES WITH SPECIFIC DATA ///////////////////////-<<<<<<<<
export function Forcast_hist_today(date) {
  const [forcast_hist, setForcast_hist] = useState([{}]);

  useEffect(() => {
    
      axios.get("http://localhost:5136/forcast_hist/"+date).then((response) => {
        setForcast_hist((existingData) => {
        return response.data;
      });
    });
  }, []);
  return forcast_hist;
}

export function Turnover_KPI_today(date) {
  const [turnover_kpi, setTurnover_kpi] = useState([{}]);

  useEffect(() => {
      axios.get("http://localhost:5136/Turnover_KPI/date/"+date).then((response) => {
        setTurnover_kpi((existingData) => {
          return response.data;
        });
      });
  }, []);
  return turnover_kpi;
}

export function Wareh_KPI_IN_WEEK(week) {
  const [wareh_kpi_in, setWareh_kpi_in] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:5136/wareh_kpi_in/week/"+week).then((response) => {
      setWareh_kpi_in((existingData) => {
        return response.data;
      });
    });
  }, []);
  return wareh_kpi_in;
}

export function Turnover_KPI_month(month) {
  const [turnover_kpi, setTurnover_kpi] = useState([{}]);

  useEffect(() => {
      axios.get("http://localhost:5136/Turnover_KPI/month/"+month).then((response) => {
        setTurnover_kpi((existingData) => {
          return response.data;
        });
      });
  }, []);
  return turnover_kpi;
}

export function Wareh_KPI_IN_month(month) {
  const [wareh_kpi_in, setWareh_kpi_in] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:5136/wareh_kpi_in/month/"+month).then((response) => {
      setWareh_kpi_in((existingData) => {
        return response.data;
      });
    });
  }, []);
  return wareh_kpi_in;
}
export function Working_Mach_day(date) {
  const [working_mach, setWorking_mach] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:5136/Working_Mach/date/"+date).then((response) => {
      setWorking_mach((existingData) => {
        return response.data;
      });
    });
  }, []);
  return working_mach;
}

export function Kpi_Data_Prod_day(date) {
  const [kpi_data_prod, setKpi_data_prod] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:5136/kpi_data_prod/date/"+date).then((response) => {
      setKpi_data_prod((existingData) => {
        return response.data;
      });
    });
  }, []);
  return kpi_data_prod;
}

export function Wareh_Scrap() {
  const [Scrapp_Warehouse, setScrapp_Warehouse] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:5136/Scrapp_Warehouse").then((response) => {
      setScrapp_Warehouse((existingData) => {
        return response.data;
      });
    });
  }, []);
  return Scrapp_Warehouse;
}
export function Scrap() {
  const [Scrapp, setScrapp] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:5136/Scrapp").then((response) => {
      setScrapp((existingData) => {
        return response.data;
      });
    });
  }, []);
  return Scrapp;
}

export function Wareh_KPI_IN_day(date) {
  const [wareh_kpi_in, setWareh_kpi_in] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:5136/wareh_kpi_in/date/"+date).then((response) => {
      setWareh_kpi_in((existingData) => {
        return response.data;
      });
    });
  }, []);
  return wareh_kpi_in;
}

export function Kpi_Data_Prod_week(week) {
  const [kpi_data_prod, setKpi_data_prod] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:5136/kpi_data_prod/week/"+week).then((response) => {
      setKpi_data_prod((existingData) => {
        return response.data;
      });
    });
  }, []);
  return kpi_data_prod;
}

export function Monthly_To_Wi() {
  const [kpi_data_prod, setKpi_data_prod] = useState([{}]);
  useEffect(() => {
    axios.get("http://localhost:5136/MonthlyToWi").then((response) => {
      setKpi_data_prod((existingData) => {
        return response.data;
      });
    });
  }, []);
  return kpi_data_prod;
}