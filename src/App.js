import React,{useState} from 'react';
import './App.css';
import ClassCom from './ClassCom';
import Events from './Events';
import HOC from './HOC';
import Photos from './Photos';
import PropeTypes from './PropeTypes';
import Reducer from './Reducer';
import SignUp from './SignUp';
import SumNumber from './SumNumber';
import TaskScreen from './TaskScreen';
import higherOrderComponent from './HOC';
import SampleRender from './SampleRender';
import { BrowserRouter,Routers,Routes } from 'react-router-dom';
function App() {
  const TestApp=higherOrderComponent(()=>{
    return <div>TestApp</div>
  })
  const[value,setValue]=useState("");
  return (
    <div className="App">
     <input type="text" onChange={(e)=>setValue(e.target.value)}/>
     {/* <p>26</p>
     <p>Lovely Professional University</p> */}
     <BrowserRouter>
     <Routes>
      <Route path="/proptypes" element={<PropeTypes name={value}/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/classcom" element={<ClassCom/>}/>
      <Route path="/sumNumbers" element={<SumNumber/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/taskScreen" element={<TaskScreen/>}/>
      <Route path="/reducer" element={<Reducer/>}/>
      <Route path="/photos" element={<Photos/>}/>
      <Route path="/hoc" element={<HOC/>}/>
      <Route path="/sampleRender" element={<SampleRender/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
