const questions = [
    {
        question:"Which is greatest cricket player in the world?",
        answers:[
            {text:"Rohit Sharma",correct:false},
            {text:"MS. Dhoni",correct:false},
            {text:"Virat Kohli",correct:true},
            {text:"Sachin Tendulkar",correct:false},
        ]
    },
    {
        question:"Which is largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
        ]
    },
    {
        question:"India's no 1 vlogger?",
        answers:[
            {text:"saurav joshi",correct:true},
            {text:"carry minaty",correct:false},
            {text:"piyush joshi",correct:false},
            {text:"techno gamer",correct:false},
        ]
    },
    {
        question:"Which is the capital of the India?",
        answers:[
            {text:"Kanpur",correct:false},
            {text:"Lucknow",correct:false},
            {text:"New Delhi",correct:true},
            {text:"Agra",correct:false},
        ]
    }
];
const question = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const exit = document.querySelector('#exit');
let currentquestionIndex = 0;
let score =0;

function startQuiz(){
    currentquestionIndex=0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let CurrentQuestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex+1;
    // It will update which id is question 
    question.innerHTML = questionNo+".  "+CurrentQuestion.question;
    CurrentQuestion.answers.forEach(answer =>{
        const b = document.createElement('button');
        b.innerHTML = answer.text;
        b.classList.add('btn');  // add class name 
        answerButtons.appendChild(b);
        if(answer.correct){
            b.dataset.correct = answer.correct;
        }
        b.addEventListener('click',selectAnswer);
    })
}


function resetState(){
    exit.style.display ="none"
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        // console.log(answerButtons.firstChild);
        answerButtons.removeChild(answerButtons.firstChild);   
    }

}

function selectAnswer(e){
    const selectbtn = e.target;
    const isCorrect = selectbtn.dataset.correct === "true";
    if(isCorrect){
        selectbtn.classList.add('correct');
        score++;
    } 
    else{
        selectbtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    nextButton.style.display = 'block';

}


function showScore(){
    resetState();
    question.innerHTML = `You Score ${score} out of ${questions.length}!`
    nextButton.innerHTML = "play again";
    nextButton.style.display = 'block';
    exit.style.display = 'block';
}
function handleNextButton(){
    currentquestionIndex++;
    if(currentquestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
exit.addEventListener('click',()=>{
    var c=document.getElementById('an');
    c.innerHTML = "Thank you!!";
    c.style.fontSize = "40px";
    c.style.margin = '240px auto '
    
})


nextButton.addEventListener('click',()=>{
    if(currentquestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})


startQuiz();
