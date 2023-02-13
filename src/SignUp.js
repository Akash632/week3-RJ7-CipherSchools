import React, {useState} from 'react'

 const SignUp = () =>{
     const [state, setState]=useState({
         firstName:"",
         lastName:"",
         email:"",
         password:"",
     })
     let handleChange = (e)=>
     setState({...state, [e.target.name]:e.target.value});
     return(
       <form onSubmit={(e)=>e.preventDefault}> 
           <label>First Name</label>
           <input name={"firstName"} type={"text"} onChange={handleChange} value={state.firstName} placeholder={"First Name"}/>
           <label>First Name</label>
           <input name={"lastname"} type={"text"} onChange={handleChange} value={state.lastName} placeholder={"Last Name"}/>
           <label>First Name</label>
           <input name={"email"} type={"text"} onChange={handleChange} value={state.email} placeholder={"Email"}/>
           <label>First Name</label>
           <input name={"password"} type={"text"} onChange={handleChange} value={state.password} placeholder={"Password"}/>
      
         <button type={`submit`}>submit</button>
       </form>
     )
 }

 export default SignUp;
