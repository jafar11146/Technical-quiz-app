
const questionBank = [
  // ================= PYTHON: 15 QUESTIONS =================
  {
    topic: "Python",
    question: "Which keyword defines a function in Python?",
    options: ["function", "def", "func", "define"],
    answer: 1,
    explanation: "The def keyword defines a function."
  },
  {
    topic: "Python",
    question: "Which data type represents True or False?",
    options: ["String", "List", "Boolean", "Dictionary"],
    answer: 2,
    explanation: "The bool type represents True or False."
  },
  {
    topic: "Python",
    question: "What is the result of 2 ** 3?",
    options: ["6", "8", "9", "5"],
    answer: 1,
    explanation: "The ** operator performs exponentiation: 2³ = 8."
  },
  {
    topic: "Python",
    question: "Which symbol begins a single-line comment?",
    options: ["//", "#", "/*", "<!--"],
    answer: 1,
    explanation: "Python uses # for single-line comments."
  },
  {
    topic: "Python",
    question: "Which collection stores key-value pairs?",
    options: ["Tuple", "Set", "List", "Dictionary"],
    answer: 3,
    explanation: "A dictionary maps keys to values."
  },
  {
    topic: "Python",
    question: "What does len([10, 20, 30]) return?",
    options: ["2", "3", "10", "30"],
    answer: 1,
    explanation: "The list contains three items."
  },
  {
    topic: "Python",
    question: "Which loop iterates over items in a list?",
    options: ["repeat", "foreach", "for", "iterate"],
    answer: 2,
    explanation: "A for loop can iterate over a list."
  },
  {
    topic: "Python",
    question: "What is 10 // 3 in Python?",
    options: ["3", "3.33", "1", "4"],
    answer: 0,
    explanation: "Floor division gives 3."
  },
  {
    topic: "Python",
    question: "Which method adds an item to the end of a list?",
    options: ["add()", "push()", "append()", "insertEnd()"],
    answer: 2,
    explanation: "list.append(item) adds an item to the end."
  },
  {
    topic: "Python",
    question: "Which built-in function converts a value to an integer?",
    options: ["str()", "int()", "float()", "bool()"],
    answer: 1,
    explanation: "int() converts a suitable value to an integer."
  },
  {
    topic: "Python",
    question: "What does range(3) produce when iterated?",
    options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3", "3 only"],
    answer: 1,
    explanation: "range(3) produces 0, 1, and 2."
  },
  {
    topic: "Python",
    question: "Which keyword handles an exception?",
    options: ["catch", "except", "error", "handle"],
    answer: 1,
    explanation: "Python uses except in a try/except block."
  },
  {
    topic: "Python",
    question: "Which brackets create a list literal?",
    options: ["()", "{}", "[]", "<>"],
    answer: 2,
    explanation: "Square brackets create a list literal."
  },
  {
    topic: "Python",
    question: "What is the result of 'Py' + 'thon'?",
    options: ["Py thon", "Python", "Py+thon", "Error"],
    answer: 1,
    explanation: "The + operator concatenates these strings into Python."
  },
  {
    topic: "Python",
    question: "Which value represents the absence of a value in Python?",
    options: ["undefined", "empty", "NULL", "None"],
    answer: 3,
    explanation: "Python uses None to represent the absence of a value."
  },

  // ================= SQL: 15 QUESTIONS =================
  {
    topic: "SQL",
    question: "Which SQL statement retrieves data?",
    options: ["GET", "OPEN", "SELECT", "FETCH ALL"],
    answer: 2,
    explanation: "SELECT retrieves data from database tables."
  },
  {
    topic: "SQL",
    question: "Which clause filters rows using a condition?",
    options: ["ORDER BY", "WHERE", "GROUP BY", "SELECT"],
    answer: 1,
    explanation: "WHERE filters rows according to a condition."
  },
  {
    topic: "SQL",
    question: "Which statement inserts a new row?",
    options: ["INSERT INTO", "UPDATE", "ALTER TABLE", "CREATE VIEW"],
    answer: 0,
    explanation: "INSERT INTO adds rows to a table."
  },
  {
    topic: "SQL",
    question: "Which aggregate function counts rows?",
    options: ["SUM()", "TOTAL()", "COUNT()", "NUMBER()"],
    answer: 2,
    explanation: "COUNT(*) counts rows in a query result."
  },
  {
    topic: "SQL",
    question: "Which clause sorts query results?",
    options: ["SORT", "ORDER BY", "ARRANGE", "GROUP BY"],
    answer: 1,
    explanation: "ORDER BY sorts results."
  },
  {
    topic: "SQL",
    question: "Which statement modifies existing rows?",
    options: ["INSERT", "UPDATE", "CREATE", "SELECT"],
    answer: 1,
    explanation: "UPDATE changes existing rows."
  },
  {
    topic: "SQL",
    question: "Which keyword removes duplicate rows from a SELECT result?",
    options: ["UNIQUE ONLY", "FILTER", "DISTINCT", "DIFFERENT"],
    answer: 2,
    explanation: "DISTINCT returns unique selected row combinations."
  },
  {
    topic: "SQL",
    question: "Which statement deletes rows from a table?",
    options: ["REMOVE", "DROP ROW", "DELETE", "CLEAR"],
    answer: 2,
    explanation: "DELETE removes rows from a table."
  },
  {
    topic: "SQL",
    question: "Which clause groups rows for aggregate calculations?",
    options: ["GROUP BY", "ORDER BY", "WHERE", "DISTINCT"],
    answer: 0,
    explanation: "GROUP BY forms groups for aggregate calculations."
  },
  {
    topic: "SQL",
    question: "Which operator matches a pattern using wildcards?",
    options: ["MATCHES", "LIKE", "EQUALS", "PATTERN"],
    answer: 1,
    explanation: "LIKE supports pattern matching with wildcards such as % and _."
  },
  {
    topic: "SQL",
    question: "Which constraint uniquely identifies each table row?",
    options: ["FOREIGN KEY", "DEFAULT", "PRIMARY KEY", "CHECK"],
    answer: 2,
    explanation: "A primary key uniquely identifies each row and cannot be NULL."
  },
  {
    topic: "SQL",
    question: "Which join returns rows with matching values in both tables?",
    options: ["INNER JOIN", "CROSS JOIN", "LEFT JOIN", "FULL JOIN"],
    answer: 0,
    explanation: "INNER JOIN returns rows satisfying the join condition in both tables."
  },
  {
    topic: "SQL",
    question: "Which function calculates the total of numeric values?",
    options: ["COUNT()", "AVG()", "MAX()", "SUM()"],
    answer: 3,
    explanation: "SUM() adds numeric values."
  },
  {
    topic: "SQL",
    question: "Which condition checks for missing SQL values?",
    options: ["= NULL", "IS NULL", "== NULL", "EQUALS NULL"],
    answer: 1,
    explanation: "Use IS NULL to test for NULL values."
  },
  {
    topic: "SQL",
    question: "Which command creates a new table?",
    options: ["NEW TABLE", "ADD TABLE", "CREATE TABLE", "INSERT TABLE"],
    answer: 2,
    explanation: "CREATE TABLE defines a new database table."
  },

  // ================= RUST: 15 QUESTIONS =================
  {
    topic: "Rust",
    question: "Which keyword declares an immutable variable binding?",
    options: ["var", "let", "constvar", "define"],
    answer: 1,
    explanation: "let declares a binding that is immutable by default."
  },
  {
    topic: "Rust",
    question: "Which keyword makes a variable binding mutable?",
    options: ["change", "var", "mut", "mutable"],
    answer: 2,
    explanation: "The mut keyword allows a binding to be mutated."
  },
  {
    topic: "Rust",
    question: "Which function is the usual entry point of a Rust binary?",
    options: ["start()", "main()", "run()", "init()"],
    answer: 1,
    explanation: "A Rust binary normally starts execution in main()."
  },
  {
    topic: "Rust",
    question: "Which macro commonly prints text with a newline?",
    options: ["print!", "println!", "write!", "display!"],
    answer: 1,
    explanation: "println! prints formatted text followed by a newline."
  },
  {
    topic: "Rust",
    question: "Which type represents an unsigned 32-bit integer?",
    options: ["i32", "f32", "u32", "usize"],
    answer: 2,
    explanation: "u32 is an unsigned 32-bit integer type."
  },
  {
    topic: "Rust",
    question: "Which keyword declares a function?",
    options: ["func", "function", "fn", "def"],
    answer: 2,
    explanation: "Rust uses fn to declare functions."
  },
  {
    topic: "Rust",
    question: "Which collection stores a growable sequence of values?",
    options: ["Vector (Vec)", "Tuple", "Scalar", "Char"],
    answer: 0,
    explanation: "Vec<T> is a growable, heap-allocated sequence."
  },
  {
    topic: "Rust",
    question: "What does the String type store?",
    options: [
      "Only one character",
      "Growable owned UTF-8 text",
      "Only numeric values",
      "A Boolean value"
    ],
    answer: 1,
    explanation: "String is an owned, growable UTF-8 string type."
  },
  {
    topic: "Rust",
    question: "Which keyword starts conditional branching?",
    options: ["when", "switch", "if", "condition"],
    answer: 2,
    explanation: "Rust uses if for conditional expressions."
  },
  {
    topic: "Rust",
    question: "Which keyword starts a loop that continues indefinitely unless stopped?",
    options: ["repeat", "loop", "forever", "whiletrue"],
    answer: 1,
    explanation: "loop repeats until it exits, such as with break."
  },
  {
    topic: "Rust",
    question: "Which type represents a value that may be Some or None?",
    options: ["Result", "Option", "MaybeValue", "Either"],
    answer: 1,
    explanation: "Option<T> represents an optional value using Some(T) or None."
  },
  {
    topic: "Rust",
    question: "Which enum is commonly used to represent success or failure?",
    options: ["Option", "Status", "Result", "OutcomeValue"],
    answer: 2,
    explanation: "Result<T, E> represents success with Ok or failure with Err."
  },
  {
    topic: "Rust",
    question: "What is ownership primarily designed to help manage?",
    options: [
      "HTML page layout",
      "Memory and resource lifetimes",
      "SQL table names",
      "Browser animations"
    ],
    answer: 1,
    explanation: "Ownership rules govern values and help manage memory safely."
  },
  {
    topic: "Rust",
    question: "Which symbol introduces a line comment in Rust?",
    options: ["#", "//", "<!--", "%%"],
    answer: 1,
    explanation: "Rust uses // for line comments."
  },
  {
    topic: "Rust",
    question: "Which tool is Rust's package manager and build tool?",
    options: ["pip", "npm", "cargo", "gem"],
    answer: 2,
    explanation: "Cargo manages Rust packages, dependencies, and builds."
  }
];

const TOTAL_QUESTIONS = 30;
const LANGUAGES = ["Python", "SQL", "Rust"];

const questionNumber = document.getElementById("questionNumber");
const topic = document.getElementById("topic");
const questionText = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const progressFill = document.getElementById("progressFill");
const progressTrack = document.getElementById("progressTrack");
const answeredCount = document.getElementById("answeredCount");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const quizCard = document.getElementById("quizCard");
const resultCard = document.getElementById("resultCard");
const resultTitle = document.getElementById("resultTitle");
const resultScore = document.getElementById("resultScore");
const resultPercentage = document.getElementById("resultPercentage");
const resultMessage = document.getElementById("resultMessage");
const resultFill = document.getElementById("resultFill");
const resultIcon = document.getElementById("resultIcon");
const topicResults = document.getElementById("topicResults");
const restartBtn = document.getElementById("restartBtn");

let questions = [];
let currentQuestion = 0;
let score = 0;
let hasAnswered = false;
let topicScores = {};

function shuffle(array) {
  // Fisher-Yates shuffle: randomly reorders an array in place.
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function createQuiz() {
  questions = [];

  // Select 10 random questions from each language.
  LANGUAGES.forEach(language => {
    const pool = questionBank
      .filter(question => question.topic === language);

    const selected = shuffle([...pool]).slice(0, 10);

    // Shuffle answer choices and keep the correct answer aligned.
    selected.forEach(question => {
      const correctAnswer = question.options[question.answer];

      const shuffledOptions = shuffle(
        question.options.map((label, index) => ({
          label,
          wasCorrect: index === question.answer
        }))
      );

      questions.push({
        ...question,
        options: shuffledOptions.map(option => option.label),
        answer: shuffledOptions.findIndex(option => option.wasCorrect)
      });

      // Ensure the original answer was present in the question.
      if (!correctAnswer) {
        throw new Error("Invalid question answer.");
      }
    });
  });

  // Mix Python, SQL and Rust questions together.
  shuffle(questions);

  currentQuestion = 0;
  score = 0;
  hasAnswered = false;

  topicScores = {
    Python: { correct: 0, total: 0 },
    SQL: { correct: 0, total: 0 },
    Rust: { correct: 0, total: 0 }
  };

  questions.forEach(question => {
    topicScores[question.topic].total++;
  });

  resultCard.hidden = true;
  quizCard.hidden = false;

  renderQuestion();
}

function renderQuestion() {
  hasAnswered = false;

  const q = questions[currentQuestion];

  questionNumber.textContent =
    `Question ${currentQuestion + 1} of ${TOTAL_QUESTIONS}`;

  topic.textContent = q.topic;
  questionText.textContent = q.question;

  answeredCount.textContent =
    `${currentQuestion} of ${TOTAL_QUESTIONS} answered`;

  progressFill.style.width =
    `${(currentQuestion / TOTAL_QUESTIONS) * 100}%`;

  progressTrack.setAttribute("aria-valuenow", currentQuestion);

  feedback.textContent = "";
  nextBtn.disabled = true;

  nextBtn.textContent =
    currentQuestion === TOTAL_QUESTIONS - 1
      ? "See Results →"
      : "Next Question →";

  optionsContainer.replaceChildren();

  q.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "option-btn";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

    button.addEventListener("click", () => selectAnswer(index));

    optionsContainer.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  if (hasAnswered) return;

  hasAnswered = true;

  const q = questions[currentQuestion];
  const optionButtons =
    optionsContainer.querySelectorAll(".option-btn");

  const isCorrect = selectedIndex === q.answer;

  if (isCorrect) {
    score++;
    topicScores[q.topic].correct++;
    feedback.textContent = `Correct! ${q.explanation}`;
  } else {
    feedback.textContent =
      `Incorrect. Correct answer: ${q.options[q.answer]}. ${q.explanation}`;
  }

  feedback.style.color =
    isCorrect ? "var(--green)" : "var(--red)";

  optionButtons.forEach((button, index) => {
    button.disabled = true;

    if (index === q.answer) {
      button.classList.add("correct");
    } else if (index === selectedIndex) {
      button.classList.add("wrong");
    }
  });

  answeredCount.textContent =
    `${currentQuestion + 1} of ${TOTAL_QUESTIONS} answered`;

  progressFill.style.width =
    `${((currentQuestion + 1) / TOTAL_QUESTIONS) * 100}%`;

  progressTrack.setAttribute(
    "aria-valuenow",
    currentQuestion + 1
  );

  nextBtn.disabled = false;
}

function showResults() {
  quizCard.hidden = true;
  resultCard.hidden = false;

  const percentage = Math.round(
    (score / TOTAL_QUESTIONS) * 100
  );

  resultScore.textContent = `${score} / ${TOTAL_QUESTIONS}`;
  resultPercentage.textContent = `${percentage}%`;
  resultFill.style.width = `${percentage}%`;

  if (percentage >= 80) {
    resultIcon.textContent = "🏆";
    resultTitle.textContent = "Excellent Work!";
    resultMessage.textContent =
      "You have a strong result. Keep practising all three languages.";
  } else if (percentage >= 50) {
    resultIcon.textContent = "🎯";
    resultTitle.textContent = "Good Progress!";
    resultMessage.textContent =
      "Review the explanations and practise the topics you missed.";
  } else {
    resultIcon.textContent = "📚";
    resultTitle.textContent = "Keep Learning!";
    resultMessage.textContent =
      "Review the basics of Python, SQL and Rust, then try another quiz.";
  }

  topicResults.replaceChildren();

  LANGUAGES.forEach(language => {
    const data = topicScores[language];
    const percentageForTopic = Math.round(
      (data.correct / data.total) * 100
    );

    const card = document.createElement("div");
    card.className = "topic-result";

    const heading = document.createElement("strong");
    heading.textContent = `${data.correct}/${data.total}`;

    const label = document.createElement("span");
    label.textContent = `${language} · ${percentageForTopic}%`;

    card.append(heading, label);
    topicResults.appendChild(card);
  });
}

nextBtn.addEventListener("click", () => {
  if (!hasAnswered) return;

  if (currentQuestion < TOTAL_QUESTIONS - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
});

restartBtn.addEventListener("click", createQuiz);

// Create the first randomized quiz when the page loads.
createQuiz();
