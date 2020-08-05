//Global Variables//
var count = 75;
var score = 0;
var Q1 =   {
    Question: "What does the abbreviation HTML mean?", 
    answer1: "Hyper Threaded Microchip Link.",
    answer2: "Hyper Text Mode Lookup.",
    answer3: "Hyper Text Markup Language.",
    answer4: "High Tech Machine Language.",
    correct: "answer3"
        };
        //test obj var code
        //console.log(Q1); 

var Q2 =   {
    Question: "What does the abbreviation CSS mean?", 
    answer1: "Complex Style Syntax.",
    answer2: "Cascading Style Sheet.",
    answer3: "Complete Sound Sheet.",
    answer4: "Cascading Sound Syntax.",
    correct: "answer2"
        };      

var Q3 =   {
    Question: "How can you create a numbered list in HTML?", 
    answer1: "<dl>",
    answer2: "<ul>",
    answer3: "<li>",
    answer4: "<ol>",
    correct: "answer4"
        };
var Q4 =   {
    Question: "Which is the correct CSS syntax?", 
    answer1: "Body {color: black}",
    answer2: "{body;color:black}",
    answer3: "{body:color=black(body}",
    answer4: "body:color=black",
    correct: "answer1"
        };
var Q5 =   {
    Question: "Which of the follwoing are commonly found on web pages?", 
    answer1: "Internet.",
    answer2: "Hyperlinks.",
    answer3: "Intranet.",
    answer4: "All of the above.",
    correct:"answer2"
        };  
var quesArray = [Q1, Q2, Q3, Q4, Q5];

setInterval(function(){
    if(count === 0) {
        clearInterval()
    }else{
        count--
}
}, 1000);

// listen for click start button //
document.getElementById("start").addEventListener("click", function(){
    //start timer//
    setInterval(function(){
        if(count === 0) {
            document.getElementById("timerup").innerHTML = "Time is up!"
            document.getElementById("timerup2").innerHTML = ""
            clearInterval()
            document.getElementById("answer1").innerHTML = ""
            document.getElementById("answer2").innerHTML = ""
            document.getElementById("answer3").innerHTML = ""
            document.getElementById("answer4").innerHTML = ""
        }
        else{
            count--
    }
    }, 1000);
          

        
        // Question 1 //
        
        document.getElementById("timerup2").innerHTML = Q1.Question
        document.getElementById("answer1").innerHTML = Q1.answer1
        document.getElementById("answer2").innerHTML = Q1.answer2
        document.getElementById("answer3").innerHTML = Q1.answer3
        document.getElementById("answer4").innerHTML = Q1.answer4
        ans1 = document.getElementById("answer1")
        ans2 = document.getElementById("answer2")
        ans3 = document.getElementById("answer3")
        ans4 = document.getElementById("answer4") 
        
        //do {
        ans1.addEventListener("click", function () {
            event.preventDefault()
            count = count + 5
            document.getElementById("timerup2").innerHTML = "Incorrect"
        });
        ans2.addEventListener("click", function () {
            event.preventDefault()
            count = count + 5
            document.getElementById("timerup2").innerHTML = "Incorrect"
        });
        ans3.addEventListener("click", function () {
            event.preventDefault()
            score = score + 1
            document.getElementById("timerup2").innerHTML = "Correct"
        });
        ans4.addEventListener("click", function () {
            event.preventDefault()
            count = count + 5
            document.getElementById("timerup2").innerHTML = "Incorrect"
        });
        
        //}
        //while (ques === 0)
        
        
        // Question 2 //
        //if (ques = 1) {
        document.getElementById("timerup2").innerHTML = Q2.Question
        document.getElementById("answer1").innerHTML = Q2.answer1
        document.getElementById("answer2").innerHTML = Q2.answer2
        document.getElementById("answer3").innerHTML = Q2.answer3
        document.getElementById("answer4").innerHTML = Q2.answer4
        ans1 = document.getElementById("answer1")
        ans2 = document.getElementById("answer2")
        ans3 = document.getElementById("answer3")
        ans4 = document.getElementById("answer4") 
        ans1.addEventListener("click", function () {
            count = count + 5
            document.getElementById("timerup2").innerHTML = "Incorrect"
        });
        ans3.addEventListener("click", function () {
            count = count + 5
            document.getElementById("timerup2").innerHTML = "Incorrect"
        });
        ans2.addEventListener("click", function () {
            score = score + 1
            document.getElementById("timerup2").innerHTML = "Correct"
        });
        ans4.addEventListener("click", function () {
            count = count + 5
            document.getElementById("timerup2").innerHTML = "Incorrect"
        });
        
    
     

});


