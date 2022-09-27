console.log("Guess Game By Nikki Kharkwal. \nYou have to guess a number between 1-100.");
let randomnum = Math.floor((Math.random() * 100) + 1);
let score = 0;
let guess;

while (guess != randomnum) {
  guess = prompt("Enter Your Guess?");
  guess = Number.parseInt(guess);

  if (guess > 100 || guess < 1) {
    console.log("Enter your guess in between 1-100 including.");
    score++;
  }
  else if (guess != randomnum && guess < randomnum) {
    console.log("Your guess is lesser than the actual number.")
    score++;
  }
  else if (guess != randomnum && guess > randomnum) {
    console.log("Your guess is greater than the actual number.")
    score++;
  }
  else {
    console.log(`Congratulations. You guessed the number "${randomnum}". \nYour Score is ${100 - score} out of 100. `)
  }
}