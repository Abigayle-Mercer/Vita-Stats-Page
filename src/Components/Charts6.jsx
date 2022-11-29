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
    name: "15-24",
    Company: 5,
    County: 16.8,
    errorY: 2,
  },
  {
    name: "25-34",
    Company: 30,
    County: 20.13,
    errorY: 5,
  },
  {
    name: "35-44",
    Company: 25,
    County: 16.41,
    errorY: 5,
  },
  {
    name: "45-54",
    Company: 20,
    County: 15.08,
    errorY: 2,
  },
  {
    name: "55-64",
    Company: 10,
    County: 14.41,
    errorY: 1,
  },
  {
    name: "65-74",
    Company: 5,
    County: 9.96,
    errorY: 4,
  },
  {
    name: "75-84",
    Company: 5,
    County: 4.83,
    errorY: 1,
  },
  {
    name: "85+",
    Company: 0,
    County: 2.39,
    errorY: 3,
  },
];

const data2 = [
{
    name: "15-24",
    Company: 5,
    County: 16.8,
    errorY: 2,
  },
  {
    name: "25-34",
    Company: 30,
    County: 20.13,
    errorY: 5,
  },
  {
    name: "35-44",
    Company: 25,
    County: 16.41,
    errorY: 5,
  },
  {
    name: "45-54",
    Company: 20,
    County: 15.08,
    errorY: 2,
  },
  {
    name: "55-64",
    Company: 10,
    County: 14.41,
    errorY: 1,
  },
  {
    name: "65-74",
    Company: 5,
    County: 9.96,
    errorY: 4,
  },
  {
    name: "75-84",
    Company: 5,
    County: 4.83,
    errorY: 1,
  },
  {
    name: "85+",
    Company: 0,
    County: 2.39,
    errorY: 0,
  },
];

function Charts6(props) {
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

export default Charts6;
