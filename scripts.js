var ballX;
var ballY;
var ballSpeedX;
var ballSpeedY;
var ballDiameter;
var paddleX;
var paddleY;
var paddleWidth;
var paddleHeight;
var counter;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    ballX = random(50,width-50);
    ballY = 50;
    ballSpeedX = random(-12,12);
    ballSpeedY = random(7,12);
    ballDiameter = 50;
    paddleWidth = 150;
    paddleHeight = 15;
    paddleX = width/2;
    paddleY = height-paddleHeight-30;
    counter = 0;
}

function draw(){
    background(0);
    fill(255);
    ellipse(ballX,ballY,ballDiameter);
    rect(paddleX,paddleY,paddleWidth,paddleHeight);
    textSize(24);
    text("Score: "+counter,25,25);
    ballX+= ballSpeedX;
    ballY+= ballSpeedY;
    // bounce top and bottom walls
    if (ballY-ballDiameter/2 <= 0 ){
        ballSpeedY *= -1;
    }
    // bounce side walls
    if (ballX-ballDiameter/2 <= 0 || ballX+ballDiameter/2 >= width){
        ballSpeedX *= -1;
    }

    // detect collision

    if (ballX+ballDiameter/2 >= paddleX && ballX-ballDiameter/2 <= paddleX+paddleWidth && ballY+ballDiameter/2 >= paddleY){
        ballSpeedY *= -1;
        counter++;
    }
    if (ballY+ballDiameter/2 >= height){
        background(0);
        textAlign(CENTER);
        textSize(24);
        text("Game Over. Your score is: "+counter, width/2, height/2);
        noLoop();
    }

}

function keyPressed(){
    if (keyCode == LEFT_ARROW){
        paddleX -= 75;
    }
    if (keyCode == RIGHT_ARROW){
        paddleX += 75;
    }

}
