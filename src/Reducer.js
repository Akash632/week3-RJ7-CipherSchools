import React,{useReducer} from 'react';

const countReducer=(action,state) => {
    switch(action.type){
        case "increament":
            return {count : state.count+1}
        case "decreament":
            return {count : state.count-1}
        default:
            return state;
    }
}

const TestComponent=()=>{
    const [state,dispatch]=useReducer(countReducer,{count: 0})

    return (
        <div>
            <h1>this count {state.count}</h1>
            <button onClick={()=>dispatch({type:"increament"})}>+1</button>
            <button onClick={()=>dispatch({type:"decreament"})}>-1</button>
        </div>
    )
}
//useReducer is a function that takes 2 arguments
//1. reducer function
//2.intial value of state.
//useReducer returns an array of two values.
//1.the current state.
//2.a dispatch function.

//reducer function controlls how the state will be changed given a certain action.

/// an action is an object:
//it has 2 key value pairs
//1 type: a tring that defines what is being performed.
//2. payload: an object that contains the data that will be used to update the state (optional);
