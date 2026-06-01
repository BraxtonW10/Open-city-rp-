class NPC{

constructor(x,y){

this.x=x;
this.y=y;

this.size=25;

this.direction=Math.random()*4;

}

update(){

switch(Math.floor(this.direction)){

case 0:
this.x+=1;
break;

case 1:
this.x-=1;
break;

case 2:
this.y+=1;
break;

case 3:
this.y-=1;
break;

}

if(Math.random()<0.01){
this.direction=Math.random()*4;
}

}

draw(ctx){

ctx.fillStyle="orange";

ctx.fillRect(
this.x,
this.y,
this.size,
this.size
);

}

}

const npcs=[];

for(let i=0;i<50;i++){

npcs.push(
new NPC(
Math.random()*3000,
Math.random()*3000
)
);

}
