let randomNumber = Math.floor(Math.random() * 100 + 1);

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
/* 
let randomNumber = Math.round(Math.random() * 100);
let outPut = document.querySelector(".final-output");
let leftAtt = 7;
let textAtt = document.querySelector("#attepts");
function guessNumber(){
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero 
  //Print "Please enter a number between 1 and 100" 
  document.querySelector(".inputs-Values").value = "";
  
  if (guess <= 0 || guess > 100 || guess.length == 0) {
    outPut.innerText = "Please enter a number between 1 and 100"; 
    
    return;
  }
  leftAtt--;
 
  if (guess == randomNumber){
    outPut.innerText = "You won in " + (7 - leftAtt) + " attempts!";
    return;
}
textAtt.innerHTML = leftAtt;
//If the users guess is higher than the random number print Number is too high, try again 
//(hint use .final-out class to print)alert
if (leftAtt) {
  if (guess > randomNumber) {
    outPut.innerText = "Your number is bigger, try again!";
  }
  else if (guess < randomNumber) {
    outPut.innerText = "Your number is smaller, try again!";
  }
}
else {
  outPut.innerText = "You lost!";
}

}

//If the users guess is lower than the random number print Number is too low, try again  
//(hint use .final-out class to print)
//If the user has guessed the random number correctly print out the randomNumber with a message 
// "Guess is correct. You win!"
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  randomNumber = Math.round(Math.random() * 100);
  //randomNumber = 50;
  leftAtt = 7;
  outPut.innerText = "Guess a number between 1 and 100";
  textAtt.innerText = leftAtt;
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
}
//keyboard exception
function keyBoardEvents(e) {
  //alert(e.keyCode);
  if (e.keyCode === 13 || e.keyCode === 32) {
    guessNumber();
  }
}

document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
*/