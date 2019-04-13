//create variables which will have arrays for my questions and answers, log what question I am on,
//hold the users guess
var prompt= ["What is the last name of starting patriots quarterback", "what rule led to the Raider's heartbreaking loss in the Super Bowl", "What is the last name of the player who initially set the record for longest run from scrimmage",
 "which is the greatest franchise of all time",]
var qNumber= -1
var answers= ["brady","the tuck rule","dorsett","cowboys"]
var correctCount = 0;
var incorrectCount= 0;
var userGuess = "";
var timeLeft=;
var intervalID;
/*
1.set var user guess equal to the users input in the textbox set to lowercase and without spaces if possible*/

function starttime(){
    clearInterval(intervalID);
    intervalID= setInterval(decrement, 1000);
}
function decrement(){
    timeLeft--;
    $("#time").text("time until next question: "+timeLeft)
    if(timeLeft===0){
       clickButton();
        }
    }
function submit(){  //when a user clicks the button it checks if the quiz is done, advances to and displays the next question.
    qNumber++;
    timeLeft= 30;
    if(qNumber === prompt.length){
    return endGame();
    }else{
    $("#question").text(prompt[qNumber]);
    $("#qNumber").text("Question # " + (qNumber+1) )
    }

}
function check(){
    console.log(answers[qNumber]);
    console.log(userGuess===answers[qNumber-1]);
    if( userGuess===answers[qNumber-1]){
        return correct();
    }
    else{
        
        incorrect();
    }
}



function correct(){
    console.log("correct is running")
    alert("Correct");
 
    correctCount++;
    console.log(correctCount);
    
    // $('.toast2').toast('show');
}

function incorrect(){
    console.log("wrong")
    incorrectCount++;
    console.log(incorrectCount);
    alert("wrong")
    // $('.toast').toast('show');
}
function reset(){
    correctCount = 0;
    ncorrectCount= 0;
}
function endGame(){
    $("#qNumber").text("Thanks for playing! check your stats below");
    $("#question").text("you got " + correctCount+ " out of " + prompt.length +" correct");
}

function clickButton(){
    $(".btn").text("Final answer!")
    userGuess=$(".form-control").val();
    submit();
    if(qNumber>0){
    check();
    
    }
    starttime();
}
$(".btn").on("click", function(){
   clickButton();
})

/*2. i need the button to click and begin the quiz taking me to question 1
clicking the button should:
-->increase q number by 1
-->question id will be rewritten to the prompt variable at index [qnumber]
-->var answer will be set to the element at index [qnumber]
-->the text of the button should change from "start quiz" to "next question"
-->create an if fucntion that checks if the user guess to lower case and without spaces equals the answer.
-->after 20 seconds a timeout function should execute this button click function
*/
//use event.preventDefault to keep inital function from running and instead run the new function
//so on initialization I 

//objects can be arrays so can i make my arrays elemnts objevcts like tom brady and give the tom brady object multiple aliases

//click button and display first question
