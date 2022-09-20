var startBtn = document.querySelector(".start-button");
var wordBlanksEl = document.querySelector(".word-blanks")

var words = ["javascript", "variable", "object", "python", "local storage", "timeout", "interval"]
var word = 


function renderChars() {
    console.log(word);
    var str = ""
    for (var i = 0; i < word.length; i++) {
        str += "_"
        console.log(str);
    }
} 

wordBlanksEl.textContent = str.trim();

function startRound() {
    var RandomWord = Math.floor( (Math.random) * words.length) 
    console.log(randomIndex) 
    var word = words[randomIndex]
    renderChars()
}

startBtn.addEventListener('click', startRound); 

