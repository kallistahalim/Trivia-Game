var totalquestions = 0;
var correct = 0;
var wrong = 0;
var counter = 10;
var userGuess;
var questions = [{
        question: "Which fast food chain has '$1.69' nuggets?",
        options: ['McDonalds', 'Chick-Fil-A', 'Taco Bell', 'Burger King'],
        answer: 'Taco Bell'
    },
    {
        question: "Which fast food chain only sells chicken?",
        options: ['McDonalds', 'Chick-Fil-A', 'Taco Bell', 'Burger King'],
        answer: 'Chick-Fil-A'
    },
    {
        question: "Which fast food chain only serves breakfast until 11AM?",
        options: ['McDonalds', 'Chick-Fil-A', 'Taco Bell', 'Burger King'],
        answer:'McDonalds'
    },
    {
        question: "Which fast food chain has a clown as mascot?",
        options: ['McDonalds', 'Chick-Fil-A', 'Taco Bell', 'Burger King'],
        answer:'McDonalds'
    },
    {
        question: "Which fast food chain only has stores in california and Nevada?",
        options: ['KFC', 'Chick-Fil-A', 'In & Out', 'Burger King'],
        answer:'In & Out'
    },
    {
        question: "Which fast food chain Kallista does not like the most?",
        options: ['KFC', 'Taco Bell', 'In & Out', 'Burger King'],
        answer: 'Taco Bell'
    }
];
var questionNumber = 0;


$('button').on("click", function () {
    $(this).hide();
    startNewGame();
    count = setInterval(timer, 1000);
});

function showResults() {
    $('#timer').text(counter);
    $("#correct").html(correct);
    $("#total").html(totalquestions);
}

function timer() {
    counter--;
    $('#timer').text(counter);
    if (counter === 0) {
        totalquestions++;
        questionNumber++;
        startNewGame();
        return;
    }
}

function startNewGame() {
    counter = 10;
    showResults();
    if (questionNumber === questions.length) {
        clearInterval(count);
        $("#questions").empty();
        $("#options").empty();
    } else {
        showQuestion();
    }
}

function showQuestion() {
    var choices = questions[questionNumber].options;
    $("#questions").text(questions[questionNumber].question);
    $("#options").empty();

    for (var i = 0; i < choices.length; i++) {
        var options = $("<button>");
        options.text(choices[i]);
        $("#options").append(options);
    }
}

$("#options").on('click', 'button', function (e) {
    userGuess = $(this).text();
    if (userGuess === questions[questionNumber].answer) {
        correct++;
        totalquestions++;

    } else {
        wrong++;
        totalquestions++;
    }
    questionNumber++;

    startNewGame();
})