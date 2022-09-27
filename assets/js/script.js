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

function startQuiz() {

    titleScreen.remove()

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

    quizContainer.innerHTML = output.join('');
console.log(output)
}

function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;
  
    quizQuestions.forEach( (currentQuestion, questionNumber) => {
  

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }

      else{
         answerContainers[questionNumber].style.color = 'red';
        window.alert("Please select an answer!")
      }
      console.log(questionNumber)
    });
  
    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
  }
  
  const answerContainers = quizContainer.querySelectorAll('.answers');
  
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', showResults);
