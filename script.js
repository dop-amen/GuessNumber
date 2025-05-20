let gamenum = 10;
let usernum = prompt("enter the number (10):");

while (gamenum != usernum) {
    usernum = prompt("Wrong number! Try again:");
}
console.log("You did it!");