class Vehicle{

constructor(x,y,color){

this.x=x;
this.y=y;

this.width=60;
this.height=35;

this.color=color;

this.speed=0;

}

draw(ctx){

ctx.fillStyle=this.color;

ctx.fillRect(
this.x,
this.y,
this.width,
this.height
);

}

update(){

if(player.vehicle===this){

if(keys["w"]) this.y-=6;
if(keys["s"]) this.y+=6;
if(keys["a"]) this.x-=6;
if(keys["d"]) this.x+=6;

player.x=this.x+15;
player.y=this.y+5;

}

}

}

const vehicles=[
new Vehicle(600,300,"red"),
new Vehicle(900,400,"yellow"),
new Vehicle(1200,500,"lime")
];
