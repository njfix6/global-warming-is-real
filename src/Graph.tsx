import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { data } from "./GlobalTemperatureData";

export default class Graph extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          paddingTop: "200px",
          width: "75%",
          height: "65%",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid  /> */}
            <XAxis></XAxis>
            <YAxis
              domain={["dataMin", "dataMax"]}
              unit={"°F"}
              tickFormatter={(value) => value.toFixed(2)}
            ></YAxis>

            {/* <Tooltip /> */}
            {/* <Legend /> */}
            <Line
              strokeWidth={5}
              type="monotone"
              dot={false}
              dataKey="temp"
              stroke="#8884d8"
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
