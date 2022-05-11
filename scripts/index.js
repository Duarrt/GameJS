const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const fps = 30;

setInterval(animate, 1000 / fps);

canvas.width = innerWidth
canvas.height = innerHeight

class Sprite {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
    }

    drawSpritePlayer() {
        context.fillStyle = 'blue';
        context.fillRect(this.position.x, this.position.y, 30, 50);
    }

    updatePlayer() {
        this.drawSpritePlayer();
        
        // this.position.x += 5;
        
    }

    drawSpriteEnemy() {
        context.fillStyle = 'red';
        context.fillRect(this.position.x, this.position.y, 30, 80);
    }

    updateEnemy() {
        this.drawSpriteEnemy();
        this.position.x -= 1;
        this.velocity.x -= 0;
    }
}
const player = new Sprite({
   position: {
    x: 100,
    y: 200
   },
   velocity: {
       x: 0,
       y: 0
   }
});

const enemy = new Sprite({
    position: {
     x: innerWidth,
     y: Math.random() * (0, 500)
    },
    velocity: {
        x: 0,
        y: 0
    }
 });

function animate(){
    window.requestAnimationFrame(animate);
    player.updatePlayer();
    enemy.updateEnemy();
    
    if((enemy.position == player.position) || (enemy.position.y == player.position.y)){
        console.log("PERDEU");
    }

}

animate();
 