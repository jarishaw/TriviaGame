

// user picks answer to question

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


function submittedAnswers() {
var question1 = $("input[name=optradioq1]:checked").val();
var question2 = $("input[name=optradioq2]:checked").val();
var question3 = $("input[name=optradioq3]:checked").val();
var question4 = $("input[name=optradioq4]:checked").val();
var question5 = $("input[name=optradioq5]:checked").val();
var question6 = $("input[name=optradioq6]:checked").val();

//compare user answers to correct answers

if(question1==="Braveheart"){
	correctAnswers++;
	$("#correct").text(correctAnswers);
}

else if(question1 === undefined){
	unanswered++;
	$("#missingAnswer").text(unanswered);
}


else{
	incorrectAnswers++;
	$("#incorrect").text(incorrectAnswers);
}




if(question2==="The Lord of the Rings"){
	correctAnswers++;
	$("#correct").text(correctAnswers);
}

else if(question2===undefined){
	unanswered++;
	$("#missingAnswer").text(unanswered);
}

else{
	incorrectAnswers++;
	$("#incorrect").text(incorrectAnswers);
}



if(question3==="Jerry Maguire"){
	correctAnswers++;
	$("#correct").text(correctAnswers);
}

else if(question3 === undefined){
	unanswered++;
	$("#missingAnswer").text(unanswered);

}

else{
	incorrectAnswers++;
	$("#incorrect").text(incorrectAnswers);


}

if(question4==="The Sixth Sense"){
	correctAnswers++;
	$("#correct").text(correctAnswers);
}

else if(question4 === undefined){
	unanswered++;
	$("#missingAnswer").text(unanswered);

}

else{
	incorrectAnswers++;
	$("#incorrect").text(incorrectAnswers);

}



if(question5==="Finding Nemo"){
	correctAnswers++;
	$("#correct").text(correctAnswers);
}

else if(question5 === undefined){
	unanswered++;
	$("#missingAnswer").text(unanswered);

}

else{
	incorrectAnswers++;
	$("#incorrect").text(incorrectAnswers);

}



if(question6==="Clueless"){
	correctAnswers++;
	$("#correct").text(correctAnswers);
}

else if(question3 === undefined){
	unanswered++;
	$("#missingAnswer").text(unanswered);

}

else{
	incorrectAnswers++;
	$("#incorrect").text(incorrectAnswers);

}

}

$("#doneButton").on("click", function() {

	submittedAnswers();

});


//--------------------------------------

//submitting the form





// // otherwise when timer is up, the game ends






$(document).ready(function(){


//hide questions and done button
$("#wrapper").hide();
$("#results").hide();


//user clicks start button

$("#startButton").click(function(){
             
//starts the game...trivia form appears 

   $("#wrapper").show();

//Timer starts counting down

	start();
            
   
});

$("#startButton").click( function () {
   $(this).hide();
 }
);

 $("#doneButton").click(function(){

 	$("#results").show();

 	$("#wrapper").hide();

 });

//if user answers all questions, click done button, it displays results

 $("#doneButton").click( function () {
   $(this).hide();
 }
);

var number = 45;

var intervalId;

function start() {
intervalId = setInterval(decrement, 1000);

}

function decrement() {

      number--;

	$("#showTime").html("Time Remaining:" + number);


	if (number === 0){

	stop(); 

	$("#results").show();

	submittedAnswers();

	$("#wrapper").hide();

 }

}

function stop() {
	clearInterval(intervalId);
}


});



//if user answers all questions, click done button


//otherwise when timer is up, the game ends
//displays the number of incorrect & correct answers, and unanswered
