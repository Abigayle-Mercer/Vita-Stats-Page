import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     name: "January",
//     cumulative: 4,
//     Q1: 2.4,
//     Q2: 2.5,
//     Q3: 2.600,
//     Q4: 2.400,
//   },
//   {
//     name: "Febuary",
//     cumulative: 3.000,
//     Q1: 1.398,
//     Q2: 1.500,
//     Q3: 1.400,
//     Q4: 2.210,
//   },
//   {
//     name: "March",
//     cumulative: 2.000,
//     Q1: 4.800,
//     Q2: 4.700,
//     Q3: 9.850,
//     Q4: 2.290,
//   },
//   {
//     name: "April",
//     cumulative: 2.780,
//     Q1: 3.908,
//     Q2: 4.000,
//     Q3: 4.050,
//     Q4: 2.000,
//   },
// ];

function Example(props) {



    let data = [];

    for (let i = 0; i < props.name.length; i++) {
      data.push({
        name: props.name[i],
        cumulative: props.Cumulative[i],
        Q1: props.Q1[i],
        Q2: props.Q2[i],
        Q3: props.Q3[i],
        Q4: props.Q4[i],
        Q5: props.Q5[i],
        Q6: props.Q6[i],
        Q7: props.Q7[i],
        Q8: props.Q8[i],
        Q9: props.Q9[i],
        Q10: props.Q10[i],
      });
    }
  
    return (
        <div>
      <ResponsiveContainer width="80%" height="70%" aspect ={3}>
        <LineChart
          layout="horizontal"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 300,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis type="number" />
          <XAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey={props.Button} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  
}

export default Example;
