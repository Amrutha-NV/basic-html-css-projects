let max = prompt("enter your max range until which you wanna guess");
let answer = Math.floor(Math.random() * max) + 1;
console.log(answer);
let guess = prompt("enter your guess");
while (true) {
    if (guess == answer) {
        console.log("bro your guess is right the number is", answer);
        console.log("_______________ENDGAME____________________");
        break;
    } else if (guess == 'quit') {
        console.log("bro better luck next time");
        break;
    } else if (guess < answer) {
        guess = prompt("hint: your guess is small take another guess-enter your guess:");
    } else {
        guess = prompt(" hint:your guess is large take another guess-enter your guess:");
    }
}