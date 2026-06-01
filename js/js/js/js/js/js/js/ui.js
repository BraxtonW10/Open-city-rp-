function updateUI(){

document.getElementById("health")
.textContent=
"Health: "+player.health;

document.getElementById("money")
.textContent=
"$"+player.money;

let stars="";

for(let i=0;i<wantedLevel;i++){
stars+="★";
}

for(let i=wantedLevel;i<5;i++){
stars+="☆";
}

document.getElementById("wanted")
.textContent=
"Wanted: "+stars;

}
