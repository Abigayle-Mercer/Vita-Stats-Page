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
} from "recharts";

const data = [
  {
    name: "Page A",
    Company: 4000,
    County: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    Company: 3000,
    County: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    Company: 2000,
    County: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    Company: 2780,
    County: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    Company: 1890,
    County: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    Company: 2390,
    County: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    Company: 3490,
    County: 4300,
    amt: 2100,
  },
];

export default function BarCharttest() {
    return (
      <ResponsiveContainer height="50%" width="75%" aspect={3}>
        <BarChart
          layout="vertical"
          width={100}
          height={70}
          data={data}
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
    );
  
}
