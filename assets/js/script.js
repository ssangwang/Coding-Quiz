function startQuiz() {

    const output = [];

    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = [];

            for(letter in currentQuestion.answers){

                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : 
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class ="question"> ${currentQuestion.question} </div>
                <div class ="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output[[Math.floor(Math.random()*5)]]
console.log(output)
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('answers');
const submitButton = document.getElementById('submit');
const startButton = document.getElementById('start');
const quizQuestions = [
    {
        question: "this is a test question",
        answers: {
            a: "somtjing",
            b: "something else",
            c: "something elser",
        },
        correctAnswer: "c",
    },

    {
        question: "this is a test question",
        answers: {
            a: "somtjing1",
            b: "something else1",
            c: "something elser1",
        },
        correctAnswer: "c",
    },

    {
        question: "this is a test question",
        answers: {
            a: "somtjing2",
            b: "something else2",
            c: "something elser2",
        },
        correctAnswer: "c",
    },

    {
        question: "this is a test question",
        answers: {
            a: "somtjing3",
            b: "something else3",
            c: "something elser3",
        },
        correctAnswer: "c",
    },

    {
        question: "this is a test question",
        answers: {
            a: "somtjing4",
            b: "something else4",
            c: "something elser4",
        },
        correctAnswer: "c",
    },

]

startButton.addEventListener('click', startQuiz)
