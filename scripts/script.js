let cardsNumber;                                                        //declarando o numero de cartas
let rounds;
let gamecard = [];
const cardPictures = ["charlie","linus","lucy","paty","sally","snoopy","woodstock","back"];

function gameInit(){
    const cardsNumber = parseInt(prompt("Com quantas cartas deseja jogar?"));
    if (cardsNumber%2 !== 0 || cardsNumber < 4 || cardsNumber > 14){     //se num de cartas for impar ou > que 14 ou < que 4 
        gameInit();                                                     //a função se chama repetindo a pergunta, dá pra usar while também 
    }else{
        gameStart(cardsNumber);
    }    
}

function gameStart(cardsNumber){                                        //inicio de jogo com a criação das cartas

    const game = document.querySelector('.card-box');
    game.innerHTML = '';

    for(let i=0, j=0; i < cardsNumber; i++){              
            if(i%2 === 0 && i !== 0){
            j++;                
            }                  
            game.innerHTML += `<div class="${gamecard[i]}"><div class="front-card"><img src="Midia/${cardPictures[j]}.png"></div><div class="back-card" onclick="turncard(this)"><img src="Midia/${cardPictures[7]}.png"></div></div>`
    }
    const gamesorted = document.querySelectorAll('.gamecard');
    gamesorted.sort(comparator);
    }

function comparator(){
    return Math.random() - 0.5;
}
    


function turnCard(){                                                    //função para virar a carta e ver se a proxima é igual ou diferente

}

gameInit();
