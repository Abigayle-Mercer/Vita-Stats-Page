import BarCharttest from "./BarCharttest";
import ErrorBarChart from "./ErrorBarChart";
import Newline from "./Newline";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ErrorBar,
} from "recharts";

const data1 = [
  {
    name: "White",
    Company: 85,
    County: 75.4,
  },
  {
    name: "Black",
    Company: 2,
    County: 5.5,
  },
  {
    name: "American Indian and Alaskan Native",
    Company: 0,
    County: 1.3,
  },
  {
    name: "Asian",
    Company: 7,
    County: 12.6,
  },
  {
    name: "Native Hawaiian & Other Pacific Islander",
    Company: 1,
    County: 0.6,
  },
  {
    name: "Two or More Races",
    Company: 5,
    County: 4.6,
  },
];

const data2 = [
  {
    name: "White",
    Company: 85,
    County: 75.4,
    errorY: 5
  },
  {
    name: "Black",
    Company: 2,
    County: 5.5,
    errorY:2
  },
  {
    name: "American Indian and Alaskan Native",
    Company: 0,
    County: 1.3,
    errorY:0
  },
  {
    name: "Asian",
    Company: 7,
    County: 12.6,
    errorY: 4
  },
  {
    name: "Native Hawaiian & Other Pacific Islander",
    Company: 1,
    County: 0.6,
    errorY:1
  },
  {
    name: "Two or More Races",
    Company: 5,
    County: 4.6,
    errorY:3
  },
];

function Charts4(props) {
  return (
    <div>
      <ResponsiveContainer height="50%" width="75%" aspect={3}>
        <BarChart
          layout="vertical"
          width={100}
          height={70}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 450,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Company" fill="#8884d8" />
          <Bar dataKey="County" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <Newline></Newline>
      <Newline></Newline>
      <ResponsiveContainer width="70%" aspect={3}>
        <BarChart
          width={100}
          height={50}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 550,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Company" fill="#8884d8">
            <ErrorBar
              dataKey="errorY"
              width={4}
              strokeWidth={2}
              stroke="green"
              direction="y"
            />
          </Bar>
          <Bar dataKey="County" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts4;
