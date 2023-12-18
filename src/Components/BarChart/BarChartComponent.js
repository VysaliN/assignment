import React from "react";
import "./BarChart.css";
import barchartdata from "../../Jsondata/barchartdata.json";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from "recharts";
const BarChartComponent = () => {
  return (
    <div className="task">
      <h3 className="taskname">Bar Chart</h3>
      <div className="bar">
        <p>3% Unestimated Issues</p>
        <p>*Forecast-Number of Sprints Required</p>
      </div>
      <BarChart
        width={700}
        height={500}
        barCategoryGap={30}
        data={barchartdata}
      >
        <CartesianGrid />
        <XAxis dataKey="name" label={<Label axisType="xAxis">Sprints</Label>} />
        <YAxis
          label={
            <Label axisType="yAxis" angle="-90">
              Story Point (SP)
            </Label>
          }
        />
        <Tooltip cursor={false} />
        <Legend iconType="circle" align="center" />

        <Bar
          dataKey="SP Planned"
          stackId="a"
          fill="#a0a0a0"
          radius={[20, 20, 0, 0]}
        />
        <Bar
          dataKey="SP Added"
          stackId="a"
          fill="#686868"
          radius={[20, 20, 0, 0]}
        />
        <Bar
          dataKey="SP Completed"
          stackId="b"
          fill="#404040"
          radius={[20, 20, 0, 0]}
        />

        <Bar
          dataKey="SP Forecost"
          stackId="a"
          fill="#dcdcdc"
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
