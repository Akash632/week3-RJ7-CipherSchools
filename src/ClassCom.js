import React, { Component } from 'react';

export default class ClassCom extends Component {
  constructor(props){
    super(props);
    this.setName=this.setName.bind(this);
  }  
  state={name:"Akash"};
    setName(name){
        this.setState({...this.state,name:"Akash"});
    }
    componentDidMount(){
      console.log("Hello");
    }
  render() {
    return (
      <div>
        <h1>This is {this.state.name}</h1>
        <button onClick={this.setName}>Click Me!!</button>
      </div>
    );
  }
}

// const Name=()=>{
//   const[state,setState]=useState("Akash");
//   let setName=(e)=>{
//     setState({...state,name});
//   }

//   let testHandler=(e)=>{
//     console.log(e);
//   }
//   return(
//     <>
//     <h1>This is :{state.name}</h1>
//     <button onClick={()=>{
//       this.setName("AKash");
//       this.testHandler();
//       }}>Click Me</button>
//     </>
//   )
// }

