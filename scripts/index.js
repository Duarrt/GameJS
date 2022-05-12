const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//setting up images
var background = new Image();
var bird = new Image();
var obstacleTop = new Image();
var obstacleBottom = new Image();
var ground = new Image();

background.src="styles/images/background.jpg";
bird.src="styles/images/bird.png";
obstacleTop.src="styles/images/obsTop.png";
obstacleBottom.src="styles/images/obsBottom.png";
ground.src="styles/images/ground.png";

//variables
var gap = 105;
var spaceBetween = obstacleTop.height + gap;
var score = 0;

var bX = 10;
var bY = 100;
var gravity = 1.4;

var obs = [];
obs[0]={
    x: canvas.width,
    y: Math.floor(Math.random() * obstacleTop.height) - obstacleTop.height
};

//moving up the bird
document.addEventListener("click", move);
document.addEventListener("keydown", move);

function move(){
    bY -= 38;
}

//drawing the objects sprites
function drawSprites() {
    context.drawImage(background, 0, 0);
    
    for(var i = 0; i < obs.length; i++) {
        context.drawImage(obstacleTop, obs[i].x, obs[i].y);
        context.drawImage(obstacleBottom, obs[i].x, obs[i].y + spaceBetween);

        obs[i].x--;

        if(obs[i].x == 125){
            obs.push({
                x: canvas.width,
                y: Math.floor(Math.random() * obstacleTop.height) - obstacleTop.height
            });
        };

        if(bX + bird.width >= obs[i].x && bX <= obs[i].x + obstacleTop.width && (bY <= obs[i].y + obstacleTop.height || bY + bird.height >= obs[i].y + spaceBetween) 
                || bY + bird.height >= canvas.height - ground.height){
            if(bY + bird.height >= canvas.height - ground.height) {
                context.drawImage(bird, bX, 375);
            }
            
            if(!alert("Pontuação: " + score + "\nClique para jogar novamente.")){
                obs.length = 0;
                window.location.reload();
            };
            // obs.length = 0;
            // window.location.reload();
        }

        if(obs[i].x == 5){
            score++;
        };
    };

    context.drawImage(ground, 0, canvas.height - ground.height);

    context.drawImage(bird, bX, bY);
    bY += gravity;
    
    context.fillStyle;
    context.font = "20px Verdana";
    context.fillText("Pontuação: " + score, 10, canvas.height-20);

    context.font = "10px Verdana";
    context.fillText("Desenvolvido por RRibeiro", 10, canvas.height-5);
    requestAnimationFrame(drawSprites);
}

drawSprites();