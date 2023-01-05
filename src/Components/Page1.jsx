import Example from "./SurveyResults";
import Card from "./Card";
import Newline from "./Newline";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import TTest from "./TTest";
function Page1() {
  const [button, setButton] = useState("cumulative");

// Survey Results

  return (
    <div>
      <h1>Survey Results</h1>
      <Card style={{ width: 50 }}>
        <Example
          Button={button}
          name={["January", "Febuary", "March", "April"]}
          Cumulative={[1.2, 3.4, 3.2, 4.5]}
          Q1={[3.2, 2.4, 1.2, 2.5]}
          Q2={[1.9, 2.4, 1.2, 2.5]}
          Q3={[0.2, 0.4, 0.9, 1.5]}
          Q4={[1.2, 3.4, 3.2, 4.5]}
          Q5={[1.2, 3.4, 3.2, 4.5]}
          Q6={[1.2, 3.4, 3.2, 4.5]}
          Q7={[1.2, 3.4, 3.2, 4.5]}
          Q8={[1.2, 3.4, 3.2, 4.5]}
          Q9={[1.2, 3.4, 3.2, 4.5]}
          Q10={[1.2, 3.4, 3.2, 4.5]}
        ></Example>
      </Card>
      <Newline></Newline>
      <Button variant="secondary" onClick={() => setButton("cumulative")}>
        Cumulative
      </Button>
      <Button variant="secondary" onClick={() => setButton("Q1")}>
        Q1
      </Button>
      <Button variant="secondary" onClick={() => setButton("Q2")}>
        Q2
      </Button>
      <Button variant="secondary" onClick={() => setButton("Q3")}>
        Q3
      </Button>
      <Button variant="secondary" onClick={() => setButton("Q4")}>
        Q4
      </Button>
      <Button variant="secondary" onClick={() => setButton("Q5")}>
        Q5
      </Button>
      <Button variant="secondary" onClick={() => setButton("Q6")}>
        Q6
      </Button>
      <Button variant="secondary" onClick={() => setButton("Q7")}>
        Q7
      </Button>
      <Button variant="secondary" onClick={() => setButton("Q8")}>
        Q8
      </Button>
      <Button variant="secondary" onClick={() => setButton("Q9")}>
        Q9
      </Button>
      <Button variant="secondary" onClick={() => setButton("Q10")}>
        Q10
      </Button>

      <Newline></Newline>
      <Newline></Newline>
      <TTest></TTest>

      

      {/* <h1>Statistical Analysis Page</h1>
      <GridLayout></GridLayout> */}
    </div>
  );
}

export default Page1;
