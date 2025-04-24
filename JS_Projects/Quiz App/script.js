document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinking Text and Language",
      ],
      correct: "Hyper Text Markup Language",
    },
    {
      question: "Which company developed JavaScript?",
      choices: ["Mozilla", "Netscape", "Google", "Microsoft"],
      correct: "Netscape",
    },
    {
      question: "What is the output of 'typeof NaN' in JavaScript?",
      choices: ["number", "NaN", "undefined", "object"],
      correct: "number",
    },
    {
      question: "Which of the following is a JavaScript framework?",
      choices: ["Laravel", "Django", "React", "Spring"],
      correct: "React",
    },
    {
      question: "Which symbol is used for single-line comments in JavaScript?",
      choices: ["/* */", "#", "//", "<!-- -->"],
      correct: "//",
    },
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: ["<js>", "<script>", "<javascript>", "<code>"],
      correct: "<script>",
    },
    {
      question:
        "Which method is used to convert JSON data to a JavaScript object?",
      choices: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.toObject()",
        "JSON.decode()",
      ],
      correct: "JSON.parse()",
    },
    {
      question: "How do you create a function in JavaScript?",
      choices: [
        "function:myFunction()",
        "function = myFunction()",
        "function myFunction()",
        "create myFunction()",
      ],
      correct: "function myFunction()",
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      choices: ["const", "var", "let", "constant"],
      correct: "const",
    },
    {
      question: "What is the correct way to write an array in JavaScript?",
      choices: [
        "let colors = 'red', 'green', 'blue'",
        "let colors = (1:'red', 2:'green', 3:'blue')",
        "let colors = ['red', 'green', 'blue']",
        "let colors = {red, green, blue}",
      ],
      correct: "let colors = ['red', 'green', 'blue']",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; //clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }

  function selectAnswer(choices) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choices === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
