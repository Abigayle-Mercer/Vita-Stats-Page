import React, { Component } from "react";
import GridComponents from "./GridComponents";

import { Responsive, WidthProvider } from "react-grid-layout";
import DemoComponent from "./demoComponent";
const ResponsiveGridLayout = WidthProvider(Responsive);
export default class GridLayout extends Component {
  constructor() {
    super();
    this.state = {
      value: true,
    };
    this.onHandle = this.onHandle.bind(this);
  }
  onHandle() {
    this.setState((prevState) => ({
      value: !prevState.value,
    }));
  }
  render() {
    var layout = [
      { i: "a", x: 0, y: 0, w: 6, h: 1 },
      { i: "b", x: 4, y: 0, w: 4, h: 1 },
      { i: "c", x: 8, y: 0, w: 4, h: 1 },
      { i: "d", x: 0, y: 1, w: 4, h: 1 },
      { i: "e", x: 4, y: 1, w: 4, h: 1 },
      { i: "f", x: 8, y: 1, w: 4, h: 1 },
    ];
    var layout1 = [
      { i: "a", x: 0, y: 0, w: 6, h: 1 },
      { i: "b", x: 6, y: 0, w: 6, h: 1 },
      { i: "c", x: 0, y: 1, w: 6, h: 1 },
      { i: "d", x: 6, y: 1, w: 6, h: 1 },
      { i: "e", x: 0, y: 2, w: 6, h: 1 },
      { i: "f", x: 6, y: 2, w: 6, h: 1 },
    ];

    var layout = { lg: this.state.value === true ? layout1 : layout1 };

    return <GridComponents></GridComponents>;
  }
}
