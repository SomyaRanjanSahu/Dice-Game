
// ---------- For random dice numbers ----------

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var images1 = "images/dice" + randomNumber1 + ".png";
var images2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", images1);
document.querySelector(".dice .img2").setAttribute("src", images2);

// ---------- For changing h1 ----------

var text;
// If player 1 wins
if(randomNumber1 > randomNumber2) {
    text = "Player 1 wins! 🚩";
}
// If player 2 wins
else if (randomNumber1 < randomNumber2) {
    text = "Player 2 wins! 🚩";
}
// Draw
else {
    text = "Draw!";
}

document.querySelector("h1").innerHTML = text;