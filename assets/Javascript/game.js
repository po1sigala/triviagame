//create variables which will have arrays for my questions and answers, log what question I am on,
//hold the users guess
var prompt= []
var qNumber= -1
var answer= []
var userguess=""
/*
1.set var user guess equal to the users input in the textbox set to lowercase and without spaces if possible*/



/*2. i need the button to click and begin the quiz taking me to question 1
clicking the button should:
-->increase q number by 1
-->question id will be rewritten to the prompt variable at index [qnumber]
-->var answer will be set to the element at index [qnumber]
-->the text of the button should change from "start quiz" to "next question"
-->create an if fucntion that checks if the user guess to lower case and without spaces equals the answer.
-->after 20 seconds a timeout function should execute this button click function
*/