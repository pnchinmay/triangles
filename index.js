var inputs = document.querySelectorAll(".angle-input");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");



function isTriangle() {
    var sumOfangle = calculateTheSum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if (
        Number(inputs[0].value) > 0 &&
        Number(inputs[1].value) > 0 &&
        Number(inputs[2].value) > 0
    ) {
        if (sumOfangle === 180) {
            output.innerText = "Yahh!, The angles you entered form a triangle🤠🥳"
        } else {
            output.innerText = "Ohh!, The angles you enterd does not for a triangle🥴🤕"
        }
    } else {
        output.innerText = "Heyy! enter all the fields with postive values👿"
    }
}


function calculateTheSum(angle1, angle2, angle3) {
    var sumOfangle = angle1 + angle2 + angle3;
    return sumOfangle;
}





btn.addEventListener("click", isTriangle);