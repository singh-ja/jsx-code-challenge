//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
const fName = "Jai";
const lName = "Sing";
const luckyNumber = 7;
ReactDOM.render(
  <div>
    <h1>
      {fName} {lName}
    </h1>
    <h1>My favorite foods</h1> by <b>{`${fName} ${lName}`}</b>
    <ul>
      <li>Paneer Tikka</li>
      <li>Rasmalai</li>
      <li>Baby Surmai</li>
    </ul>
    <h3>My lucky number is {luckyNumber}</h3>
    <h3>My Random number is {Math.floor(Math.random() * 10)}</h3>
  </div>,
  document.getElementById("root")
);
