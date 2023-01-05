import Card from "./Card";
import Newline from "./Newline";
import DropDown from "./DropDown";
import React from "react";
import "./TTest.css";

function TTest() {
    const dates = [{value : "January 1st, 2023", label : "January 1st, 2023"},
                   {value : "Febuary 1st, 2023", label : "Febuary 1st, 2023"}, 
                   {value : "March 1st, 2023", label : "March 1st, 2023"}]




  return (
    <div className="content-container">
      <div className="row">
        <Card>
          <div>
            T-Test results: 
            <Newline></Newline>
            Test Statistic =<Newline></Newline>
            P-Value =
          </div>
          <Newline></Newline>
          <div className="left-panel box">
            <DropDown placeHolder="Select..." options={dates} />
          </div>
          <div className="right-panel box">
            <DropDown placeHolder="Select..." options={dates} />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default TTest;
