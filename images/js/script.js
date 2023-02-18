// This function does all the housekeeping before the game starts

function gameLaunch() {
    document.getElementById("btn-plus").addEventListener("click", additionQuestion);
    document.getElementById("btn-minus").addEventListener("click", subtractionQuestion);
    document.getElementById("btn-submit").addEventListener("click", submitAnswer);

    additionQuestion();
}

function additionQuestion() {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;

    let question = `${a} + ${b}`;
    document.getElementById('question-holder').innerText = question;

    setStateofQuestionButtons(0);
    setStateofSubmitButton(1);
}

function subtractionQuestion() {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;

    while (b > a) {
        b = Math.floor(Math.random() * 20) + 1;
    }

    let question = `${a} - ${b}`;
    document.getElementById('question-holder').innerText = question;

    setStateofQuestionButtons(0);
    setStateofSubmitButton(1);
}



function submitAnswer() {
    let question = document.getElementById("question-holder").innerText;
    let answer = document.getElementById("answer-holder").value;

    if (question.includes("+")) {
        let operands = question.split("+");
        let a = operands[0];
        let b = operands[1];
        let isAnswerCorrect = (parseInt(a) + parseInt(b)) == answer;

        if (isAnswerCorrect) {
            alert("Well done!!!");
            increaseCorrect();
        } else {
            alert(`Sorry the right answer is ${(parseInt(a) + parseInt(b))}!`);
            increaseWrong();
        }

    } else if (question.includes("-")) {
        let operands = question.split("-");
        let a = operands[0];
        let b = operands[1];
        let isAnswerCorrect = (parseInt(a) - parseInt(b)) == answer;

        if (isAnswerCorrect) {
            alert("Well done!!!");
            increaseCorrect();
        } else {
            alert(`Sorry the right answer is ${(parseInt(a) - parseInt(b))}!`);;
            increaseWrong();
        }
    }

    setStateofSubmitButton(0);
    setStateofQuestionButtons(1);

}


function increaseCorrect() {
    let correct = document.getElementById("correct-score").innerText;
    correct++;
    document.getElementById("correct-score").innerText = correct;
}

function increaseWrong() {
    let correct = document.getElementById("wrong-score").innerText;
    correct++;
    document.getElementById("wrong-score").innerText = correct;
}

//Code for Button activation and Disabling

function setStateofQuestionButtons(state) {
    plusButton = document.getElementById("btn-plus");
    minusButton = document.getElementById("btn-minus");

    if (state == 1) {
        plusButton.disabled = false;
        minusButton.disabled = false;
    } else {
        plusButton.disabled = true;
        minusButton.disabled = true;
    }
}

function setStateofSubmitButton(state) {
    submitButton = document.getElementById("btn-submit");

    if (state == 1) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function setAnswerHolder(state) {
    submitButton = document.getElementById("btn-submit");

    if (state == 1) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}


// Main program
gameLaunch();