var mysteriousWord = new String();
var index = 0;
var myWord = new String();

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

document.getElementById("enter").onclick = function() {
    var letter = document.getElementById("input2").value; 
    for (var i = 0; i < myWord.length; ++i) {
        if (myWord[i] == letter) {
            alert(mysteriousWord.replaceAt(i + 1, letter));
        }
    }
    alert(mysteriousWord);
    var li = "<li>" + mysteriousWord + "</li>";
    document.getElementById("list").innerHTML += li;
    document.getElementById("input2").value = "";
}
