import React, { Component } from "react";
import Card from "./Card";
// import GridLayout from 'react-grid-layout';
// import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import { Responsive, WidthProvider } from "react-grid-layout";
import DemoComponent from "./demoComponent";
import BarCharttest from "./BarCharttest";
import ErrorBarChart from "./ErrorBarChart";
import Newline from "./Newline";
import Charts1 from "./Charts1";
import Charts2 from "./Charts2";
import Charts3 from "./Charts3";
import Charts4 from "./Charts4";
import Charts5 from "./Charts5";
import Charts6 from "./Charts6";


function GridComponents(props) {
  return (
    <div>
      <Card>
        <div key="a" style={{ backgroundColor: "lavender" }}>
          <Newline></Newline>
          <Newline></Newline>
          <h2>Gender</h2>
          <DemoComponent color={"white"} tex="cool" />
          <Newline></Newline>
          <Newline></Newline>
          <Charts1></Charts1>
          <Newline></Newline>
          <Newline></Newline>

          <Card style={{ width: 30 }}>
            The p-value is 1.0. At a significance level of 95% Confidence the
            test has passed
          </Card>
        </div>
      </Card>

      <Card>
        <div key="f" style={{ backgroundColor: "lavender" }}>
          <Newline></Newline>
          <Newline></Newline>
          <h2>Gender Identity</h2>
          <DemoComponent color={"white"} />
          <Newline></Newline>
          <Newline></Newline>
          <Charts2></Charts2>
          <Newline></Newline>
          <Newline></Newline>
          <Card>
            <Card style={{ width: 30 }}>
              The p-value is 0.3114 At a significance level of 95% Confidence
              the test has passed
            </Card>
          </Card>
        </div>
      </Card>

      <Card>
        <div key="b" style={{ backgroundColor: "lavender" }}>
          <DemoComponent color={"white"} />
          <Newline></Newline>
          <Newline></Newline>
          <h2>Military Status</h2>
          <Newline></Newline>
          <Newline></Newline>
          <Charts3></Charts3>
          <Newline></Newline>
          <Newline></Newline>
          <Card>
            <Card style={{ width: 30 }}>
              The p-value is 0.0442 At a significance level of 95% Confidence
              the test has failed
            </Card>
          </Card>
        </div>
      </Card>

      <Card>
        <div key="c" style={{ backgroundColor: "lavender" }}>
          <DemoComponent color={"white"} />
          <Newline></Newline>
          <Newline></Newline>
          <h2>Race</h2>
          <Newline></Newline>
          <Newline></Newline>
          <Charts4></Charts4>
          <Newline></Newline>
          <Newline></Newline>
          <Card>
            <Card style={{ width: 30 }}>
              The p-value is 0.1565 At a significance level of 95% Confidence
              the test has passed
            </Card>
          </Card>
        </div>
      </Card>

      <Card>
        <div key="d" style={{ backgroundColor: "lavender" }}>
          <DemoComponent color={"white"} />
          <Newline></Newline>
          <Newline></Newline>
          <h2>Education</h2>
          <Newline></Newline>
          <Newline></Newline>
          <Charts5></Charts5>
          <Newline></Newline>
          <Newline></Newline>
          <Card>
            <Card style={{ width: 30 }}>
              The p-value is 0.0 At a significance level of 95% Confidence the
              test has failed
            </Card>
          </Card>
        </div>
      </Card>

      <Card>
        <div key="e" style={{ backgroundColor: "lavender" }}>
          <DemoComponent color={"white"} />
          <Newline></Newline>
          <Newline></Newline>
          <h2>Age</h2>
          <Newline></Newline>
          <Newline></Newline>
          <Charts6></Charts6>
          <Newline></Newline>
          <Newline></Newline>
          <Card>
            <Card style={{ width: 30 }}>
              The p-value is 0.1508 At a significance level of 95% Confidence
              the test has passed
            </Card>
          </Card>
        </div>
      </Card>
    </div>
  );
}

export default GridComponents;
