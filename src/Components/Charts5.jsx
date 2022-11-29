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
    name: "Bachelor Degree",
    Company: 85,
    County: 38.8,
  },
  {
    name: "High School Diploma",
    Company: 15,
    County: 48.6,
  },
  {
    name: "Neither",
    Company: 0,
    County: 12.6,
  },
];

const data2 = [
  {
    name: "Bachelor Degree",
    Company: 85,
    County: 38.8,
    errorY: 10,
  },
  {
    name: "High School Diploma",
    Company: 15,
    County: 48.6,
    errorY: 10,
  },
  {
    name: "Neither",
    Company: 0,
    County: 12.6,
    errorY: 0
  },
];

function Charts5(props) {
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

export default Charts5;
