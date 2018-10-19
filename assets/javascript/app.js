var totalquestions;
var total;
var button;
var counter = 1;
var userGuess;
var questions = [{
        question: "Which fast food chain has '$1.69' nuggets?",
        options: ['McDonalds', 'Chick-Fil-A', 'Taco Bell', 'Burger King'],
        answer: 'Burger King'
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
        answer: 'Taco Bells'
    }
];


$('button').on("click", function () {
    $(this).hide();
    count = setInterval(timer, 500);
    startNewGame();

});

function timer() {
    $('#timer').text(counter);
    counter--;
    if (counter === 0) {
        $('#timer').text(counter);
        $("#total").html(total);
        $("#totalquestions").html(totalquestions);
        clearInterval(count);
        return;
    }
}

// var timer = $('#timer').html(count);

function startNewGame() {
    // userName = '';
    // userAge = '';
    // userFavorite = '';
    correct = 0;
    wrong = 0;
    totalquestions = 0;
    total = 0;
}

startNewGame();

function showQuestion() {
    var choices = questions[0].options;
    var buttons = [];

    for (var i = 0; i < question.length; i++); {
        var options = $("<button>");
        options.text(choices[i]);
        options.attr('#buttonid'.i);
        $("#options").append(options);
        timer();
        }
    }


    $('#questions').on('load'.function(){
        showQuestion();
    });




    $("#options").on('click', 'button', function (e) {
        userGuess = $(this).data('id');
        questions[i].answer;
        if (userGuess === questions[i].answer) {
            correct++;
            totalquestions++;

        } else {
            wrong++;
            totalquestions++;
        }

        startNewGame();
    })

