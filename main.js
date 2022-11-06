screen_width=0;
screen_height=0;
speak_data=0;
to_number=0;
x = 0;
y = 0;

draw_apple = "apple.png";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();


function preload(){
  apple=loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
  to_number = Number(content);
 console.log(event); 

 if (Number.isInteger (to_Number)) {
  console.log("Started Drawing Apple")
  draw_apple=set;

  else{
    console.log("The speech has not recognized a number");
  }
 }
 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
for ( var i = 1; i <= to_number; i++){
x=Math.floor(Math_random()*700);
y=Math.floor(Math_random()*400);
image(apple,x,y,50,50);
}

 canvas=createCanvas(600,500);
 canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier= ml5.poseNet(video , modalLoaded);
 classifier.on('pose',got_result);
}
function modalLoaded(){
 console.log("Modal Loaded");
}



function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    i=1;
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
