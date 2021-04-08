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

    const game = document.querySelector('.card-box');
    game.innerHTML = '';

    for(let i=0, j=0; i < cardsNumber; i++){              
        if(i%2 === 0 && i !== 0){
            j++;                
        }   
        console.log(gamecard[i]);               
        game.innerHTML += `<div class="card${i}"><div class="front-card"><img src="Midia/${cardPictures[j]}.png"></div><div class="back-card" onclick="turnCard(this)"><img src="Midia/${cardPictures[7]}.png"></div></div>`
    }
    for(let k=0; k < cardsNumber; k++){
        gamecard[k] = document.querySelector(`.card${k}`);
    }
    gamecard.sort(comparator);
    }

    

function comparator(){
    return Math.random() - 0.5;
}

function turnCard(element){    
    const parent = element.parentNode;
    const brother = parent.firstChild;
    console.log(parent);
}
  //  this.classList.add('hidden');
   // rounds++;                                               //função para virar a carta e ver se a proxima é igual ou diferente



gameInit();
