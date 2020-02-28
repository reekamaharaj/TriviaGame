//----Buttons
// Start - done
// Done - done
// Reset - done

//----Load page
//Directions for the game - done
//Start button - done
//Extra: different topic options

//-----Trivia page stuff
//Make a layout with radio options for answers - done
//Timer area - done

//----Result page
//Restart buttom -done
//# Correctly Answered Questions -done
//# Incorrectly Answered Questions -done
//# Unanswered Questions -done

//----JS stuff
//Game start function - reset/sets the timer when the Start or restart button is clicked - done
//Randomize the questions
//Generate the questions to the page - done
//Check the final answers with the correct ones. Only do this if the player hits Done or if the timer runs out -done
//function for what happens when the done button is used - done
//function for what happens when the timer runs out - done
//function to update the timer on the page - done

//vars

var triviaQuestion = [
    {
        question: "How many bones does a cat have?",
        answer:{
            a: 120, 
            b: 192, 
            c: 230, 
            d: 186
        },
        correct: function(){
                return this.answer.c;
            } 
    },

    {
        question: "What breed of cat is shown in the Disney Movie 'Lady and the Tramp'?",
        answer:{
            a: "American Short Hair", 
            b: "Tabby", 
            c: "Siamese", 
            d: "Persian"
        },
        correct: function(){
            return this.answer.c;
        }
    },


    {
        question:"How many rows of whiskers does a cat have?",
        answer:{
            a: 4,
            b: 7,
            c: 2,
            d: 6},
        correct: function(){
            return this.answer.a;
        }
    },

    {
        question: "How many teeth does an adult cat have?",
        answer:{
            a: 42,
            b: 30,
            c: 36,
            d: 22},
        correct: function(){
            return this.answer.b;
        }
    },

    {
        question: "The cat breed 'Spotted Mist' is now known as what?",
        answer:{
            a: "Canadian Mist",
            b: "Belgian Mist",
            c: "Australian Mist",
            d: "American Mist"},
        correct: function(){
            return this.answer.c;
        }
    },

    // {
    //     question: "Which of these cat breeds has long hair?",
    //     answer:{
    //         a: "Ocicat",
    //         b: "Havana Brown",
    //         c: "Russian blue",
    //         d: "Himalayan"},
    //     correct: function(){
    //         return this.answer.d;
    //     }
    // },
    
    // {
    //     question: "Which of these breeds is caused by a genetic mutation?",
    //     answer: {
    //         a: "Siberian",
    //         b: "Manx",
    //         c: "Munchkin",
    //         d: "Napoleon"},
    //     correct: function(){
    //         return this.answer.c;
    //     }
    // },

    // {
    //     question: "Which of these breeds is native to Kenya?",
    //     answer: {
    //         a: "Sokoke",
    //         b: "Nebelung",
    //         c: "Tiffany",
    //         d: "Snowshoe"},
    //     correct: function(){
    //         return this.answer.a;
    //     }
    // },

    // {
    //     question: "Which of these cats has a 'ticked coat'?",
    //     answer: {
    //         a: "Manx",
    //         b: "La Perm",
    //         c: "Persian",
    //         d: "Abyssinian"},
    //     correct: function(){
    //         return this.answer.d;
    //     }
    // },

    // {
    //     question: "Which breed of cat is the largest?",
    //     answer: {
    //         a: "Savannah",
    //         b: "Maine Coon",
    //         c: "Ragdoll",
    //         d: "Siberian"},
    //     correct: function(){
    //         return this.answer.b;
    //     }
    // },
    
    // {
    //     question: "When does a kitten open its eyes?",
    //     answer: {
    //         a: "5 weeks",
    //         b: "Two months",
    //         c: "1-3 weeks",
    //         d: "At birth"},
    //     correct: function (){
    //         return this.answer.c;
    //     }
    // },
    
    // {
    //     question: "When does a kitten show interest in solid food?",
    //     answer: {
    //         a: "Two months",
    //         b: "At birth",
    //         c: "2 weeks",
    //         d: "6 weeks"},
    //     correct: function(){
    //         return this.answer.d;
    //     }
    // },

    // {
    //     question: "What best describes a feral cat?",
    //     answer:{
    //         a: "A domesticated cat that has returned to the wild",
    //         b: "A barn cat",
    //         c: "Cats that roam only at night",
    //         d: "Cats that roam freely"},
    //     correct: function(){
    //         return this.answer.a;
    //     }
    // },

    // {
    //     question: "What is the name of the cat that was left £9m by his reclusive British owner in 1988?",
    //     answer: {
    //         a: "Blackie",
    //         b: "Paws",
    //         c: "Tubbs",
    //         d: "Marmalade"},
    //     correct: function(){
    //         return this.answer.a;
    //     }
    // },

    // {
    //     question: "On average, cats spend how much time every day sleeping?",
    //     answer: {
    //         a: "8 Hours",
    //         b: "12 Hours",
    //         c: "4 Hours",
    //         d: "16 Hours"},
    //     correct: function(){
    //         return this.answer.d;
    //     }
    // }
];

var questionContainer;
var question;
var answerA;
var answerB;
var answerC;
var answerD;

var correct = 0;
var incorrect =0;
var unanswered = 0;

var clockRunning = false;
var time = 300;

//document load
$('document').ready(function(){
    $("#start").click(start);
    $("#done").click(endTrivia);
    $("#reset").click(reset);

    $("#timer").hide();
    $("#outOfTime").hide();
    $("#correctAns").hide();
    $("#incorrectAns").hide();
    $("#unanswered").hide();
    $("#done").hide();
    $("#reset").hide();
});

//functions

//start 
function start(){
    timerStart();
    populateTriv();
    $("#sec").text("30");
    $("#timer").show();
    $("#done").show();
    $("#triviaAll").show();
    $("#start").hide();
    $("#howto").hide();
}

//questions added
function populateTriv(){
    for (var i=0; i < triviaQuestion.length; i++){

        questionContainer = undefined;
        question = undefined;
        answerA = undefined;
        answerB = undefined;
        answerC = undefined;
        answerD = undefined;

        questionContainer = $('<div class="flex mt-2" id="questionContainer">');

        question = '<label class="inline-flex items-center px-4 py-2 font-bold text-orange-800" id="question">' + '<span class="ml-2 px-4 py-2 text-orange-800">' + triviaQuestion[i].question + '</span>' + '</label>';

        answerA = '<label class="inline-flex items-center px-4 py-2 font-bold text-orange-800" id="answerA">' + '<input type="radio" class="' + i + '" name="answer' + i + '" value="a" onClick="clicked(this.value, this.className)">' + '</input>' + '<span class="ml-2 px-4 py-2 text-orange-800">' + triviaQuestion[i].answer.a + '</span>' + '</label>';

        answerB = '<label class="inline-flex items-center px-4 py-2 font-bold text-orange-800" id="answerB">' + '<input type="radio" class="' + i + '" name="answer' + i + '" value="b" onClick="clicked(this.value, this.className)">' + '</input>' + '<span class="ml-2 px-4 py-2 text-orange-800 ">' + triviaQuestion[i].answer.b + '</span>' + '</label>';

        answerC = '<label class="inline-flex items-center px-4 py-2 font-bold text-orange-800"id="answerC">' + '<input type="radio" class="' + i + '" name="answer' + i + '" value="c" onClick="clicked(this.value, this.className)">' + '</input>' + '<span class="ml-2 px-4 py-2 text-orange-800 ">' + triviaQuestion[i].answer.c + '</span>' + '</label>';

        answerD = '<label class="inline-flex items-center px-4 py-2 font-bold text-orange-800" id="answerD">' + '<input type="radio" class="' + i + '" name="answer' + i + '" value="d" onClick="clicked(this.value, this.className)">' + '</input>' + '<span class="ml-2 px-4 py-2 text-orange-800 ">' + triviaQuestion[i].answer.d + '</span>' + '</label>';

        questionContainer.append(question, answerA, answerB, answerC, answerD);
        $("#triviaAll").append(questionContainer);
        

    }
}

//start timer
function timerStart(){
    if (!clockRunning) {
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
    }
}

//timer decrement
function decrement(){
    time--;
    $("#sec").text(time);
    if (time === 0) {
        endTrivia();
    }
}

//game over
function endTrivia(){
    clearInterval(intervalId);
    clockRunning = false;
    time = 30;
    $("#done").hide();
    $("#reset").show();
    $("#timer").hide();
    $("#triviaAll").hide();
    $("label").remove();
    $("#outOfTime").show();
    $("#correctAns").show().text("Correct: " + correct);
    $("#incorrectAns").show().text("Incorrect: " + incorrect);
    unanswered = triviaQuestion.length - (correct + incorrect);
    $("#unanswered").show().text("Unanswered: " + unanswered);
    results();

}

// reset
function reset(){
    $("#timer").show();
    $("#done").show();
    $("#triviaAll").show();
    $("#start").hide();
    $("#howTo").hide();
    $("#outOfTime").hide();
    $("#correctAns").hide();
    $("#incorrectAns").hide();
    $("#unanswered").hide();
    $("#reset").hide();
    start();

    correct = 0;
    incorrect = 0;
    unanswered = 0;
    answer =0;
    intervalId = 0;
    clockRunning = false;
    time = 30;
}

// results
function results(){
    $("#correctAns").text("Correct Answers: " + correct);
    $("#incorrectAns").text("Incorrect Answers: " + incorrect);
    $("#unanswered").text("Unanswered Questions: " + unanswered);
}

//check selected answer
function clicked(x, y){
    //x is the answer chosen(onclick) y is the index in trivia question
    //Makes the index an int 
    const question = triviaQuestion[parseInt(y)];
    //uses the index to find what the corrext answer is
    var questionAns = question.correct(); 
    //takes the choice clicked (a,b,c,d) and looks in trivia question to find the answer
    var choice = question.answer[x];

    if (questionAns === choice){
        correct++;

    }
    else if(questionans === undefined){
        unanswered++;

    }
    else {
        incorrect++;

    }

}

