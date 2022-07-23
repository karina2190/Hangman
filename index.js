var mysteriousWord = new String();
var index = 0;
var myWord = new String();
var mistakes = 0;
const wordLetters = [];
var letterIndex = 0;

document.getElementById("add").onclick = function() {
    if (index == 0) {
        var text = document.getElementById("input").value; 
        myWord = text;
        for (var i = 0; i < text.length; ++i) {
            mysteriousWord += '_';
            mysteriousWord += " ";
        }
        document.getElementById("paragraph").innerHTML = mysteriousWord;
    }
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

document.getElementById("enter").onclick = function() {
    let letter = document.getElementById("input2").value;
    var letterInsideArray = 0;
    for (var i = 0; i < letterIndex; ++i) {
        if (letter.localeCompare(wordLetters[i]) == 0) {
            letterInsideArray = 1;
        }
    }
    if (letterInsideArray == 0 && letter.length == 1) {
        wordLetters[letterIndex] = letter;
        ++letterIndex;
        document.getElementById("letters").innerHTML = 'These are the letters you used: ' + wordLetters;
    }
    if (mistakes < 8) {
        var foundLetter = 0;
        if (letter != "" && letter.length == 1) {
            for (var i = 0; i < myWord.length; ++i) {
                if (myWord[i].localeCompare(letter) == 0) {
                    foundLetter = 1;
                    mysteriousWord = mysteriousWord.replaceAt(i * 2, letter);
                }
            }
            if (foundLetter == 0) {
                document.getElementById("input2").value = "";
                ++mistakes;
                changeImage(mistakes);
            } else {
                document.getElementById("paragraph").innerHTML = mysteriousWord;
                document.getElementById("input2").value = "";
                var isThisTheWord = 1;
                for (var i = 0; i < myWord.length; ++i) {
                    if (mysteriousWord[i * 2].localeCompare(myWord[i]) != 0) {
                        isThisTheWord = 0;
                    }
                }
                if (isThisTheWord) {
                    alert('Congratulations!');
                }
            }
        } else if (letter.length > 1) {
            var correctWord= 1;
            for (var i = 0; i < myWord.length; ++i) {
                if (letter[i].localeCompare(myWord[i]) != 0) {
                    alert
                    correctWord = 0;
                }
            }
            if (correctWord) {
                alert('Congratulations!');
                document.getElementById("paragraph").innerHTML = myWord;
                document.getElementById("input2").value = "";
            } else {
                mistakes = 7;
                changeImage(mistakes);
            }
        }
    }
}

function changeImage(mistakes) {
    if (mistakes == 1) {
        document.getElementById("imgClickAndChange").src = "second.jpg";
    } else if (mistakes == 2) {
        document.getElementById("imgClickAndChange").src = "third.jpg";
    } else if (mistakes == 3) {
        document.getElementById("imgClickAndChange").src = "four.jpg";
    } else if (mistakes == 4) {
        document.getElementById("imgClickAndChange").src = "five.jpg";
    } else if (mistakes == 5) {
        document.getElementById("imgClickAndChange").src = "six.jpg";
    } else if (mistakes == 6) {
        document.getElementById("imgClickAndChange").src = "seven.jpg";
    } else if (mistakes == 7) {
        document.getElementById("imgClickAndChange").src = "eight.jpg";
        alert('You lost!');
        document.getElementById("paragraph").innerHTML = myWord + ' - this was your word...';
        document.getElementById("input2").value = "";
    }
}
