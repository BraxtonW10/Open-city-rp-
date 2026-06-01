class Player{

constructor(){

this.x = 400;
this.y = 300;

this.width = 30;
this.height = 30;

this.speed = 4;

this.health = 100;
this.money = 500;

this.inVehicle = false;
this.vehicle = null;

}

move(keys){

if(this.inVehicle) return;

if(keys["w"]) this.y -= this.speed;
if(keys["s"]) this.y += this.speed;
if(keys["a"]) this.x -= this.speed;
if(keys["d"]) this.x += this.speed;

}

draw(ctx){

if(this.inVehicle) return;

ctx.fillStyle = "cyan";

ctx.fillRect(
this.x,
this.y,
this.width,
this.height
);

}

}

const player = new Player();
