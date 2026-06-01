function saveGame(){

const data={

x:player.x,
y:player.y,
money:player.money,
health:player.health

};

localStorage.setItem(
"gtaSave",
JSON.stringify(data)
);

}

function loadGame(){

const data=
JSON.parse(
localStorage.getItem("gtaSave")
);

if(!data) return;

player.x=data.x;
player.y=data.y;
player.money=data.money;
player.health=data.health;

}
