import React from "react";
import "./AreaChart.css";
import areachartdata from "../../Jsondata/areachartdata.json";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Legend,
} from "recharts";

const AreaChartComponent = () => {
  return (
    <div className="task">
      <h3 className="taskname">Area Chart</h3>
      <p className="area">
        Total Lead Time:35days(Avg) Total Cycle Time:33days(Avg)
      </p>
      <AreaChart
        width={700}
        height={500}
        data={areachartdata}
        className="areachart"
      >
        <Area type="basis" dataKey="Issue Open" fill="#36454F" stroke="none" />
        <Area
          type="basis"
          dataKey="Issue Started"
          fill="#808080"
          stroke="none"
        />
        <Area
          type="basis"
          dataKey="Issue Completed"
          fill="#D3D3D3"
          stroke="none"
        />
        <CartesianGrid opacity={0.5} />
        <XAxis
          dataKey="name"
          label={
            <Label axisType="xAxis" position="insideBottom" offset={-15}>
              Hours in Avg
            </Label>
          }
        />
        <YAxis
          label={
            <Label axisType="yAxis" angle="-90">
              Story Point (Days)
            </Label>
          }
        />
        <Tooltip />
        <Legend iconType="circle" align="center" />
      </AreaChart>
    </div>
  );
};

export default AreaChartComponent;
