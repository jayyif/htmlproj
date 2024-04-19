const quizData = [
  {
    question: 'who won the champions league 2020-2021 ?',
    options: ['Chelsea', 'Real Madrid', 'Manchester City', 'Bayern'],
    answer: 'Chelsea',
  },
  {
    question: 'How many champion league trophies does Arsenal have ? ',
    options: ['1', '3', '0', '2'],
    answer: '0',
  },
  {
    question: 'Which country won the FIFA World Cup in 2018?',
    options: ['Brazil', 'Germany', 'France', 'Argentina'],
    answer: 'France',
  },
  {
    question: 'How many goals did Erling Haaland score in his first season in the premiere league ?',
    options: ['20', '42', '32', '36'],
    answer: '36',
  },
  {
    question: 'who the all time premiere league top scorer ?',
    options: [
      'Harry Kane',
      'Alan Shearer',
      'Cristiano Ronaldo',
      'Thierry Henry',
    ],
    answer: 'Alan Shearer',
  },
  {
    question: 'who won the 2021 Euros ?',
    options: ['England', 'France', 'Italy', 'Germany'],
    answer: 'Italy',
  },
  {
    question: 'How many Baloon dOr does Lionel Messi have ?',
    options: [
      '5',
      '8',
      '9',
      '6',
    ],
    answer: '8',
  },
  {
    question: 'who is the most expensive player in footbal ?',
    options: ['Mbappe', 'Haaland', 'Neymar', 'Griezman'],
    answer: 'Neymar',
  },
  {
    question: 'who won the first ever world cup ?',
    options: [
      'Uruguay',
      'Brazil',
      'Spain',
      'Germany',
    ],
    answer: 'Uruguay',
  },
  {
    question: 'who won the last afcon ',
    options: ['Cameroon', 'Nigeria', 'Ivory Coast', 'Senegal'],
    answer: 'Ivory Coast',
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  let resultContent = '';

  if (incorrectAnswersHtml === '') {
    resultContent = '<p>Winner Winner Chicken Dinner!</p>';
    var audio = new Audio('champions.mp3');
    audio.play();
  } else {
    resultContent = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  resultContainer.innerHTML = resultContent;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();
function displayLeaderboard() {
  
      const leaderboardContainer = document.getElementById("leaderboard");

  // Sort scores in descending order
  const sortedScores = scores.sort((a, b) => b.score - a.score);

  // Display the top scores
  leaderboardContainer.innerHTML = "<h2>Leaderboard</h2>";
  sortedScores.forEach((entry, index) => {
      leaderboardContainer.innerHTML += `<p>${index + 1}. ${entry.name}: ${entry.score}</p>`;
  });
}