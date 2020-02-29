//vars

const triviaQuestion = [
    {
        question: "How many bones does a cat have?",
        answer:{
            a: 120, 
            b: 192, 
            c: 230, 
            d: 186
        },
        correct: "c"
    },

    {
        question: "What breed of cat is shown in the Disney Movie 'Lady and the Tramp'?",
        answer:{
            a: "American Short Hair", 
            b: "Tabby", 
            c: "Siamese", 
            d: "Persian"
        },
        correct: "c"
    },


    {
        question:"How many rows of whiskers does a cat have?",
        answer:{
            a: 4,
            b: 7,
            c: 2,
            d: 6},
        correct: "a"
    },

    {
        question: "How many teeth does an adult cat have?",
        answer:{
            a: 42,
            b: 30,
            c: 36,
            d: 22},
        correct: "b"
    },

    {
        question: "The cat breed 'Spotted Mist' is now known as what?",
        answer:{
            a: "Canadian Mist",
            b: "Belgian Mist",
            c: "Australian Mist",
            d: "American Mist"},
        correct: "c"
    },

    {
        question: "Which of these cat breeds has long hair?",
        answer:{
            a: "Ocicat",
            b: "Havana Brown",
            c: "Russian blue",
            d: "Himalayan"},
        correct: "d"
    },
    
    {
        question: "Which of these breeds is caused by a genetic mutation?",
        answer: {
            a: "Siberian",
            b: "Manx",
            c: "Munchkin",
            d: "Napoleon"},
        correct: "c"
    },

    {
        question: "Which of these breeds is native to Kenya?",
        answer: {
            a: "Sokoke",
            b: "Nebelung",
            c: "Tiffany",
            d: "Snowshoe"},
        correct: "a"
    },

    {
        question: "Which of these cats has a 'ticked coat'?",
        answer: {
            a: "Manx",
            b: "La Perm",
            c: "Persian",
            d: "Abyssinian"},
        correct: "d"
    },

    {
        question: "Which breed of cat is the largest?",
        answer: {
            a: "Savannah",
            b: "Maine Coon",
            c: "Ragdoll",
            d: "Siberian"},
        correct: "b"
    },
    
    {
        question: "When does a kitten open its eyes?",
        answer: {
            a: "5 weeks",
            b: "Two months",
            c: "1-3 weeks",
            d: "At birth"},
        correct: "c"
    },
    
    {
        question: "When does a kitten show interest in solid food?",
        answer: {
            a: "Two months",
            b: "At birth",
            c: "2 weeks",
            d: "6 weeks"},
        correct: "d"
    },

    {
        question: "What best describes a feral cat?",
        answer:{
            a: "A domesticated cat that has returned to the wild",
            b: "A barn cat",
            c: "Cats that roam only at night",
            d: "Cats that roam freely"},
        correct: "a"
    },

    {
        question: "What is the name of the cat that was left £9m by his reclusive British owner in 1988?",
        answer: {
            a: "Blackie",
            b: "Paws",
            c: "Tubbs",
            d: "Marmalade"},
        correct: "a"
    },

    {
        question: "On average, cats spend how much time every day sleeping?",
        answer: {
            a: "8 Hours",
            b: "12 Hours",
            c: "4 Hours",
            d: "16 Hours"},
        correct: "d"
    }
];

let questionContainer;
let question;
let answerA;
let answerB;
let answerC;
let answerD;

let correct = 0;
let incorrect =0;
let unanswered = 0;
let answers = {};
var randArr = [ ];

let timerRunning = false;
let time = 20;

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
    randQuestions();

    $("#timer").show();
    $("#done").show();
    $("#triviaAll").show();
    $("#start").hide();
    $("#howto").hide();

    console.log("correct " + correct + "incorrect " + incorrect + "unanswered " + unanswered);
}

//Random Questions
function randQuestions(){
    for (i=0; i < 5; i++){
        var random = triviaQuestion[Math.floor(Math.random()*15)];
        randArr.push(random);
    }    
    console.log(randArr);
    populateTriv();
    console.log("correct " + correct + "incorrect " + incorrect + "unanswered " + unanswered);
}


//questions added
function populateTriv(){
    for (i=0; i < randArr.length; i++){

        unanswered++;
        questionContainer = undefined;
        question = undefined;
        answerA = undefined;
        answerB = undefined;
        answerC = undefined;
        answerD = undefined;

        questionContainer = $('<div class="flex mt-2" id="questionContainer">');

        question = '<label class="inline-flex items-center px-4 py-2 font-bold text-orange-800" id="question">' + '<span class="ml-2 px-4 py-2 text-orange-800">' + randArr[i].question + '</span>' + '</label>';

        answerA = '<label class="inline-flex items-center px-4 py-2 font-bold text-orange-800" id="answerA">' + '<input type="radio" class="' + i + '" name="answer' + i + '" value="a" onClick="clicked(this.value, this.className)">' + '</input>' + '<span class="ml-2 px-4 py-2 text-orange-800">' + randArr[i].answer.a + '</span>' + '</label>';

        answerB = '<label class="inline-flex items-center px-4 py-2 font-bold text-orange-800" id="answerB">' + '<input type="radio" class="' + i + '" name="answer' + i + '" value="b" onClick="clicked(this.value, this.className)">' + '</input>' + '<span class="ml-2 px-4 py-2 text-orange-800 ">' + randArr[i].answer.b + '</span>' + '</label>';

        answerC = '<label class="inline-flex items-center px-4 py-2 font-bold text-orange-800"id="answerC">' + '<input type="radio" class="' + i + '" name="answer' + i + '" value="c" onClick="clicked(this.value, this.className)">' + '</input>' + '<span class="ml-2 px-4 py-2 text-orange-800 ">' + randArr[i].answer.c + '</span>' + '</label>';

        answerD = '<label class="inline-flex items-center px-4 py-2 font-bold text-orange-800" id="answerD">' + '<input type="radio" class="' + i + '" name="answer' + i + '" value="d" onClick="clicked(this.value, this.className)">' + '</input>' + '<span class="ml-2 px-4 py-2 text-orange-800 ">' + randArr[i].answer.d + '</span>' + '</label>';

        questionContainer.append(question, answerA, answerB, answerC, answerD);
        $("#triviaAll").append(questionContainer);
        

    }
}

//start timer
function timerStart(){
    if (!timerRunning) {
        intervalId = setInterval(decrement, 1000);
        timerRunning = true;
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
    $("#done").hide();
    $("#timer").hide();
    $("#triviaAll").hide();
    $("#reset").show();
    $("#outOfTime").show();
    $("label").remove();

    $("#correctAns").show().text("Correct: " + correct);
    $("#incorrectAns").show().text("Incorrect: " + incorrect);
    unanswered = randArr.length - (correct + incorrect);
    $("#unanswered").show().text("Unanswered: " + unanswered);

    results();
    clearInterval(intervalId);
    timerRunning = false;
    time = 20;
    
    console.log("correct " + correct + "incorrect " + incorrect + "unanswered " + unanswered);
}

function clicked(currentAns, qIndex){
    const qIndexInt = parseInt(qIndex);
    const question = randArr[qIndexInt];

    const currentAnsObj = {
        correctAns: question.correct,
        radioAns: currentAns
    }

    answers[qIndexInt] = currentAnsObj;
    answerArray = Object.values(answers);

    console.log("correct " + correct + "incorrect " + incorrect + "unanswered " + unanswered);
    }


// results
function results(){
    for (i=0; i < answerArray.length; i++){
        if (answerArray[i].correctAns === answerArray[i].radioAns){
            correct ++;
            unanswered--;
        }
        else {
            incorrect ++;
            unanswered--;
        }
    }

    console.log("correct " + correct + "incorrect " + incorrect + "unanswered " + unanswered);

    $("#correctAns").text("Correct Answers: " + correct);
    $("#incorrectAns").text("Incorrect Answers: " + incorrect);
    $("#unanswered").text("Unanswered Questions: " + unanswered);

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

    correct = 0;
    incorrect = 0;
    answer =0;
    intervalId = 0;
    timerRunning = false;
    time = 20;
    unanswered = 0;
    answers = { };
    randArr = [ ];

    start();
}



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


