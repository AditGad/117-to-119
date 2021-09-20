array=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye"];
randomnumber=Math.floor((Math.random()*array.length)+1);
sketch=array[randomnumber];
document.getElementById("sketchname").innerHTML="Sketch to be drawn= "+sketch;
timercounter=0;
timercheck="";
drawnsketch="";
answerholder="";score=0;
function preload(){
classifier=ml5.imageClassifier("DoodleNet");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
background("white");
}
function draw(){

}  
function checksketch(){
    timercounter++;
    document.getElementById("time").innerHTML="timer= "+timercounter;
    if(timercounter>400)
    {
        timercounter=0;
        timercheck="completed";
    }
    if(timercheck=="completed"||answerholder=="set")
    {
        timercheck="";
        answerholder="";
        updatecanvas();
    }
    
    
}
function updatecanvas(){
background("white");
randomnumber=Math.floor((Math.random()*array.length)+1);
sketch=array[randomnumber];
document.getElementById("sketchname").innerHTML="Sketch to be drawn= "+sketch;
}