import React from "react";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      string: "",
      value: [],
      operator: "",
      done: false
    };
  }
  input1 = e => {
    this.setState({
      string: this.state.string + e.target.value,
      value: [...this.state.value, Number(e.target.value)]
    });
  };
  input2 = e => {
    this.setState({
      string: this.state.string + e.target.value,
      operator: e.target.value
    });
  };
  cal = () => {
    console.log(this.state);

    if (this.state.operator === "+") {
      var sum = Number(this.state.value[0]) + Number(this.state.value[1]);
      this.setState({
        string: this.state.string + " = " + sum
      });
      // console.log(Number(this.state.value[0]) + Number(this.state.value[1]));
    } else {
      var sub = Number(this.state.value[0]) - Number(this.state.value[1]);
      this.setState({
        string: this.state.string + " = " + sub
      });
      // console.log(Number(this.state.value[0]) - Number(this.state.value[1]));
    }
  };
  render() {
    return (
      <React.Fragment>
        <h1>In Calculator</h1>
        {/* <input onClick={this.input1} type="number" id="inputField" /> */}
        <h4>{this.state.string}</h4>
        <button onClick={this.input1} value="1">
          1
        </button>
        <button onClick={this.input1} value="2">
          2
        </button>
        <button onClick={this.input1} value="3">
          3
        </button>
        <button onClick={this.input2} value="+">
          +
        </button>
        <button onClick={this.input2} value="-">
          -
        </button>
        <button onClick={this.cal}>=</button>
      </React.Fragment>
    );
  }
}
export default Calculator;
