/* 
TODO Create start button 
TODO When the trivia starts there is a timer. (about 120 seconds might be good)
TODO Questions will populate in a form layout
TODO Only one answer should be selectable
TODO Button to say that you are complete, if the time hasn't run out
TODO When the timer runs out the player should be taken to the end page
TODO Text saying they didn't finish on time
TODO Text different if they did finish on time, or used the Done button
TODO End screen will have the number of correct answers, number of wrong answers, number of unanswered questions and a retry option. 
TODO Consider making the question randomized so that if they try multiple times there are different questions
TODO Counter should be displayed so the player knows how much time they have left. 
*/

// Buttons
// Start
// Done
// Restart

//----Load page
//Directions for the game
//Start button
//Extra: different topic options

//-----Trivia page stuuf
//Make a form layout with bubble options for answers
//Timer area

//----Result page
//Restart buttom
//# Correctly Answered Questions
//# Incorrectly Answered Questions
//# Unanswered Questions
//Different text for if the player ran out of time or if they hit the Done button

//----JS stuff
//Game start function - reset/sets the timer when the Start or restart button is clicked
//Randomize the questions
//Generate the questions to the page
//Check the final answers with the correct ones. Only do this if the player hits Done or if the timer runs out
//function for what happens when the done button is used
//function for what happens when the timer runs out
//function to update the timer on the page

let triviaQuestion = [
    {
        question: 'How many bones does a cat have?',
        answer:{
            a: 120, 
            b: 192, 
            c: 230, 
            d: 186},
            correct: function(){
                return this.answer.c;
            } 
    },

    {
        question: 'What breed of cat is shown in the Disney Movie "Lady and the Tramp"?',
        answer:{
            a: 'American Short Hair', 
            b: 'Tabby', 
            c: 'Siamese', 
            d: 'Persian'},
        correct: 'c'
    },


    {
        question:'How many rows of whiskers does a cat have?',
        answer:{
            a: 4,
            b: 7,
            c: 2,
            d: 6},
        correct: 'a'
    },

    {
        question: 'How many teeth does an adult cat have?',
        answer:{
            a: 42,
            b: 30,
            c: 36,
            d: 22},
        correct: 'b'
    },

    {
        question: 'The cat breed "Spotted Mist" is now known as what?',
        anwer: {    
            a: 'Canadian Mist',
            b: 'Belgian Mist',
            c: 'Australian Mist',
            d: 'American Mist'},
        correct: 'c'
    },

    {
        question: 'Which of these cat breeds has long hair?',
        answer:{
            a: 'Ocicat',
            b: 'Havana Brown',
            c: 'Russian blue',
            d: 'Himalayan'},
        correct: 'd'
    },
    
    {
        question: 'Which of these breeds is caused by a genetic mutation?',
        answer: {
            a: 'Siberian',
            b: 'Manx',
            c: 'Munchkin',
            d: 'Napoleon'},
        correct: 'c'
    },

    {
        question: 'Which of these breeds is native to Kenya?',
        answer: {
            a: 'Sokoke',
            b: 'Nebelung',
            c: 'Tiffany',
            d: 'Snowshoe'},
        correct: 'a'
    },

    {
        question: 'Which of these cats has a "ticked coat"?',
        answer: {
            a: 'Manx',
            b: 'La Perm',
            c: 'Persian',
            d: 'Abyssinian'},
        correct: 'd'
    },

    {
        question: 'Which breed of cat is the largest?',
        answer: {
            a: 'Savannah',
            b: 'Maine Coon',
            c: 'Ragdoll',
            d: 'Siberian'},
        correct: 'b'
    },
    
    {
        question: 'When does a kitten open its eyes?',
        answer: {
            a: '5 weeks',
            b: 'Two months',
            c: '1-3 weeks',
            d: 'At birth'},
        correct: 'c'
    },
    
    {
        question: 'When does a kitten show interest in solid food?',
        answer: {
            a: 'Two months',
            b: 'At birth',
            c: '2 weeks',
            d: '6 weeks'},
        correct: 'd'
    },

    {
        question: 'What best describes a feral cat?',
        answer:{
            a: 'A domesticated cat that has returned to the wild',
            b: 'A barn cat',
            c: 'Cats that roam only at night',
            d: 'Cats that roam freely'},
        correct: 'a'
    },

    {
        question: 'What is the name of the cat that was left £9m by his reclusive British owner in 1988?',
        answer: {
            a: 'Blackie',
            b: 'Paws',
            c: 'Tubbs',
            d: 'Marmalade'},
        correct: 'a'
    },

    {
        question: 'On average, cats spend how much time every day sleeping?',
        answer: {
            a: '8 Hours',
            b: '12 Hours',
            c: '4 Hours',
            d: '16 Hours'},
        correct: 'd'
    }
];


$('document').ready(function(){
    pageLoad();
    $('#start').click(start);
    console.log(triviaQuestion[0].question);
    console.log(triviaQuestion[0].answer);
    console.log(triviaQuestion[0].correct());
});


function start(){
    //create done button
    //populate all the questions and answers
    //answer options need to be radio buttons
    //start timer
   


}

//show questions
function questions(){
    for (var i=0; i < questions.length; i++){
       
    }
}

function pageLoad(){
    
}