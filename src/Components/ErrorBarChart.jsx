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
  ErrorBar
} from "recharts";

const data = [
  {
    name: "Page A",
    Company: 4000,
    County: 2400,
    amt: 2400,
    errorY: 500,
  },
  {
    name: "Page B",
    Company: 3000,
    Countyt: 2210,
    errorY: 400,
  },
  {
    name: "Page C",
    Company: 2000,
    County: 9800,
    amt: 2290,
    errorY: 300,
  },
  {
    name: "Page D",
    Company: 2780,
    County: 3908,
    amt: 2000,
    errorY: 600,
  },
  {
    name: "Page E",
    Company: 1890,
    County: 4800,
    amt: 2181,
    errorY: 700,
  },
  {
    name: "Page F",
    Company: 2390,
    County: 3800,
    amt: 2500,
    errorY: 900,
  },
  {
    name: "Page G",
    Company: 3490,
    County: 4300,
    amt: 2100,
    errorY: 350,
  },
];

export default function ErrorBarChart() {
  return (
    <ResponsiveContainer width="70%" aspect={3}>
      <BarChart
        width={100}
        height={50}
        data={data}
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
        /></Bar>
         <Bar dataKey="County" fill="#82ca9d" />
        
      </BarChart>
    </ResponsiveContainer>
  );
}
