let cardsNumber=0;        //declarando o numero de cartas
let rounds=0;       //variavel para guardar o numero de jogadas
let gamecard = [];
let card = [];      //array da div das cartas
const cardPictures = ["charlie","linus","lucy","paty","sally","snoopy","woodstock"];
const picturesSorted = [];
let cardSelected = [];
let hits = 0;

function gameInit(){
    let cardsNumber = parseInt(prompt("Com quantas cartas deseja jogar?"));
    if (cardsNumber%2 !== 0 || cardsNumber < 4 || cardsNumber > 14){        //se num de cartas for impar ou > que 14 ou < que 4 
        gameInit();                                                         //a função se chama repetindo a pergunta, dá pra usar while também 
    }else{
        gameStart(cardsNumber);                                             //se tudo ok começa o jogo
    }    
}

function gameStart(cardsNumber){
    
    for (let i=0; i < cardsNumber/2; i++){      //cria uma array de imagens
        picturesSorted[i] = cardPictures[i];      //com as imagens disponiveis
    }
    for (let i=0; i < cardsNumber/2; i++){      //duplica a array para ter 
        picturesSorted.push(cardPictures[i]);     //duas cartas iguas na array
    }    
    picturesSorted.sort(comparator);              //embaralha essa array
    const game = document.querySelector('.card-box');
    game.innerHTML = '';

    for(let i=0; i < cardsNumber; i++){                  
        game.innerHTML += `<div class="card"><div class="front-card hidden"><img src="Midia/${picturesSorted[i]}.png"></div><div class="back-card visible" onclick="turnCard(this)"><img src="Midia/back.png"></div></div>`
    }    
    } 

function comparator(){
    return Math.random() - 0.5;
}

function turnCard(element){ 
    element.classList.replace('visible','hidden');
    const parent = element.parentNode;
    const cardId = parent.firstChild;
    cardId.classList.replace('hidden','visible');
    cardSelected.push(parent);
    rounds++;
    
    if(cardSelected.length === 2){                  
        cardAnalise(cardSelected[0], cardSelected[1]);
        cardSelected = [];                 
    }}

function cardAnalise(card1, card2){
    
    pictureCard1 = card1.firstChild.innerHTML;    
    pictureCard2 = card2.firstChild.innerHTML;
    
    if(pictureCard1 === pictureCard2){
        hits = hits + 2;
        console.log(hits);
        verifyGame();
    }else{  
        setTimeout(setWrongcard, 1000);
        function setWrongcard(){
        card1.firstChild.classList.replace('visible','hidden');
        card2.firstChild.classList.replace('visible','hidden');
        card1.lastChild.classList.replace('hidden','visible');
        card2.lastChild.classList.replace('hidden','visible');
        }
    }
}
function verifyGame(){
    setTimeout(finalGame, 1000);
        function finalGame(){   

    if(hits === picturesSorted.length){
        const gameChoice = prompt("Você ganhou em " + rounds/2 + " rodadas quer jogar de novo? S ou N?");
        if(gameChoice === "S"){
            gameInit();
        }else{
            alert("Tu joga e faz bootcamp? Tu é bixão memo hein!")
        }

    }
        }
}

gameInit();
