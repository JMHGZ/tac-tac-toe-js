
const winCombos = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const player = 1;
const msgEl = document.getElementById('msg');
const resetGame = document.getElementById('reset');
const grid = () => Array.from(document.getElementsByClassName('tile'));

let tNumId = (tEl) => Number.parseInt(tEl.id.replace('t', ''));

// function brdClick(evt) {
//     if (player == 1) {
//         document.getElementById(tNumId).value = 'X'; document.getElementById(tNumId).diabled = "disabled";
//         player -= 1;
//     } else { document.getElementById(tNumId).value = 'O'; document.getElementById(tNumId).disabled = "disabled";
//     player += 1;
//     }
// }

let playerTurn = (index, letter) => grid()[index].innerText = letter;
let opponentTurn = (index, letter) => grid()[index].innerText = letter;


let brdClick = (evt) => {
    playerTurn(tNumId(evt.target), 'X') 
 
     opponentTurn(tNumId(evt.target), 'O');
};

grid.resetGame = () => this.reset();

// let resetGame = (index) => grid()[index].innerHTML = `<div></div>`;

// function resetGame() {
//     grid()[index].innerHTML = `
//     <div>' '</div>`;
// }

const enableListeners = () => grid().forEach(_tEl => _tEl.addEventListener('click', brdClick));
reset.addEventListener('click', resetGame);
enableListeners();