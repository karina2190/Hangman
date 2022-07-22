var mysteriousWord = new String();
var index = 0;
var myWord = new String();
var mistakes = 0;

document.getElementById("add").onclick = function() {
    if (index == 0) {
        var text = document.getElementById("input").value; 
        myWord = text;
        for (var i = 0; i < text.length; ++i) {
            mysteriousWord += '_';
            mysteriousWord += " ";
        }
        var li = "<li>" + mysteriousWord + "</li>";
        document.getElementById("list").innerHTML += li;
        document.getElementById("input").value = ""; 
        ++index;
    }
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

document.getElementById("enter").onclick = function() {
    let letter = document.getElementById("input2").value;
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
                var li = "<li>" + mysteriousWord + "</li>";
                document.getElementById("list").innerHTML += li;
                document.getElementById("input2").value = "";
                var isThisTheWord = 1;
                for (var i = 0; i < myWord.length; ++i) {
                    if (mysteriousWord[i * 2].localeCompare(myWord[i]) != 0) {
                        isThisTheWord = 0;
                    }
                }
                if (isThisTheWord) {
                    alert('You win!');
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
                alert('You win!');
                var li = "<li>" + myWord+ "</li>";
                document.getElementById("list").innerHTML += li;
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
        var li = "<li>" + myWord + ' - this was your word...' + "</li>";
        document.getElementById("list").innerHTML += li;
        document.getElementById("input2").value = "";
    }
}
