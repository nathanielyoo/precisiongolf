let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-buttons .bx-x-circle");
let navBtns = document.querySelector(".nav-buttons");

menuOpenBtn.addEventListener("click", ()=>{
    navBtns.style.left="0";
});

menuCloseBtn.addEventListener("click", ()=>{
    navBtns.style.left="-100%";
});

function quizSubmit() { //submit button onclick function
    var userScore = 0; //creates the variable userScore, sets to 0

    for(var i = 1; i <= 7; i++) { //loop, goes through all 7 questions
      var radioQuestions = document.getElementsByName('q'+i);
  
      for(var c = 0; c < radioQuestions.length; c++) { //checks the radio buttons that are clicked
        var questionValue = radioQuestions[c];
        if(questionValue.checked && questionValue.value == "1") { //if radio button is clicked and its value is "1" (which is the correct answer)
          userScore++; //adds 1 to userScore
        }
      }
    }

    var scoreShow = "Your Score: " + userScore + " out of 7"; //defining the variable for showing the results (ex. "Your Score: 5/7")

    document.getElementById('score').innerHTML = scoreShow; //modifies the <p> tag "score" with the scoreShow variable — this is what shows the score when submitted
  }