let currentQuestion = 0;
let weaknesses = JSON.parse(localStorage.getItem("weaknesses")) || [];

// LOAD QUESTION
function loadQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("question").innerText = `Q${currentQuestion + 1}: ${q.q}`;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => {
      checkAnswer(i);
    };

    answersDiv.appendChild(btn);
  });
}

// CHECK ANSWER
function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;

  if (selected === correct) {
    alert("✅ Correct!");
  } else {
    alert("❌ Incorrect");

    // Track weakness
    weaknesses.push(questions[currentQuestion].q);
    localStorage.setItem("weaknesses", JSON.stringify(weaknesses));
  }
}

// NEXT QUESTION
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    alert("🎉 Test complete!");
    currentQuestion = 0;
  }

  loadQuestion();
}

// INITIAL LOAD
window.onload = function () {
  loadQuestion();
};
