var quizEl = document.getElementById('quiz');
var startButton = document.getElementById('start');
var timerEl = document.getElementById('countdown');
var score = document.getElementById('score');
var points = 0;

const questions = [
  {
    title: 'what is 1+1',
    answers: {
      a: '2',
      b: '3',
      c: '4',
    },
    correct: 'A',
  },
  {
    title: 'what is 2+2',
    answers: {
      a: '2',
      b: '3',
      c: '4',
    },
    correct: 'C',
  },
  {
    title: 'what is 3+3',
    answers: {
      a: '2',
      b: '6',
      c: '9',
    },
    correct: 'B',
  },
  {
    title: 'what is 3+1',
    answers: {
      a: '332',
      b: '3223',
      c: '4',
    },
    correct: 'C',
  },
  {
    title: 'what is 11+1',
    answers: {
      a: '12',
      b: '343',
      c: '445',
    },
    correct: 'A',
  },
  {
    title: 'what is 14+1',
    answers: {
      a: '2',
      b: '15',
      c: '4',
    },
    correct: 'B',
  },
]

console.log(questions);



startButton.addEventListener("click", function startQuiz() {

  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);

for(let i = 0; i < questions.length; i--){
    var answer = questions[i].correct;
    quizEl.innerHTML = `
    <h1> ${questions[i].title} </h1>
    <button id='A' value='A'> ${questions[i].answers.a} </button>
    <button id='B' value='B'> ${questions[i].answers.b} </button>
    <button id='C' value='C'> ${questions[i].answers.c} </button>
    `

    const buttonA = document.getElementById('A');
    const buttonB = document.getElementById('B');
    const buttonC = document.getElementById('C');

    

    function answerBtnA() {
      if (document.getElementById('A').value === answer) {
        nextQuestionC();
      } else {
        nextQuestionI();
      }
    }

    function answerBtnB() {
      if (document.getElementById('B').value === answer) {
        nextQuestionC();
      } else {
        nextQuestionI();
      }
    }

    function answerBtnC() {
      if (document.getElementById('C').value === answer) {
        nextQuestionC();
      } else {
        nextQuestionI();
      }
    }

    buttonA.addEventListener("click", answerBtnA)
    buttonB.addEventListener("click", answerBtnB)
    buttonC.addEventListener("click", answerBtnC)

    function nextQuestionC() {
      var nextTime = 2;
      var correctInterval = setInterval(function () {
        if (nextTime > 1) {
          quizEl.innerHTML = `<h1> Correct </h1>`
          nextTime--;
        } else {
          clearInterval(correctInterval);
          quizEl.innerHTML = `
          <h1> ${questions[i++].title} </h1>
          <button id='A' value='A'> ${questions[i].answers.a} </button>
          <button id='B' value='B'> ${questions[i].answers.b} </button>
          <button id='C' value='C'> ${questions[i].answers.c} </button>
          `
          const buttonA = document.getElementById('A');
          const buttonB = document.getElementById('B');
          const buttonC = document.getElementById('C');
          buttonA.addEventListener("click", answerBtnA)
          buttonB.addEventListener("click", answerBtnB)
          buttonC.addEventListener("click", answerBtnC)
        }
      }, 1000);
    }

    function nextQuestionI() {
      var nextTime = 2;
      var correctInterval = setInterval(function () {
        if (nextTime > 1) {
          quizEl.innerHTML = `<h1> Incorrect </h1>`
          nextTime--;
        } else {
          clearInterval(correctInterval);
          quizEl.innerHTML = `
          <h1> ${questions[i].title} </h1>
          <button id='A' value='A'> ${questions[i].answers.a} </button>
          <button id='B' value='B'> ${questions[i].answers.b} </button>
          <button id='C' value='C'> ${questions[i].answers.c} </button>
          `
          const buttonA = document.getElementById('A');
          const buttonB = document.getElementById('B');
          const buttonC = document.getElementById('C');
          buttonA.addEventListener("click", answerBtnA)
          buttonB.addEventListener("click", answerBtnB)
          buttonC.addEventListener("click", answerBtnC)
        }
      }, 1000);

    }
  }
  
})

function endQuiz() {

  quizEl.innerHTML = `<h1> Quiz Finished! </h1>`

}

