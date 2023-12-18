import React from "react";
import "./App.css";
import AreaChartComponent from "./Components/AreaChart/AreaChartComponent";
import BarChartComponent from "./Components/BarChart/BarChartComponent";
import TableListComponent from "./Components/TableList/TableListComponent";
import CardDataComponent from "./Components/CardData/CardDataComponent";
const App = () => {
  return (
    <div className="App">
      <AreaChartComponent />
      <BarChartComponent />
      <TableListComponent />
      <CardDataComponent />
    </div>
  );
};

export default App;
