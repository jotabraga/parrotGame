
function gameInit(){
    const cards = parseInt(prompt("Com quantas cartas deseja jogar?"));
    if (cards%2 !== 0 || cards < 4 || cards > 14){
        gameInit();
    }else{
        gameStart();
    }    
}

function gameStart(){
    alert("lets star modafucker");
}

gameInit();
