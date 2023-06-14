//////////////////////////
////// SCORE KEEPER //////
//////////////////////////

let button1 = document.querySelector("#ctr1");
let player1 = document.querySelector("#score1");
let score1 = 0;

let button2 = document.querySelector("#ctr2");
let player2 = document.querySelector("#score2");
let score2 = 0;

let reset = document.querySelector("#reset");
let winner = document.querySelector("#winner");

button1.addEventListener("click",function(){

  let limit = document.querySelector("#limit").value;
  score1++;
  player1.textContent = score1;

  if(score1 == limit || (score1>score2 && score1>limit)){
    player1.classList.add("green");
    button1.setAttribute("disabled","true");
    button2.setAttribute("disabled","true");

    printWinner();
  }
});

button2.addEventListener("click",function(){

  let limit = document.querySelector("#limit").value;
  score2++;
  player2.textContent = score2;

  if(score2 == limit || (score2>score1 && score2>limit)){
    player2.classList.add("green");
    button1.setAttribute("disabled","true");
    button2.setAttribute("disabled","true");

    printWinner();
  }
});

reset.addEventListener("click",function(){

  button1.removeAttribute("disabled");
  button2.removeAttribute("disabled");

  player1.classList.remove("green");
  player2.classList.remove("green");

  score1= 0;
  score2 = 0;

  player1.textContent = score1;
  player2.textContent = score2;

  document.querySelector("#limit").value = 5;

  winner.textContent = "";
});

function printWinner(){

if(score1>score2){

  winner.textContent = "Le joueur 1";
}
else
{
  winner.textContent = "Le joueur 2";
}};