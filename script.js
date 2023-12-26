"use strict";
// defining all of the variables needed to compare user's and computer's outputs
let userChoice = prompt("Rock? Paper? Scissors");
userChoice = userChoice.toLowerCase();
let choices = ["rock", "paper", "scissors"]; 
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
// main function of the program
function getResult(){
 // Comparing user and computer
 // rock case
   if (userChoice == "rock" && computerChoice == "paper"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("You lose") 
 } else if (userChoice == "rock" && computerChoice == "scissors"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("You win") 
 } else if (userChoice == "rock" && computerChoice == "rock"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("Nobody wins") 
 // scissors case  
 } else if (userChoice == "paper" && computerChoice == "paper"){
 console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
 console.log("Nobody wins") 
 } else if (userChoice == "paper" && computerChoice == "scissors"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("You lose") 
 } else if (userChoice == "paper" && computerChoice == "rock"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("You win") 
 } 
 // rock case
   else if (userChoice == "scissors" && computerChoice == "paper"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("You win") 
 } else if (userChoice == "scissors" && computerChoice == "scissors"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("Nobody wins") 
 } else if (userChoice == "scissors" && computerChoice == "rock"){
  console.log("Your choice was " + userChoice + " and computer's choice was " + computerChoice);
  console.log("You lose") 
 } else {
  console.log("Choose only rock/paper/scissors");
 }
}

// calling main function of the program
getResult();





