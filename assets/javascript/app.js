$(document).ready(function () {


    $(document).ready(function () {
        $("#timerBar").hide();
        $("#question").hide();
        $("#answerContainer").hide();
        $("#checkAnswerDiv").hide();
        $("#skipToNext").hide();
        $("#startOverButton").hide();
        $("#countdown").hide();



    });

    $("#startButton").click(function () {
        $("#startButton").fadeOut();
        $("#startButton").empty();
        $("#timerBar").fadeIn();
        $("#countdown").fadeIn();
        startGame();

    });




    //cA stands for Correct Answer
    //pA stands for Possible Answers
    var quiz = [

        {
            question: "Who directed Titanic (1997) starring Celine Dion, Billy Zane and Kate Winslet?",
            pA: ["James Cameron", "James Cameroon", "Pres. Martin Van Buren", "Leonardo DiCaprio"],
            abcd: ["A.) ", "B.) ", "C.) ", "D.) "],
            cA: 0
        },

        {
            question: "Of these members of the animal kingdom, which species is the most evil?",
            pA: ["Sharks", "Bees", "President Martin Van Buren", "Dolphins"],
            abcd: ["A.) ", "B.) ", "C.) ", "D.) "],
            cA: 3
        },

        {
            question: "Who does the Quick Brown Fox jump over?",
            pA: ["The Energetic Cat", "The Lone Wolf", "President Martin Van Buren", "The Lazy Dog"],
            abcd: ["A.) ", "B.) ", "C.) ", "D.) "],
            cA: 3
        },


        {
            question: "The answer is C.",
            pA: ["Placeholder A", "Placeholder B", "Placeholder C", "Placeholder D"],
            abcd: ["A.) ", "B.) ", "C.) ", "D.) "],
            cA: 2
        },

        {
            question: "The answer is D.?",
            pA: ["Placeholder A", "Placeholder B", "Placeholder C", "Placeholder D"],
            abcd: ["A.) ", "B.) ", "C.) ", "D.) "],
            cA: 3
        }

    ];


    var rightMessage = "Yup! You got it.";
    var wrongMessage = "No. Not quite right.";
    var nextQuestionMessage = "Next question coming right up.";
    var theCorrectAnswerWas = "The answer we were looking for was ";
    var yourAnswerWas = "Your answer was ";
    var timeExpired = "Pencils down!";
    var answerGif = ['jamesCameron.gif"', 'dolphin.gif"', 'quickBrownFox.gif"'];

    var qD = 0; //Stands for Question Displayed
    // var cA = 0; //Stands for Correct Answer
    var answeredCorrectly = 0;
    var answeredIncorrectly = 0;
    var notAnswered = 0;




    var seconds;
    var time;
    var answered;
    var questionClockRunning = false;
    var answerClockRunning = false;

   


    function startGame() {

        displayQuestion();
        

    }


    // mC stands for Multiple Choice
    function displayQuestion() {
        questionClockRunning = true;
        answerClockRunning = false; 
        $("#question").fadeIn();
        $("#answerContainer").fadeIn();
        $("#skipToNext").hide();

        $('#questionNumber').empty();
        $('#questionNumber').html("Q. " + (qD + 1) + " of " + quiz.length);

        $('#h2Question').empty();
        $('#h2Question').html(quiz[qD].question);

        $('#pA').empty();
        $('#pA').html(quiz[qD].pA[0]);
        $("#a").click(function () {

            var mC = 0;
            if (mC == quiz[qD].cA) {


                checkAnswerRight();
            } else {


                checkAnswerWrong();
            }
        });

        $('#pB').empty();
        $('#pB').html(quiz[qD].pA[1]);
        $("#b").click(function () {
            var mC = 1;
            if (mC == quiz[qD].cA) {


                checkAnswerRight();
            } else if (mC !== quiz[qD].cA) {


                checkAnswerWrong();
            }
        });

        $('#pC').empty();
        $('#pC').html(quiz[qD].pA[2]);
        $("#c").click(function () {
            var mC = 2;
            if (mC == quiz[qD].cA) {

                checkAnswerRight();
            } else {

                checkAnswerWrong();
            }
        });

        $('#pD').empty();
        $('#pD').html(quiz[qD].pA[3]);
        $("#d").click(function () {
            var mC = 3;
            if (mC == quiz[qD].cA) {

                checkAnswerRight();
            } else {

                checkAnswerWrong();
            }

        });


        
        

        questionTimer();
        //move();
        

    }

    


    $("#skipToNext").click(function () {
        qD++; // Question Displayed
        $("#checkAnswerDiv").fadeOut();
        displayQuestion();
        console.log(qD);
        answered = false;
    });


    function checkAnswerRight() {
        questionClockRunning = false;
        answerClockRunning = true; 


        answeredCorrectly++;
        console.log("Answered Correctly: " + answeredCorrectly);
        $("#question").hide();
        $("#answerContainer").hide();
        $("#checkAnswerDiv").fadeIn();
        $("#rightOrWrongDiv").fadeIn();
        
        $("#rightOrWrongH3").fadeIn(rightMessage);
        $("#rightOrWrongH3").html(rightMessage);
        //qD Stands for Question Displayed // cA Stands for Correct Answer
        $("#rightAnswerWas").fadeIn(yourAnswerWas + quiz[qD].abcd[quiz[qD].cA] + quiz[qD].pA[quiz[qD].cA] + ".");
        $("#rightAnswerWas").html(yourAnswerWas + quiz[qD].abcd[quiz[qD].cA] + quiz[qD].pA[quiz[qD].cA] + ".");
        $('#gifDiv').fadeIn('<img id="gifImg" src="assets/images/' + answerGif[qD] + '>');
        $('#gifDiv').html('<img id="gifImg" src="assets/images/' + answerGif[qD] + '>');
       
       
       //Will add this a later time
       
        // $("#skipToNext").fadeIn();
        // $("#skipToNext").html("Next Question >> ");


        answerTimer();
    }

    function checkAnswerWrong() {
        questionClockRunning = false;
        answerClockRunning = true; 

        answeredIncorrectly++;
        console.log("Answered Incorrectly: " + answeredIncorrectly);
        $("#question").hide();
        $("#answerContainer").hide();
        $("#checkAnswerDiv").fadeIn();


        $("#rightOrWrongH3").fadeIn(wrongMessage);
        $("#rightOrWrongH3").html(wrongMessage);
        //qD Stands for Question Displayed // cA Stands for Correct Answer
        $("#rightAnswerWas").fadeIn(theCorrectAnswerWas + quiz[qD].abcd[quiz[qD].cA] + quiz[qD].pA[quiz[qD].cA] + ".");
        $("#rightAnswerWas").html(theCorrectAnswerWas + quiz[qD].abcd[quiz[qD].cA] + quiz[qD].pA[quiz[qD].cA] + ".");
        $('#gifDiv').fadeIn('<img id="gifImg" src="assets/images/' + answerGif[qD] + '>');
        $('#gifDiv').html('<img id="gifImg" src="assets/images/' + answerGif[qD] + '>');
        
        //Will add this a later time
        // $("#skipToNext").fadeIn();
        // $("#skipToNext").html("Next Question >> ");

        answerTimer();
        //move();
    }

    function checkAnswerExpired() {
        questionClockRunning = false;
        answerClockRunning = true; 
        notAnswered++;
        console.log("Not Answered: " + notAnswered);
        $("#question").hide();
        $("#answerContainer").hide();
        $("#checkAnswerDiv").fadeIn();
        $("#checkAnswerDiv").fadeIn();
        $("#checkAnswerDiv").html();
        $("#checkAnswerDiv").show(); 
        console.log("Checking if check answer Div is being run.");
     
     
        $("#rightOrWrongH3").fadeIn(timeExpired);
        $("#rightOrWrongH3").html(timeExpired);
        //qD Stands for Question Displayed // cA Stands for Correct Answer // abcd is a Key
        $("#rightAnswerWas").fadeIn(theCorrectAnswerWas + quiz[qD].abcd[quiz[qD].cA] + quiz[qD].pA[quiz[qD].cA] + ".");
        $("#rightAnswerWas").html(theCorrectAnswerWas + quiz[qD].abcd[quiz[qD].cA] + quiz[qD].pA[quiz[qD].cA] + ".");
        $('#gifDiv').fadeIn('<img id="gifImg" src="assets/images/' + answerGif[qD] + '>');
        $('#gifDiv').html('<img id="gifImg" src="assets/images/' + answerGif[qD] + '>');
        
        //Will add this a later time
        // $("#skipToNext").fadeIn();
        // $("#skipToNext").html("Next Question >> ");

        answerTimer();
        //move();

    }



    function questionTimer() {
        secondsLeft = 30;
       

        time = setInterval(displayTimer, 1000);
    
    }

    //Opens up the Answer Page function
    function answerTimer() {
        clearInterval(time);
        secondsLeft = 7;
        
        
        $("#countdown-number").html(secondsLeft);
        
        time = setInterval(displayTimer2, 1000);
        
    }

    function displayTimer() {
        secondsLeft--;
        console.log(secondsLeft);
        $("#countdown-number").html(secondsLeft);
        if (secondsLeft < 1) {
            clearInterval(time);
            checkAnswerExpired(); 
            
            
            
        }
    }

    function displayTimer2() {
        secondsLeft--;
        console.log(secondsLeft);
        $("#countdown-number").html(secondsLeft);
        if (secondsLeft == 0) {
            qD++;
            clearInterval(time);

            if (qD <= quiz.length - 1){
            $("#checkAnswerDiv").hide();
            displayQuestion();} // Working

            else {
                
                $("#timerBar").empty();
                // $("#skipToNext").hide();
                displayFinalScore();
            }



        }
    }











    function displayFinalScore() {
        $("#rightOrWrongH3").html("All done!");
        $("#rightAnswerWas").html("Your results are in:");
        $('#gifDiv').html("Total Score: " + answeredCorrectly + " of " + quiz.length + "<br>" + "Incorrect Guesses: " + answeredIncorrectly + "<br>" + "Answers Left Blank: " + notAnswered);
        $("#startOverButton").html("Again?");
        $("#startOverButton").fadeIn("Again?");
        console.log("Start Over Button test");


        $("#startOverButton").click(function () {
            //$("#checkAnswerDiv").fadeOut();
            $("#checkAnswerDiv").hide();
            //$("#rightOrWrongH3").fadeOut();
            $("#rightOrWrongH3").hide();
            //$("#rightAnswerWas").fadeOut();
            $("#rightAnswerWas").hide();
           // $('#gifDiv').fadeOut();
            $('#gifDiv').hide();

            answeredCorrectly = 0;
            answeredIncorrectly = 0;
            notAnswered = 0;
            qD = 0;
            
            $("#startOverButton").fadeOut();
            $("#startOverButton").empty();
            $("#timerBar").fadeIn();
    
            startGame();
    
        });
    

    }





    function move() {
        var elem = document.getElementById("barRemaining");
        var width = 100;
        var id = setInterval(frame, 300);
        function frame() {
            if (width == 0) {
                clearInterval(id);
            } else {
                width--;
                elem.style.width = width + '%';
            }
        }
    }
    move();



























});