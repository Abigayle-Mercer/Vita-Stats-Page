import React, { Component } from "react";
import Card from "./Card";
// // import GridLayout from 'react-grid-layout';
// // import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
// import { Responsive, WidthProvider } from "react-grid-layout";
// import DemoComponent from "./demoComponent";
// import BarCharttest from "./BarCharttest";
// import ErrorBarChart from "./ErrorBarChart";
// import Newline from "./Newline";
// import Charts1 from "./Charts1";
// import Charts2 from "./Charts2";
// import Charts3 from "./Charts3";
// import Charts4 from "./Charts4";
// import Charts5 from "./Charts5";
// import Charts6 from "./Charts6";
// import Chart from "./Chart";
import Tile from "./Tile";


function GridComponents(props) {
  return (
    <div>
      <Card>
        <div key="a" style={{ backgroundColor: "lavender" }}>
          <Tile
            title={"Gender"}
            pvalue={"1.0"}
            passOrfail={"passed"}
            name={["Female", "Non Female"]}
            Company={[49.7, 50.3]}
            County={[50, 50]}
            ErrorY={[6, 5]}
          ></Tile>
        </div>
      </Card>

      <Card>
        <div key="f" style={{ backgroundColor: "lavender" }}>
          <Tile
            title={"Gender Identity"}
            pvalue={"0.3114"}
            passOrfail={"passed"}
            name={["Female", "Male", "Transgender", "Other"]}
            Company={[45, 53, 1.2, 0.8]}
            County={[50.5, 47.2, 0.6, 1.7]}
            ErrorY={[5, 5, 1, 0.5]}
          ></Tile>
        </div>
      </Card>

      <Card>
        <div key="b" style={{ backgroundColor: "lavender" }}>
          <Tile
            title={"Military Status"}
            pvalue={"0.0442"}
            passOrfail={"failed"}
            name={["Vetrans", "Non-Vetrans"]}
            Company={[6.6, 93.4]}
            County={[2, 98]}
            ErrorY={[1, 1]}
          ></Tile>
        </div>
      </Card>

      <Card>
        <div key="c" style={{ backgroundColor: "lavender" }}>
          <Tile
            title={"Race"}
            pvalue={"0.1565"}
            passOrfail={"passed"}
            name={[
              "While",
              "Black",
              "American Indian and Alaskan Native",
              "Asain",
              "Native Hawaiian & Other Pacific Islander",
              "Two or More Races",
            ]}
            Company={[85, 2, 0, 7, 1, 5]}
            County={[75.4, 5.5, 1.3, 12.6, 0.6, 1.6]}
            ErrorY={[5, 2, 0, 4, 1, 3]}
          ></Tile>
        </div>
      </Card>

      <Card>
        <div key="d" style={{ backgroundColor: "lavender" }}>
          <Tile
            title={"Education"}
            pvalue={"0.0"}
            passOrfail={"failed"}
            name={["Bachelor Degree", "High School Diploma", "Neither"]}
            Company={[85, 15, 0]}
            County={[38.8, 48.6, 12.6]}
            ErrorY={[10, 10, 0]}
          ></Tile>
        </div>
      </Card>

      <Card>
        <div key="e" style={{ backgroundColor: "lavender" }}>
            <Tile
              title={"Age"}
              pvalue={"0.1508"}
              passOrfail={"passed"}
              name={[
                "15-24",
                "25-34",
                "35-44",
                "45-54",
                "55-64",
                "65-74",
                "75-84",
                "85+",
              ]}
              Company={[5, 30, 25, 20, 10, 5, 5, 0]}
              County={[16.8, 20.13, 16.41, 15.08, 14.41, 9.96, 4.83, 2.39]}
              ErrorY={[2, 5, 5, 2, 1, 4, 1, 3]}
            ></Tile>
        </div>
      </Card>
    </div>
  );
}

export default GridComponents;
