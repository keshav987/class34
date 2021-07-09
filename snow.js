class Snow{
    constructor(){
        this.image=loadImage("snow4.webp");
        
    }
    display(){
    if(frameCount % 10 === 0 ){
 var snowflake = createSprite(random(0,500),0,50,50)
 snowflake.velocityX=-2;
 snowflake.velocityY = 4; 
 snowflake.addImage(this.image)
 snowflake.scale = 0.1;

    }
    }
}