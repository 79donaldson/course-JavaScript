// создание объектов

var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')
var $result = document.querySelector('#result')
var $timeHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')
var $gameTime = document.querySelector('#game-time')

var score = 0
var isGameStarted = false

$start.addEventListener('click', startGame)
$game.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)

// 2 функции показать и спрятать которые используются в функкциях 
// старт и конец игры

function show($el){
    $el.classList.remove('hide')
}

function hide($el){
    $el.classList.add('hide')
}

//начало игры

function startGame() {
    score = 0
    setGameTime()
    $gameTime.setAttribute('disabled', 'true')    
    isGameStarted = true
    $game.style.backgroundColor = '#fff'
    hide($start)

    var interval = setInterval(function(){
        var time = parseFloat($time.textContent)

        if (time <= 0) {
            clearInterval(interval)
            endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }        
    }, 100)

    renderBox()
}

function setGameScore() {
    $result.textContent = score.toString()
}

// установка таймера игры в секундах

function setGameTime(){
    var time = +$gameTime.value
    $time.textContent = time.toFixed(1)
    show($timeHeader)
    hide($resultHeader)
}

// конец игры по времени

function endGame(){
    isGameStarted = false
    setGameScore()
    $gameTime.removeAttribute('disabled')
    show($start)   
    $game.style.backgroundColor = '#ccc'
    $game.innerHTML = ''
    hide($timeHeader)
    show($resultHeader)
}

// отображение результатов по окончании игры

function handleBoxClick(event) {
    if (!isGameStarted){
        return
    }
    if (event.target.dataset.box) {
        score++
        renderBox()
    }
}

// генерация рандомных квадратиков

function renderBox () {    
   $game.innerHTML = ''   
   var box = document.createElement('div')
   var boxSize = getRandom(30, 100)
   var gameSize = $game.getBoundingClientRect()
   var maxTop = gameSize.height - boxSize
   var maxLeft = gameSize.width - boxSize
   var randomColor = getColor()   
   console.log(gameSize) 

   box.style.height = box.style.width = boxSize + 'px'
   box.style.position = 'absolute'
   box.style.backgroundColor = '#' + randomColor
   box.style.top = getRandom(0, maxTop) + 'px'
   box.style. left = getRandom(0, maxLeft) + 'px'
   box.style.cursor = 'pointer'
   box.setAttribute('data-box', 'true')


   $game.insertAdjacentElement('afterbegin', box)
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// функция которая окрашивает рандомные квадратики рандомными цветами

function getColor() {
        return Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase()
    //return '#' + ((1<<24)*Math.random()|0).toString(16)
    }



