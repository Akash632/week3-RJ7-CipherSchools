import React,{useState,useEffect} from 'react';

function TaskScreen() {
    const[data,setData]=useState(0);
    const tasks=[
        {
            id:1,
            title:'Task 1'
        },
        {
            id:2,
            title:'Task 2'
        },
        {
            id:3,
            title:'Task 3'
        }
    ];
    useEffect(()=>{
        console.log("screen loaded")
    },[data]);
  return (
    <div>
      {tasks.map((task)=>{
        <div>
            <p>{task.id}</p>
            <p>{task.title}</p>
            </div>
      })}
      <button onClick={setData(data+1)}>click me</button>
    </div>
  );
}
//useEffect
//1.it takes 2 arguments
//A. the first argument is a function that will be called after component is rendered.
//B. the second argument is an array of values that will be watched for change (optional)
//B a No array passed: useEffect will run on intial render and every state update.
//B b Empty Array passed: useEffect will run only on initial render.
//B c Array of value passed: useEffect will run only on initial render and everytime when the valus of variable gets updated.

export default TaskScreen;
