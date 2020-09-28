import React from "react";
import "./calculator.css";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      string: [],
      output: [],
      stck: [],
      value: ""
    };
  }
  input1 = (e) => {
    var state = this.state;
    if (state.value === "") {
      state.value += e.target.value;
      state.string = [...state.string, e.target.value];
    } else {
      state.string.pop();
      state.value += e.target.value;
      state.string = [...state.string, state.value];
    }
    this.setState({
      state
    });
    // console.log(this.state);
  };

  input2 = (e) => {
    this.setState({
      string: [...this.state.string, e.target.value],
      value: ""
    });
  };
  clear = () => {
    this.setState({
      string: [],
      output: [],
      stck: [],
      value: ""
    });
  };
  cal = () => {
    var presedence = { "+": 1, "-": 1, "*": 2, "/": 2, "**": 3 };
    this.state.string.map((item) => {
      if (Number(item) <= 99999999999 && Number(item) >= -999999999999) {
        var stt = this.state;
        stt.output = [...this.state.output, item];
        this.setState({
          stt
        });
      } else {
        if (
          this.state.stck.length === 0 ||
          presedence[item] >
            presedence[this.state.stck[this.state.stck.length - 1]]
        ) {
          var stt1 = this.state;
          stt1.stck = [...stt1.stck, item];
          this.setState({
            stt1
          });
        } else {
          var stt3 = this.state;
          var stckR = stt3.stck.slice().reverse();
          stckR.map((stckItem) => {
            if (presedence[stckItem] >= presedence[item]) {
              stt3.output = [...stt3.output, stckItem];
              stt3.stck.pop();
            }
            return null;
          });
          stt3.stck = [...stt3.stck, item];
          this.setState({
            stt3
          });
        }
      }
      return null;
    });
    var stt4 = this.state;
    var stackR = stt4.stck.slice().reverse();
    stackR.map((rItem) => {
      stt4.output = [...stt4.output, rItem];
      return null;
    });
    this.setState({
      stt4
    });
    // console.log(this.state);
    this.evaluate(this.state.output);
  };
  evaluate = (output) => {
    var str = [];
    // console.log(output);
    output.map((item) => {
      if (Number(item) <= 9999999999 && Number(item) >= -99999999999) {
        str = [...str, item];
      } else if (item === "+") {
        var lastOperant = str.pop();
        var secondLastOperand = str.pop();
        str = [...str, Number(secondLastOperand) + Number(lastOperant)];
      } else if (item === "-") {
        var lastOperant1 = str.pop();
        var secondLastOperand1 = str.pop();
        str = [...str, Number(secondLastOperand1) - Number(lastOperant1)];
      } else if (item === "*") {
        var lastOperant2 = str.pop();
        var secondLastOperand2 = str.pop();
        str = [...str, Number(Number(secondLastOperand2) * lastOperant2)];
      } else if (item === "/") {
        var lastOperant3 = str.pop();
        var secondLastOperand3 = str.pop();
        str = [...str, Number(secondLastOperand3) / Number(lastOperant3)];
      } else {
        str = ["error"];
        return str;
      }
      return str;
    });
    var state1 = this.state;
    state1.string = [Number(str[0])];
    state1.output = "";
    state1.stck = [];
    this.setState({
      state1
    });
    // console.log(str, output, this.state);
  };
  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <h1>Calculator</h1>
          {/* <input onClick={this.input1} type="number" id="inputField" /> */}
          <div class="screen">
            <h4>{this.state.string}</h4>
          </div>
          <div className="keys">
            <div>
              <button className="button" onClick={this.input1} value="1">
                1
              </button>
              <button className="button" onClick={this.input1} value="2">
                2
              </button>
              <button className="button" onClick={this.input1} value="3">
                3
              </button>
            </div>
            <div>
              <button className="button" onClick={this.input1} value="4">
                4
              </button>
              <button className="button" onClick={this.input1} value="5">
                5
              </button>
              <button className="button" onClick={this.input1} value="6">
                6
              </button>
            </div>
            <div>
              <button className="button" onClick={this.input1} value="7">
                7
              </button>
              <button className="button" onClick={this.input1} value="8">
                8
              </button>
              <button className="button" onClick={this.input1} value="9">
                9
              </button>
            </div>
            <div>
              <button className="button" onClick={this.input2} value="+">
                +
              </button>
              <button className="button" onClick={this.input1} value="0">
                0
              </button>
              <button className="button" onClick={this.input2} value="-">
                -
              </button>
            </div>
            <div>
              <button className="button" onClick={this.input2} value="*">
                *
              </button>
              <button className="button" onClick={this.input2} value="/">
                /
              </button>
              <button className="button" onClick={this.clear}>
                C
              </button>
            </div>
            <div>
              <button className="button equal" onClick={this.cal}>
                =
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Calculator;
