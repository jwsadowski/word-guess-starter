var startBtn = document.querySelector(".start-button");
var wordBlanksEl = document.querySelector(".word-blanks")

var words = ["javascript", "variable", "object", "python", "local storage", "timeout", "interval"]
var word = 

var validChars = 'abcdefghijklmnopqrstuvwxyz'

var guessedCharacters = []

var score = 0

var wordFromDom 

function checkWord() {
    var wordFromDom = wordBlanksEl.textContent.split(' ').join(' ')
}

function handleKeydown(event) {
    console.log(event.key)
    if (validChars.includes(event.key)) {
        guessedCharacters.push(event.key) 
        renderChars()
    }
}


function renderChars() {
    console.log(word);
    var str = ""
    for (var i = 0; i < word.length; i++) {
    var letter = word[i]   
        if (guessedCharacters.includes(letter))
        str += letter + " "
        else {
            str += " "
        }
    }
} 

wordBlanksEl.textContent = str.trim();
checkWord()

function startRound() {
    var RandomWord = Math.floor( (Math.random) * words.length) 
    console.log(randomIndex) 
    var word = words[randomIndex]
    renderChars()
}

startBtn.addEventListener('click', startRound); 
document.addEventListener('keydown', handleKeydown); {
    console.log()
}

