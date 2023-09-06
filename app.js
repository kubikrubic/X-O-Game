let moves, isGameOver, playerTurn
playerTurn = 'x'
moves = 0
isGameOver = false
let span = document.getElementsByTagName('span')
const reset = document.querySelector('#reset')
const restart = document.querySelector('#restart')
const alert = document.querySelector('.alert')
const won = document.querySelector('.won')
const full = document.querySelector('.full-screen')
const fullWon = document.querySelector('.full-screen-won')

function play(y) {
	if(y.dataset.player == 'none' && isGameOver == false) {
		moves++
		y.innerHTML = playerTurn
		y.dataset.player = playerTurn
		if (playerTurn == 'x') {
			playerTurn = 'o'
		} else if(playerTurn == 'o') {
			playerTurn = 'x'
		}
	}
	if (moves == 9 && isGameOver == false) {draw() }

	checkGame(1,2,3)
	checkGame(4,5,6)
	checkGame(7,8,9)
	checkGame(1,4,7)
	checkGame(2,5,8)
	checkGame(3,6,9)
	checkGame(1,5,9)
	checkGame(3,5,7)
}


function draw() {
	moves = 0
	alert.classList.add('dis-block')
	full.classList.add('dis-block')
}
reset.addEventListener('click', () => { 
	resetGame()
	alert.classList.remove('dis-block')
	full.classList.remove('dis-block')
})


function checkGame(a, b, c) {
	a--
	b-- 
	c--
	if((span[a].dataset.player === span[b].dataset.player) &&
	(span[a].dataset.player === span[c].dataset.player) &&
	(span[c].dataset.player === span[b].dataset.player) &&
	(span[a].dataset.player === 'x' || span[a].dataset.player === 'o') &&
	isGameOver == false) {
		moves = 0
		won.classList.add('dis-block')
		span[a].classList.add('activeBox')
		span[b].classList.add('activeBox')
		span[c].classList.add('activeBox')
		fullWon.classList.add('dis-block')
	}
	
}
restart.addEventListener('click', () => { 
	resetGame()
	won.classList.remove('dis-block')
	fullWon.classList.remove('dis-block')
	for (let i = 0; i < span.length; i++) {
		span[i].classList.remove('activeBox');
	}
})


function resetGame() {
	for (let i = 0; i < span.length; i++) {
		span[i].dataset.player = 'none'
		span[i].innerHTML = '&nbsp;'
	}
	playerTurn = 'x'
}
