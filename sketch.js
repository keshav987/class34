var snow1,snow2,snow3;
function preload(){
   snow1=loadImage("snow3.jpg");
  snow3=loadImage("snow4.webp");
}
function setup() {
  createCanvas(800,400);
  snow2 = new Snow();

}

function draw() {
  background(snow1); 




  drawSprites();

snow2.display();



}