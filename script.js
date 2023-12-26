"use strict";
function getComputerChoice(){
 let choices = ["Rock", "Paper", "Scissors"]; 
 let choice = choices[Math.floor(Math.random()*choices.length)];
 console.log("Comoputer chose " + choice);
}

getComputerChoice();
