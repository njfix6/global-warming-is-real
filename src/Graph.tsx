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
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import { data } from "./GlobalTemperatureData";

type Props = {
  axisColor: string;
  lineColor: string;
};

export default class Graph extends PureComponent<Props> {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
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
          <XAxis stroke={this.props.axisColor} dataKey={"year"}></XAxis>
          <YAxis
            domain={["dataMin-0.1", "dataMax"]}
            unit={"°F"}
            stroke={this.props.axisColor}
            dataKey={"temp"}
            tickFormatter={(value) => value.toFixed(2)}
          ></YAxis>

          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Area
            strokeWidth={5}
            type="monotone"
            dot={false}
            dataKey="temp"
            fill={this.props.lineColor}
            stroke={this.props.lineColor}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
