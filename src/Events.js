import React,{useState} from 'react';

export default function Events() {
  const[text,setText]=useState("");
    function Events() {
        let headingEl = document.getElementById("heading");
        headingEl.innerHTML = "Wassup";
    }
    let buttonElement = document.getElementById("buttonEl");
    // buttonElement.addEventListener("click", Events);
    // onClicking this function the text is getting changed  
  return (
    <div>
      <h1 id="heading">{text}</h1>
      <button id="buttonEl">Click me!</button> 
      <button onClick={(e)=>setText("Hello Akash")}></button> 
      {/* onClick event herewe have used */}
    </div>
  );
}
