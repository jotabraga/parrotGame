let cardsNumber;        //declarando o numero de cartas
let rounds=0;             //variavel para guardar o numero de jogadas

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

function countTime(){
   let timer = 0;
   interval=setInterval(incrementCount, 1000);         //função relogio 
   function incrementCount(){                          //registra o tempo em segundos
   timer++;
   const timeIn = document.querySelector('.clock');
   timeIn.innerHTML = '';
   timeIn.innerHTML += timer;}
} 

function comparator(){                                 //função  para aleatorizar os indices de uma array    
    return Math.random() - 0.5;}

function turnCard(element){ 
    element.classList.replace('visible','hidden');    //pega o elemento clicado, no caso a carta virada e deixa o lado de tras invisivel
    const parent = element.parentNode;
    parent.classList.add('flip');                     //essa classe foi criada exclusivamente para fazer a animação de virada 3D
    const cardId = parent.firstChild;                 //pega o pai da div da carta que foi clicada e seleciona a primeira div do pai, no caso 
    cardId.classList.replace('hidden','visible');     //o lado da frente da carta clicada, e deixa esse lado visivel
    cardSelected.push(parent);                        //coloca a div pai numa array de 2 posições para comparar 2 cartas viradas
    rounds++;
   
    if(cardSelected.length === 2){                  
        cardAnalise(cardSelected[0], cardSelected[1]); //analisa as cartas viradas de 2 a 2
        cardSelected = [];                 
    }}

function cardAnalise(card1, card2){    
    pictureCard1 = card1.firstChild.innerHTML;      //pega o conteudo dentro da carta
    pictureCard2 = card2.firstChild.innerHTML;      //ou seja, pega a identificação de cada imagem dentro da carta

    if(pictureCard1 === pictureCard2){
        hits = hits + 2;                            //se for igual deixa virada e conta como 2 acertos
        console.log(hits);
        verifyGame();                               //toda vez que acerta verifica se todas foram viradas corretamente
    }else{  
        setTimeout(setWrongcard, 1000);
        function setWrongcard(){                    //se forem cartas diferentes desvira as cartas e retorna as condições iniciais antes do click
        card1.classList.remove('flip');
        card2.classList.remove('flip');
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
        if(hits === picturesSorted.length){           //quando o total de acertos for igual a quantidade de cartas no jogo o jogo acaba 
            const gameChoice = prompt("Você ganhou em " + rounds/2 + " rodadas quer jogar de novo? S ou N?");
            if(gameChoice === "S"){
                picturesSorted.length = 0;           //reseta para zero as variaveis para iniciar um novo jogo
                hits = 0;
                rounds = 0;
                clearInterval(interval);             //retorna o relogio pra zero segundos
                gameInit();                
            }else{
                clearInterval(interval);           //retorna o relogio pra zero segundos e trava a tela  
            }}
        }   
}
gameInit();
