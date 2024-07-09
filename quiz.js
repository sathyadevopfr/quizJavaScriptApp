// const questions = [
//     {
//         question: `which is largest animal in the world`,
//         answers: [
//             { text: 'shark', correct: false },
//             { text: 'blue whale', correct: true },
//             { text: 'elephant', correct: false },
//             { text: 'lion', correct: false },
//         ]
//     },
//     {
//         question: `which is the largest continent in the world`,
//         answers: [
//             { text: 'asia', correct: true },
//             { text: 'austrila', correct: false },
//             { text: 'america', correct: false },
//             { text: 'europe', correct: false },
//         ]
//     },
//     {
//         question: 'how many states are thera in india',
//         answers: [
//             { text: 30, correct: false },
//             { text: 27, correct: false },
//             { text: 29, correct: true },
//             { text: 25, correct: false },
//         ]
//     },
//     {
//         question: `what is the captial of india`,
//         answers: [
//             { text: 'Karachi', correct: false },
//             { text: 'Bangalore', correct: false },
//             { text: 'Mumbai', correct: false },
//             { text: 'Delhi', correct: true },
//         ]
//     }
// ];
// const questionElement = document.getElementById('question')
// const answerButton = document.getElementById('answer-buttons')
// const nextButton = document.getElementById('next-btn')
// let currentQuestionIndex = 0;
// let score = 0;

// const startQuiz = () => {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next"
//     showQuestion();
// }
// let showQuestion = () => {
//     resetState()
//     let currentQuestion = questions[currentQuestionIndex]
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + " ." + currentQuestion.question
    
//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button")
//         button.innerHTML = answer.text;
//         button.classList.add('btn')
//         answerButton.appendChild(button)
//         if (answer.correct) {
//             button.dataset.correct=answer.correct
//         }
//         button.addEventListener('click',selectAnswer)
//     })
// }
// const resetState = () => {
//     nextButton.style.display = 'none';
//     while (answerButton.firstChild) {
//         answerButton.removeChild(answerButton.firstChild)
//     }
// }
// const selectAnswer = (e) => {
//     const seleBtn = e.target;
//     const isCorrect = seleBtn.dataset.correct === "true";
//     // isCorrect? seleBtn.classList.add("correct"):seleBtn.classList.add("incorrect")
//     if (isCorrect) {
//         seleBtn.classList.add("correct") 
//         score++
//     }
//     else {
//         seleBtn.classList.add("incorrect")
//     }
//     Array.from(answerButton.children).forEach(button => {
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct")
//         }
//         button.disabled = true;
//     })
//     nextButton.style.display = "block"
// }
// let showScore = () => {
//     resetState();
//     questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`
//     nextButton.innerHTML = 'play again'
//     nextButton.style.display = "block"
// }
// let handleNextButton = () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     }
//     else {
//         showScore();
//     }
// }

// nextButton.addEventListener('click', () => {
//     if (currentQuestionIndex < questions.length) {
//         handleNextButton();
//     }
//     else {
//     //   startQuiz();  
//     }
// })
// startQuiz();

const questions = [
    {
        question: `which is largest animal in the world`,
        answers: [
            { text: 'shark', correct: false },
            { text: 'blue whale', correct: true },
            { text: 'elephant', correct: false },
            { text: 'lion', correct: false },
        ]
    },
    {
        question: `which is the largest continent in the world`,
        answers: [
            { text: 'asia', correct: true },
            { text: 'austrila', correct: false },
            { text: 'america', correct: false },
            { text: 'europe', correct: false },
        ]
    },
    {
        question: 'how many states are thera in india',
        answers: [
            { text: 30, correct: false },
            { text: 27, correct: false },
            { text: 29, correct: true },
            { text: 25, correct: false },
        ]
    },
    {
        question: `what is the captial of india`,
        answers: [
            { text: 'Karachi', correct: false },
            { text: 'Bangalore', correct: false },
            { text: 'Mumbai', correct: false },
            { text: 'Delhi', correct: true },
        ]
    }
];
//defining the variables for the html elements
let questionElement = document.getElementById('question')
let answerButtons = document.getElementById('answer-buttons')
let nextButton = document.getElementById('next-btn')
//defining variables for score and currentQuestionIndex
let currentQuestionIndex = 0;
let score = 0;
const startQuiz = () => {
    currentQuestionIndex = 0; 
    score = 0;
    nextButton.innerHTML = 'Next'
    showQuestion(); // this function will display the questions
}

const showQuestion = () => {
    resetState();
    let presentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + " . " + presentQuestion.question
    
    presentQuestion.answers.forEach(ans => {
        const button = document.createElement('button') 
        button.innerHTML = ans.text;
        button.classList.add('btn')
        answerButtons.appendChild(button)
        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener('click',selectAnswer)
    })
    }
let resetState = () => {
    nextButton.style.display = 'none'
    while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
    }
}

let selectAnswer = (e) => {
    let selectedButton = e.target;
    let isCorrect = selectedButton.dataset.correct === "true"
    if (isCorrect) {
        selectedButton.classList.add('correct')
        score++
    }
    else {
         selectedButton.classList.add('incorrect')
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct')
        }
        button.disabled = true;
    })
    nextButton.style.display='block'
}
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
          currentQuestionIndex++
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            }
            else {
                 resetState()
                    questionElement.innerHTML = `Your Score is ${score} out od ${questions.length}!`
                nextButton.innerHTML = 'play again'
                nextButton.style.display='block'
     }
        
        
    }
    else {
            startQuiz();
    }
   
})
startQuiz();