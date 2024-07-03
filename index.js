
var randomNumber1=Math.floor(Math.random() * 6) + 1;
var randomDiceimage= "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImagesource="./" + randomDiceimage;
var Image1=document.getElementsByTagName("img")[0];
Image1.setAttribute("src",randomImagesource);

var randomNumber2=Math.floor(Math.random() * 6) + 1;
var randomImagesource2="./dice" + randomNumber2 + ".png";
document.getElementsByTagName("img")[1].setAttribute("src",randomImagesource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";}
 else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML="🚩Player 2 Wins!";}
 else  {
    document.querySelector("h1").innerHTML=("Draw");
}