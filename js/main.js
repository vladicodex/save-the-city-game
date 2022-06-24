//Variables
var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
background = new Image();
background.src = '../img/background.png';
meteorite = new Image();
meteorite.src = '../img/meteorite.png';
var meteoriteX = 350;
var meteoriteY = -100;
var gravity = 50; //Velocidad de caída
var text = "SAVE ME PLEASE!";
var textDisplay = document.getElementById('textDisplay');

//Event listener
window.onkeydown = function(e) { keyDown(e) };

//Load
background.onload = function(){
  var interval = setInterval( function () {
    movemeteorite();
    if (meteoriteY == 250){
      clearInterval(interval);
      gameOver();
    }
  }, gravity);

}

//Draw
function drawAll(){
    context.drawImage(background, 0, 0);
    context.drawImage(meteorite, meteoriteX, meteoriteY, 100, 100);
}

//Keyboard Listener
function keyDown(e){
  console.log(e.key);
  letter = text[0];
  if (e.key == letter){
    text = text.substring(1);
    textDisplay.innerHTML = text;
    meteoriteY -= 40;
    console.log(meteoriteY);
  }
}

//Meteorite movement
function movemeteorite(){
  meteoriteY += 5;
  drawAll();
}

//Explosion
function gameOver(){
    var audio = document.getElementById('explosion');
    audio.play();
    alert("SE EXTINGUIO JURASSIC WORLD");
}