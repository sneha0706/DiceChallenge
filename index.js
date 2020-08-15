//Anjela's Method
var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImageNumber= "dice" + randomNumber1+ ".png";

var randomImageSource="images/" + randomImageNumber;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

//My Method


var randomNumber2=Math.floor(Math.random()*6)+1;

if(randomNumber2===1){
document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(randomNumber2===2){
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(randomNumber2===3){
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(randomNumber2===4){
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(randomNumber2===5){
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else{
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
if(randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
if(randomNumber1===randomNumber2){
document.querySelector("h1").innerHTML="It's A Draw!";
}
