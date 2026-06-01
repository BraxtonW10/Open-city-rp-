const missions=[

{
name:"Drive Across City",
reward:500,
completed:false
},

{
name:"Reach Downtown",
reward:1000,
completed:false
}

];

function checkMissions(){

if(player.x>1500 && !missions[0].completed){

missions[0].completed=true;

player.money+=missions[0].reward;

}

}
