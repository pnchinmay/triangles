var quizForm = document.querySelector(".quiz-form");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");
 
var correctAnswers = ["90°","No","Yes","Scalene","60°"]

btn.addEventListener("click", calculateScore)

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;
    }

    output.innerText = " Your score is: " + score;
}

