var triangleInput = document.querySelectorAll(".triangle");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");

function sums (b,h) {
    var baseHeight = b*h/2;
    return baseHeight
}

function calculating (){
    var finalAnswer = sums(Number(triangleInput[0].value), Number(triangleInput[1].value))

    output.innerHTML = "The are of triangle is " + finalAnswer.toFixed(2) + " units²"
}




btn.addEventListener("click", calculating);


