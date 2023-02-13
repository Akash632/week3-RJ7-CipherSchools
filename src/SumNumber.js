import React, { Component } from "react";

export default class SumNumber extends Component {
  state = {
    fireNumber: 0,
    seconNumber: 0,
    sum:0,
    sumString: "Component has not rendered"
  };
  componentDidMount(){
    console.log("component did mount");
    testAPI(5,6).then((sum)=>{
        this.setSum(sum);
    });
  }
  componentDidUpdate(){
    console.log("component did update");
    this.setState(...this.state,sumString:`The sum is: ${this.state.sum}`);
  }
  setSum=(sum)=>{
    this.state({...this.state,sum});
  }
  render() {
    return (
      <div>
        <input
          type="number"
          onChange={() => {
            this.setState({
              ...this.state,
              firstNumber: parseInt(e.target.value),
            });
          }}
          value={this.state.firstNumber}
        />
        <input
          type="number"
          onChange={() => {
            this.setState({
              ...this.state,
              secondNumber: parseInt(e.target.value),
            });
          }}
          value={this.state.secondNumber}
        />
        <button>Add Numbers</button>
        <h3>Sum : {this.state.sum}</h3>
      </div>
    );
  }
}
