let cardFlip = 0;
let card1 = null;
let card2 = null;
let result1 = null;
let result2 = null;
let player1 = document.getElementById("Jugador1")
let player2 = document.getElementById("Jugador2")

let array = ["😊", "😊", "💃🏻", "💃🏻", "💩", "💩", "🙈", "🙈", "🖤", "🖤", "👽", "👽", "😈", "😈", "🐼", "🐼", "🦄", "🦄", "🌴", "🌴"];

array = array.sort(() => { return Math.random() -0,5 })
function showCard(id) {
    cardFlip++;
    if (cardFlip == 1) {
        card1 = document.getElementById(id);
        result1 = array[id]
        card1.innerHTML = result1;
        card1.disabled = true;
    }
    else if (cardFlip == 2) {
        card2 = document.getElementById(id);
        result2 = array[id]
        card2.innerHTML = result2;
        card2.disabled = true;
        return comparar();
    }
}
function comparar() {
    if (result1 === result2) {
        card1.style.background = "rgb(156, 227, 143)";
        card2.style.background = "rgb(156, 227, 143)";
        card1.style.color = "white";
        card2.style.color = "white";
        cardFlip = 0;
        return sumPlayer();
    }
    else {
        card1.style.color = "white";
        card2.style.color = "white";
        card1.style.background = "rgb(227, 143, 143)";
        card2.style.background = "rgb(227, 143, 143)";
        setTimeout(() => {
            card1.innerHTML = " ";
            card2.innerHTML = " ";
            card1.style.background = "white";
            card2.style.background = "white";
            card1.style.color = "black";
            card2.style.color = "black";
            card1.disabled=false;
            card2.disabled=false;
            cardFlip = 0;
        }, 900);
        return switchTurn();
    }
}
let switchTurn = () => {
    let turn = document.getElementById("input-turn").innerText;
    if (turn === "Jugador 1") {
        document.getElementById("input-turn").innerHTML = "Jugador 2";
        return reset();
    }
    else if (turn === "Jugador 2") {
        document.getElementById("input-turn").innerHTML = "Jugador 1";
        return reset();
    }
}
function sumPlayer(){
    let turn = document.getElementById("input-turn").innerText;
    if (turn === "Jugador 1"){
        let result = parseFloat(player1.textContent);
        player1.textContent = result + 1;
    }
    if (turn === "Jugador 2"){
        let result = parseFloat(player2.textContent);
        player2.textContent = result + 1;
    }if(parseFloat(player1.textContent) + parseFloat(player2.textContent) === 10){
        return finalScore();
    }
}
function finalScore() {
    if(player1.textContent > player2.textContent){
       document.querySelector('.popup').classList.add('show-popup');
       document.getElementById("popup-player").innerHTML = "Ha ganado el Jugador 1!"
    }
    if(player2.textContent > player1.textContent){
        document.querySelector('.popup').classList.add('show-popup');
        document.getElementById("popup-player").innerHTML = "Ha ganado el Jugador 2!"
    }
    if(player2.textContent == player1.textContent){
        document.querySelector('.popup').classList.add('show-popup');
        document.getElementById("popup-player").innerHTML = "Empate!"
    }
}

function reset() {
    cardFlip = 0;
}

function restart() {
    let cardsArray = document.getElementsByClassName("card");
    document.getElementById("input-turn").innerHTML = "Jugador 1";
    document.querySelector('.popup').classList.remove('show-popup');
    player1.textContent = 0
    player2.textContent = 0
    for(let i = 0; i < cardsArray.length; i++){
        cardsArray[i].innerHTML = " ";
        cardsArray[i].style.background = "white"
        cardsArray[i].style.color = "black"
        cardsArray[i].disabled = false;
    }
    cardFlip = 0;
}