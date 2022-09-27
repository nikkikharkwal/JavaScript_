let you = prompt("Enter S, W, Or G");
let botI = Math.floor(Math.random() *3);

let bot = ["S", "W", "G"][botI]

const rule = (bot, you) => {
  if (bot === you) {
    return "Draw"
  }
  else if (bot === "S" && you === "W") {
    return "bot"
  }
  else if (bot === "S" && you === "G") {
    return "you"
  } 
  else if (bot === "W" &&  you === "S") {
    return " you"
  }
  else if (bot === "W" &&  you === "G") {
    return "bot"
  }
  else if (bot === "G" &&  you === "W") {
    return " you"
  }
  else if (bot === "G" &&  you === "S") {
    return "bot"
  }
}
let result = rule(bot, you)
console.log(`Bot choose : "${bot}" vs You choose : "${you}" .\nSo ${result} won the game.`)