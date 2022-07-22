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
            //mysteriousWord += " ";
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
    if (mistakes < 7) {
        var ok = 0;
        if (letter != "" && letter.length == 1) {
            for (var i = 0; i < myWord.length; ++i) {
                if (myWord[i].localeCompare(letter) == 0) {
                    ok = 1;
                    mysteriousWord = mysteriousWord.replaceAt(i, letter);
                }
            }
            if (ok == 0) {
                ++mistakes;
            }
            var li = "<li>" + mysteriousWord + "</li>";
            document.getElementById("list").innerHTML += li;
            document.getElementById("input2").value = "";
            if (mysteriousWord.localeCompare(myWord) == 0) {
                alert('You win!');
            }
        }
    } else {
        alert('You lost!');
    }
}


