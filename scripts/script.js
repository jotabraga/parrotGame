let cardsNumber;        //declarando o numero de cartas
let rounds=0;             //variavel para guardar o numero de jogadas
let card = [];            //array da div das cartas
const cardPictures = ["charlie","linus","lucy","paty","sally","snoopy","woodstock"];
let picturesSorted = [];
let cardSelected = [];
let hits = 0;
let interval;

function gameInit(){
    let cardsNumber = parseInt(prompt("Com quantas cartas deseja jogar?"));
    if (cardsNumber%2 !== 0 || cardsNumber < 4 || cardsNumber > 14){        //se num de cartas for impar ou > que 14 ou < que 4 
        gameInit();                                                         //a função se chama repetindo a pergunta, dá pra usar while também 
    }else{                                                                  //se tudo ok começa o jogo
        gameStart(cardsNumber);  
        countTime();                                                        
    }    
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function gameStart(cardsNumber){      
    for (let i=0; i < cardsNumber/2; i++){             //cria uma array de imagens
        picturesSorted[i] = cardPictures[i];           //com as imagens disponiveis
    }   
    for (let i=0; i < cardsNumber/2; i++){             //duplica a array para ter 
        picturesSorted.push(cardPictures[i]);          //duas cartas iguas na array
    }    
    picturesSorted.sort(comparator);                   //embaralha essa array
    const game = document.querySelector('.card-box');  //encontra a div que irá conter as cartas
    game.innerHTML = '';                               //inicia o conteudo da div com nada

    for(let i=0; i < cardsNumber; i++){                //add a div de cartas respeitando o numero de cartas solicitado pelo user            
        game.innerHTML += `<div class="card"><div class="front-card hidden"><img src="Midia/${picturesSorted[i]}.png"></div><div class="back-card visible" onclick="turnCard(this)"><img src="Midia/back.png"></div></div>`}    
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function countTime(){
   let timer = 0;
   interval=setInterval(incrementCount, 1000);
   function incrementCount(){
   timer++;
   const timeIn = document.querySelector('.clock');
   timeIn.innerHTML = '';
   timeIn.innerHTML += timer;}
} 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function comparator(){
    return Math.random() - 0.5;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function turnCard(element){ 
    element.classList.replace('visible','hidden');
    const parent = element.parentNode;
    parent.classList.add('flip');
    const cardId = parent.firstChild;
    cardId.classList.replace('hidden','visible');
    cardSelected.push(parent);
    rounds++;
   
    if(cardSelected.length === 2){                  
        cardAnalise(cardSelected[0], cardSelected[1]);
        cardSelected = [];                 
    }}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
        card1.classList.remove('flip');
        card2.classList.remove('flip');
        card1.firstChild.classList.replace('visible','hidden');
        card2.firstChild.classList.replace('visible','hidden');
        card1.lastChild.classList.replace('hidden','visible');
        card2.lastChild.classList.replace('hidden','visible');
        }
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function verifyGame(){
    setTimeout(finalGame, 1000);
        function finalGame(){   
        if(hits === picturesSorted.length){
            const gameChoice = prompt("Você ganhou em " + rounds/2 + " rodadas quer jogar de novo? S ou N?");
            if(gameChoice === "S"){
                picturesSorted.length = 0;
                hits = 0;
                clearInterval(interval);
                gameInit();                
            }else{
                clearInterval(interval);            
            }
        }
        }   
}
gameInit();
