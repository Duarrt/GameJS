const canvas = document.querySelector('canvas');
const button = document.querySelector('input');
const c = canvas.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight

class Sprite {
    constructor({position, velocity}) {
        this.position = position;
        this.velocity = velocity;
    }

    drawSpritePlayer() {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, 30, 50);
    }

    updatePlayer() {
        this.drawSpritePlayer();
        this.position.x += 5;
        
    }

    drawSpriteEnemy() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 30, 80);
    }

    updateEnemy() {
        this.drawSpriteEnemy();
        this.position.x -= 5;
        this.velocity.y -= 10;
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

console.log(player);

function animate(){
    window.requestAnimationFrame(animate);
    player.updatePlayer();
    enemy.updateEnemy();

    if((enemy.position.x == player.position.x) && (enemy.position.y == player.position.y)){
        console.log("PERDEU");
    }
    
}

function play() {
    if (button.value == 'Jogar!') {
        animate();
        button.value = 'Parar!';
    } else {
        button.value = 'Jogar!';
    }
}   