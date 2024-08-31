const questionPool = [
  {
    question: "Who invented the light bulb?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "James Watt",
    ],
    answer: 1, // Thomas Edison
  },
  {
    question: "Who is known as the father of the telephone?",
    options: [
      "Thomas Edison",
      "Guglielmo Marconi",
      "Alexander Graham Bell",
      "James Watt",
    ],
    answer: 2, // Alexander Graham Bell
  },
  {
    question: "Who invented the first successful airplane?",
    options: [
      "Wilbur and Orville Wright",
      "Henry Ford",
      "Alexander Graham Bell",
      "Leonardo da Vinci",
    ],
    answer: 0, // Wilbur and Orville Wright
  },
  {
    question: "Who invented the World Wide Web?",
    options: ["Steve Jobs", "Tim Berners-Lee", "Bill Gates", "Larry Page"],
    answer: 1, // Tim Berners-Lee
  },
  {
    question: "Who invented the first practical telephone?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Guglielmo Marconi",
      "James Watt",
    ],
    answer: 0, // Alexander Graham Bell
  },
  {
    question: "Who invented the first mechanical computer?",
    options: [
      "Charles Babbage",
      "Alan Turing",
      "Blaise Pascal",
      "John von Neumann"
    ],
    answer: 0, // Charles Babbage
  },
  {
    question: "Who invented the first practical telephone?",
    options: [
      "Nikola Tesla",
      "Alexander Graham Bell",
      "Thomas Edison",
      "Guglielmo Marconi"
    ],
    answer: 1, // Alexander Graham Bell
  },
  {
    question: "Who is credited with inventing the first successful polio vaccine?",
    options: [
      "Albert Sabin",
      "Edward Jenner",
      "Louis Pasteur",
      "Jonas Salk"
    ],
    answer: 3, // Jonas Salk
  },
  {
    question: "Who invented the steam engine?",
    options: [
      "James Watt",
      "Isaac Newton",
      "George Stephenson",
      "Michael Faraday"
    ],
    answer: 0, // James Watt
  },
  {
    question: "Who is the inventor of the first practical electric light bulb?",
    options: [
      "Nikola Tesla",
      "Alexander Graham Bell",
      "Thomas Edison",
      "George Westinghouse"
    ],
    answer: 2, // Thomas Edison
  },
  {
    question: "Who invented the printing press?",
    options: [
      "Johannes Gutenberg",
      "Benjamin Franklin",
      "Leonardo da Vinci",
      "Galileo Galilei"
    ],
    answer: 0, // Johannes Gutenberg
  },
  {
    question: "Who invented the first vaccine for smallpox?",
    options: [
      "Louis Pasteur",
      "Robert Koch",
      "Edward Jenner",
      "Alexander Fleming"
    ],
    answer: 2, // Edward Jenner
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Thomas Edison",
      "Elisha Gray"
    ],
    answer: 0, // Alexander Graham Bell
  },
  {
    question: "Who is known as the father of modern physics?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Niels Bohr",
      "Galileo Galilei"
    ],
    answer: 1, // Albert Einstein
  },
  {
    question: "Who invented the first practical automobile?",
    options: [
      "Henry Ford",
      "Karl Benz",
      "Gottlieb Daimler",
      "Rudolf Diesel"
    ],
    answer: 1, // Karl Benz
  }
];

const questions = [];
const totalQuestions = 5; // Number of questions for each quiz

function generateRandomQuestions() {
  const usedIndexes = new Set();

  while (questions.length < totalQuestions) {
    const randomIndex = Math.floor(Math.random() * questionPool.length);
    if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      questions.push(questionPool[randomIndex]);
    }
  }
}

generateRandomQuestions();

let currentQuestionIndex = 0;
let score = 0;
let timer; // Timer variable
let timeLeft = 20; // Time left for each question
let answerSubmitted = false; // Track if the answer has been submitted

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const options = document.getElementsByClassName("option");
  const scoreMessage = document.getElementById("score-message");
  const submitButton = document.getElementById("submit-button");

  if (currentQuestionIndex < questions.length) {
    questionElement.textContent = questions[currentQuestionIndex].question;
    for (let i = 0; i < options.length; i++) {
      options[i].textContent = questions[currentQuestionIndex].options[i];
      options[i].disabled = false; // Enable options
      options[i].classList.remove("selected", "correct", "incorrect"); // Remove previous styles
      options[i].style.backgroundColor = ""; // Reset inline styles
    }

    scoreMessage.textContent = "";
    scoreMessage.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    resetTimer();
    startTimer();

    submitButton.textContent = "Submit";
    answerSubmitted = false;
  } else {
    // No more questions, show the result
    document.getElementById("submit-button").disabled = true;
    clearInterval(timer);
    scoreMessage.textContent = `Quiz finished!`;
    showResultBox();
  }
}

// to start the timer
function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    document.getElementById(
      "timer"
    ).textContent = `Time left: ${timeLeft} seconds`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      timeUp();
    }
  }, 1000);
}

// to reset the timer
function resetTimer() {
  clearInterval(timer);
  timeLeft = 20;
  document.getElementById(
    "timer"
  ).textContent = `Time left: ${timeLeft} seconds`;
}

// to show that time is up
function timeUp() {
  if (!answerSubmitted) {
    const scoreMessage = document.getElementById("score-message");
    playSound("timeUp"); // Corrected the typo here
    scoreMessage.textContent = "Time's up!";
    scoreMessage.style.backgroundColor = "rgb(237, 107, 107)";
    scoreMessage.style.padding = "10px";
    scoreMessage.style.margin = "10px";
    document.getElementById("submit-button").disabled = true; // Disable submit button if time is up
  }
}

// Play option selection sound
function selectOption(optionIndex) {
  playSound("option");
  const options = document.getElementsByClassName("option");
  if (!answerSubmitted) {
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("selected");
    }
    options[optionIndex].classList.add("selected");
    options[optionIndex].setAttribute("data-selected", optionIndex);
  }
}

// Updated playSound function to include goodResult and badResult sounds
function playSound(type) {
  const timeUp = document.getElementById("timeUp");
  const error = document.getElementById("error");
  const optionSound = document.getElementById("option-sound");
  const submitSound = document.getElementById("submit-sound");
  const celebrationSound = document.getElementById("celebration-sound");
  const resultSound = document.getElementById("result-sound");
  const goodResultSound = document.getElementById("good-result-sound");
  const badResultSound = document.getElementById("bad-result-sound");
  const nextSound = document.getElementById("next-sound");

  // Stop all sounds before playing a new one
  timeUp.pause();
  error.pause();
  optionSound.pause();
  submitSound.pause();
  celebrationSound.pause();
  resultSound.pause();
  goodResultSound.pause();
  badResultSound.pause();
  nextSound.pause();

  // Reset sound to start
  timeUp.currentTime = 0;
  error.currentTime = 0;
  optionSound.currentTime = 0;
  submitSound.currentTime = 0;
  celebrationSound.currentTime = 0;
  resultSound.currentTime = 0;
  goodResultSound.currentTime = 0;
  badResultSound.currentTime = 0;
  nextSound.currentTime = 0;

  // Play the correct sound based on type
  if (type === "option") {
    optionSound.play();
  } else if (type === "submit") {
    submitSound.play();
  } else if (type === "celebration") {
    celebrationSound.play();
  } else if (type === "result") {
    resultSound.play();
  } else if (type === "goodResult") {
    goodResultSound.play();
  } else if (type === "badResult") {
    badResultSound.play();
  } else if (type === "error") {
    error.play();
  } else if (type === "next") {
    nextSound.play();
  } else if (type === "timeUp") {
    timeUp.play();
  }
}

// Update nextQuestion to play the "next" sound
function nextQuestion() {
  const scoreMessage = document.getElementById("score-message");

  if (answerSubmitted) {
    playSound("next"); // Play the new "next" sound when the next question appears
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("submit-button").disabled = true;
      clearInterval(timer);
      scoreMessage.textContent = `Quiz finished!`;
      showResultBox();
    }
  }
}

// Play submit sound and celebration sound if correct answer
function submitAnswer() {
  const selectedOption = document.querySelector(".option.selected");
  const scoreMessage = document.getElementById("score-message");
  const submitButton = document.getElementById("submit-button");
  const scoreUpdates = document.getElementById("score-box");

  if (selectedOption && !answerSubmitted) {
    const selectedIndex = parseInt(
      selectedOption.getAttribute("data-selected"),
      10
    );
    const correctAnswer = questions[currentQuestionIndex].answer;
    const correctOptionText =
      questions[currentQuestionIndex].options[correctAnswer];

    playSound("submit"); // Play submit sound

    if (selectedIndex === correctAnswer) {
      playSound("celebration"); // Play celebration sound for correct answer
      score++;
      selectedOption.classList.add("correct");
      scoreMessage.textContent = "Correct!";
      scoreMessage.style.backgroundColor = "#0056b3";
      scoreUpdates.textContent = `${score}/${questions.length}`;
    } else {
      playSound("error");
      selectedOption.classList.add("incorrect");
      scoreMessage.textContent = `Wrong answer! The correct answer is ${correctOptionText}`;
      scoreUpdates.textContent = `${score}/${questions.length}`;
      scoreMessage.style.backgroundColor = "#0056b3";
    }

    answerSubmitted = true;
    if (currentQuestionIndex === questions.length - 1) {
      submitButton.textContent = "Check Result";
    } else {
      submitButton.textContent = "Next";
    }
  }
}

// to trigger the functions of submit and next questions
document.getElementById("submit-button").onclick = function () {
  if (!answerSubmitted) {
    submitAnswer();
  } else {
    nextQuestion();
  }
};

window.onload = loadQuestion;

// Play sound when checking result based on score percentage
function showResultBox() {
  const resultBox = document.querySelector(".result-box");
  const blurBackground = document.querySelector(".blur-background");
  const scorePercentage = (score / questions.length) * 100;
  const progressValue = document.querySelector(".progress-value");
  const circularProgress = document.querySelector(".circular-progress");
  const text = document.querySelector(".score-text");

  if (scorePercentage > 60) {
    playSound("goodResult"); // Play good result sound if score is more than 60%
    party();
  } else {
    playSound("badResult"); // Play bad result sound if score is 60% or less
    loseEffect();
  }

  blurBackground.classList.add("active");
  resultBox.style.opacity = "1";
  resultBox.style.pointerEvents = "all";

  progressValue.textContent = `${Math.round(scorePercentage)}%`;

  let progressStartValue = 0;
  let progressEndValue = scorePercentage;

  let progressInterval = setInterval(() => {
    progressStartValue++;
    circularProgress.style.background = `conic-gradient(#c40094 ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, .1) 0deg)`;

    if (progressStartValue >= progressEndValue) {
      clearInterval(progressInterval);
    }
  }, 20);

  text.textContent = `Your score ${score} out of ${questions.length}`;
}

// Function to start the confetti effect
const party = () => {
  confetti({
    particleCount: 100, // Number of confetti particles
    spread: 70, // Spread angle
    origin: { y: 0.6 }, // Start a little lower than the top of the screen
  });

  // Optional: You can make it continuous for a few seconds
  const duration = 10 * 1000; // 3 seconds
  const end = Date.now() + duration;

  const interval = setInterval(() => {
    if (Date.now() > end) {
      return clearInterval(interval);
    }
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      origin: {
        x: Math.random(),
        // Since the confetti spawns from the top, only randomize the x-coordinate
        y: Math.random() - 0.2,
      },
      colors: ["#bb0000", "#ffffff"],
    });
  }, 250); // Trigger every 250ms

  // Automatically stop the confetti after the duration
  setTimeout(() => {
    clearInterval(interval);
  }, duration);
};

// Function to create a losing effect
function loseEffect() {
  // Dark confetti effect
  confetti({
    particleCount: 50,
    spread: 70,
    origin: { y: 0.6 },
    colors: [
      "#555555",
      "#333333",
      "#777777",
      "#28a745",
      "goldenrod",
      "rgb(193, 31, 193)",
    ],
  });

  // Screen flash effect
  const body = document.querySelector("body");
  body.style.transition = "background-color 0.5s ease";
  body.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
  setTimeout(() => {
    body.style.backgroundColor = "";
  }, 500);
}

function tryAgain() {
  console.log("Try Again button clicked");
  stopAllSounds(); // Stop all sounds
  clearEffects(); // Clear confetti and reset background

  score = 0;
  currentQuestionIndex = 0;
  questions.length = 0; // Clear the existing questions array
  generateRandomQuestions(); // Generate a new set of questions

  console.log("Questions generated:", questions); // Log the new set of questions
  loadQuestion();
  document.querySelector(".result-box").style.display = "none"; // Hide result box
  document.getElementById("submit-button").disabled = false; // Enable submit button
}
