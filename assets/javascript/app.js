$(document).ready(function(){


//hide questions and done button
$("#wrapper").hide();


//user clicks start button

$("#startButton").click(function(){
             
//starts the game...trivia form appears 

   $("#wrapper").show();

//Timer starts counting down
            
   
});


var number = 75;

var intervalId;

function run() {
intervalId = setInterval(decrement, 1000);

}

function decrement() {

      number--;

	$("#showTime").html("Time Remaining:" + number);


	if (number === 0){

 	stop();
 }

}

function stop() {
	clearInterval(intervalId);
}

run();

//user picks answer to question

// var incorrectAnswers = 0;
// var correctAnswers = 0;
// var unAnswered = 0;
// var userAnswer = [];

//if user answers all questions, click done button


//otherwise when timer is up, the game ends
//displays the number of incorrect & correct answers, and unanswered

});