const canvas =
document.getElementById("gameCanvas");

const ctx =
canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const keys={};

document.addEventListener("keydown",e=>{

keys[e.key.toLowerCase()]=true;

if(e.key==="e"){

vehicles.forEach(car=>{

let dx=player.x-car.x;
let dy=player.y-car.y;

if(Math.hypot(dx,dy)<80){

player.inVehicle=true;
player.vehicle=car;

}

});

}

if(e.key==="q"){

player.inVehicle=false;
player.vehicle=null;

}

if(e.key==="p"){

saveGame();

}

});

document.addEventListener("keyup",e=>{

keys[e.key.toLowerCase()]=false;

});

loadGame();

function drawMap(){

ctx.fillStyle="#3b7d3b";

ctx.fillRect(
0,
0,
3000,
3000
);

for(let i=0;i<3000;i+=200){

ctx.fillStyle="#555";

ctx.fillRect(i,0,60,3000);

ctx.fillRect(0,i,3000,60);

}

}

function gameLoop(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

ctx.save();

ctx.translate(
canvas.width/2-player.x,
canvas.height/2-player.y
);

drawMap();

vehicles.forEach(v=>{

v.update();
v.draw(ctx);

});

npcs.forEach(n=>{

n.update();
n.draw(ctx);

});

player.move(keys);
player.draw(ctx);

ctx.restore();

updatePolice();
checkMissions();
updateUI();

requestAnimationFrame(
gameLoop
);

}

gameLoop();
