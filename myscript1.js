//Math flashcards   
function addition() {
    var ouranswer = document.getElementById("answer").value;
    if (isNaN(ouranswer)){
      document.getElementById("outputadd").innerHTML = 'Is not a number'  
    }
    else if ((num1 + num2) == ouranswer) {
    document.getElementById("outputadd").innerHTML = 'Correct Answer'
    }
    else {
    document.getElementById("outputadd").innerHTML = 'Wrong Answer'
    }
}

function reset() {
    document.getElementById("outputadd").innerHTML = ""
    document.getElementById("answer").value = ""
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("demo").innerHTML = num1 + " + " + num2;
}