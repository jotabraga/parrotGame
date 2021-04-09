let cardsNumber;        //declarando o numero de cartas
let rounds=0;       //variavel para guardar o numero de jogadas
let gamecard = [];
let card = [];      //array da div das cartas
const cardPictures = ["charlie","linus","lucy","paty","sally","snoopy","woodstock","back"];
let cardSelected = [];

function gameInit(){
    const cardsNumber = parseInt(prompt("Com quantas cartas deseja jogar?"));
    if (cardsNumber%2 !== 0 || cardsNumber < 4 || cardsNumber > 14){        //se num de cartas for impar ou > que 14 ou < que 4 
        gameInit();                                                         //a função se chama repetindo a pergunta, dá pra usar while também 
    }else{
        gameStart(cardsNumber);                                             //se tudo ok começa o jogo
    }    
}

function gameStart(cardsNumber){                                        //inicio de jogo com a criação das cartas

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
 
    element.classList.replace('visible','hidden');
    const parent = element.parentNode;
    const cardId = parent.firstChild;
    cardId.classList.replace('hidden','visible');
    cardSelected.push(parent);
    console.log(cardSelected);
    rounds++;
    
    if(cardSelected.length === 2){               
        cardAnalise(cardSelected[0],cardSelected[1]);
        cardSelected = [];        
    }
    }

function cardAnalise(card1, card2){
    alert("teste");
    pictureCard1 = card1.innerHTML;
    console.log(pictureCard1);
    pictureCard2 = card2.innerHTML;
    console.log(firstImg);
    secondImg = card2.firstChild;
}


function cardAnalise(cardShow){


}
  



gameInit();
