let cardsNumber;        //declarando o numero de cartas
let rounds=0;       //variavel para guardar o numero de jogadas
let gamecard = [];      //array da div das cartas
const cardPictures = ["charlie","linus","lucy","paty","sally","snoopy","woodstock","back"];

function gameInit(){
    const cardsNumber = parseInt(prompt("Com quantas cartas deseja jogar?"));
    if (cardsNumber%2 !== 0 || cardsNumber < 4 || cardsNumber > 14){        //se num de cartas for impar ou > que 14 ou < que 4 
        gameInit();                                                         //a função se chama repetindo a pergunta, dá pra usar while também 
    }else{
        gameStart(cardsNumber);                                             //se tudo ok começa o jogo
    }    
}

function gameStart(cardsNumber){                                        //inicio de jogo com a criação das cartas

    for(let k=0; k < cardsNumber; k++){
        gamecard[k] = document.querySelector(`.card${k}`);
    }

    gamecard.sort(comparator);
    const game = document.querySelector('.card-box');
    game.innerHTML = '';

    for(let i=0, j=0; i < cardsNumber; i++){              
        if(i%2 === 0 && i !== 0){
            j++;                
        }                
        game.innerHTML += `<div class="card"><div class="front-card hidden"><img src="Midia/${cardPictures[j]}.png"></div><div class="back-card visible" onclick="turnCard(this)"><img src="Midia/${cardPictures[7]}.png"></div></div>`
    }    
    }   
function comparator(){
    return Math.random() - 0.5;
}
function turnCard(element){  
    let pair;    
    element.classList.replace('visible','hidden');
    const parent = element.parentNode;
    const cartId = parent.firstChild;
    cartId.classList.replace('hidden','visible');
    pair++;
    if (pair%2 === 0){
        cardAnalise();
    }
}
  //  this.classList.add('hidden');
   // rounds++;                                               //função para virar a carta e ver se a proxima é igual ou diferente



gameInit();
