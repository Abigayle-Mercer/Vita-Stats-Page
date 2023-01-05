import React, { Component } from "react";
import Card from "./Card";
import DemoComponent from "./demoComponent";
import Newline from "./Newline";
import Chart from "./Chart";


function Tile(props) {
  return (
    <div>
      <Newline></Newline>
      <Newline></Newline>
      <h2>{props.title}</h2>
      <DemoComponent color={"white"} tex="cool" />
      <Newline></Newline>
      <Newline></Newline>
      <Chart
        name={props.name}
        Company={props.Company}
        County={props.County}
        ErrorY={props.ErrorY}
        data1={props.data1}
        data2={props.data2}
      ></Chart>
      <Newline></Newline>
      <Newline></Newline>

      <Card>
      <Card style={{ width: 30 }}>
        The p-value is {props.pvalue}. At a significance level of 95% Confidence
        the test has {props.passOrfail}.
      </Card>
      </Card>
    </div>
  );
}

export default Tile;
