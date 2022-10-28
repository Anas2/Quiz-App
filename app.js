
var questionArray = [
    {
        question: "Html Stands For ______________________",
        options: [
            "Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For _______________________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "Js Stands For _______________________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
    },
    {
        question: "Dom Stands For _______________________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
    },
    {
        question: "Ram Stands For _______________________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "Rom Stands For _______________________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
    },
]

var question = document.getElementById('question');
var currentcount = document.getElementById('currentcount');
var totalcount = document.getElementById('totalcount');
var completeQuestion = document.getElementById('completeQuestion');
var allOption = document.getElementById('allOption');
var button = document.getElementById('button');
var nextBtn = document.getElementById('next');
// var previousBtn = document.getElementById('previous');
var congOrBluck = document.getElementById('congOrBluck');
var eachQuestionNumber =0;
var totalmarks = questionArray.length *10;


currentindex = 0;

function init() {
    
    var index = currentindex + 1;
    currentcount.innerHTML = index
    totalcount.innerHTML = questionArray.length;

    completeQuestion.innerHTML = questionArray[currentindex].question

    // Now for options we need loop
    // console.log(questionArray[currentindex].options);
    for (let i = 0; i < questionArray[currentindex].options.length; i++) {
        var options = questionArray[currentindex].options[i];
        // console.log(`${questionArray[currentindex].correctAns}`);
        allOption.innerHTML += `<button class='options' " onclick="marks('${options}','${questionArray[currentindex].correctAns}')">
         ${options}</button>`;

    }

}
init();

function next() {
    allOption.innerHTML = '';
    
    if (currentindex == questionArray.length - 1) {
        var percentage = 0;
        nextBtn.className = "Disabled";
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('totalquestions').innerHTML = questionArray.length
        document.getElementById('totalmarkss').innerHTML = totalmarks;
       
        var obtainedMArks = document.getElementById('ObtainedMarks').innerHTML = eachQuestionNumber;
        
        // Percentage Of Student;
         percentage = (obtainedMArks/totalmarks)*100;
        // console.log(percentage ); 
        document.getElementById('percentage').innerHTML = (percentage.toFixed(2)) + " %";
        if(percentage.toFixed(2) >= 50){
            document.getElementById('status').innerHTML = 'Pass';
            document.getElementById('status').style="color:green"
            congOrBluck.innerHTML = ' Congratulations <i style="color:green; " class="fa-solid fa-circle-check"></i>';
        }else{
            document.getElementById('status').innerHTML = 'Fail';
            document.getElementById('status').style="color:red"
            congOrBluck.innerHTML = ' Better Luck Next Time  <i style="color:red " class="fa-solid fa-face-frown"></i>';
        }

    }else{
        currentindex++
    init();
    }

        // previousBtn.className = "Enabled";
        checkForPreIndex = currentindex;
     
        
        
}
// function previous() {
//     allOption.innerHTML = '';
//     currentindex--
//     init();
//     nextBtn.className = "Enabled";
//     if (currentcount.innerHTML == 1) {

//         previousBtn.className = "Disabled";
//         nextBtn.className = "Enabled"

//     }

// }

function marks(userSelect, correctAnswer) {
    // console.log(userSelect);
    // console.log(correctAnswer);

    if (userSelect == correctAnswer) {
        
        eachQuestionNumber += 10
        // console.log(eachQuestionNumber);
  
    }
}

// function off(){
//     console.log(document.getElementById('overlay').style.display = 'none');
   
// }