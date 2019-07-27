
const winCombos = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const grid = () => Array.from(document.getElementsByClassName('tile'));
const brdClick = (evt) => console.log(evt.target);

const enableListeners = () => grid().forEach(_tEl => _tEl.addEventListener('click', brdClick));

enableListeners();

let board, turn, winner;



