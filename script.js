var words = ['challenge', 'javascript', 'function', 'creativity'];


var timer = document.querySelector('#time');
var score = document.querySelector('#score');
var wins = document.querySelector('#wins');
var losses = document.querySelector('#losses');
var button = document.querySelector('#button');
var charInput = document.querySelector('#charInput');

button.addEventListener('click', startGame);

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

function startGame() {
    // create timer to count down
    var counter = 30;
    var timeStart = setInterval(() => {
        if (counter > 0) {
            counter--;
            timer.textContent = counter;
        } else {
            clearInterval(timeStart);
            alert('Game Over!!');
        }
    }, 1000);

    //start coding word input 
    //function to pick words randomly
    wordPicked = words[Math.floor(Math.random() * words.length)];
    // log word into h2
    charInput.textContent = wordPicked;
    document.addEventListener('keydown', function(event) {
        for (var i = 0; i < wordPicked.length; i++) {
            if (wordPicked.includes(event.key), i) //checking if specific letter is what got pressed for every letter in the string
            {
               undescore = setCharAt(underscore, i, event.key);
            }
        }

        charInput.textContent = underscore;
    });

    var underscore = "";

    for (var i = 0; i < wordPicked.length; i++) {
        underscore += '_ ';
    };
    underscore = underscore.trim();
    //replace characters with underscore to hide value
    charInput.textContent = underscore;


    

    




}

