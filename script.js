"use strict";

let userChoice = prompt("Rock? Paper? Scissors");
userChoice = userChoice.toLowerCase();
let choices = ["rock", "paper", "scissors"]; 
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
function getResult(){
 //Comparing user and computer
 // rock case
   if (userChoice == "rock" && computerChoice == "paper"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("You win") 
 } else if (userChoice == "rock" && computerChoice == "scissors"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("You win") 
 } else if (userChoice == "rock" && computerChoice == "rock"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("Nobody wins") 
 // scissors case  
 } else if (userChoice == "scissors" && computerChoice == "paper"){
 console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
 console.log("You win") 
 } else if (userChoice == "scissors" && computerChoice == "scissors"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("Nobody wins") 
 } else if (userChoice == "scissors" && computerChoice == "rock"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("You lose") 
 } 
 // rock case
   else if (userChoice == "rock" && computerChoice == "paper"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("You lose") 
 } else if (userChoice == "rock" && computerChoice == "scissors"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("You win") 
 } else if (userChoice == "scissors" && computerChoice == "rock"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("Nobody wins") 
 } else {
  console.log("Choose only rock/paper/scissors");
 }
}

getResult();





