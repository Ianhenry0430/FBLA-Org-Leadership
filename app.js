let currentCard = 0;
let flipped = false;

let weaknesses = JSON.parse(localStorage.getItem("weaknesses")) || [];

// Navigation
function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  if (id === "weakness") renderWeakness();
}

// Flashcards
function loadCard() {
  const card = flashcards[currentCard];
  document.getElementById("card").innerText = flipped ? card.a : card.q;
}

function flipCard() {
  flipped = !flipped;
  loadCard();
}

function nextCard() {
  currentCard = (currentCard + 1) % flashcards.length;
  flipped = false;
  loadCard();
}

function markKnown(correct) {
  if (!correct) {
    weaknesses.push(flashcards[currentCard].q);
    localStorage.setItem("weaknesses", JSON.stringify(weaknesses));
  }
  nextCard();
}

// Test Mode
let currentQuestion = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.q;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(i) {
  const correct = questions[currentQuestion].answer;

  if (i !== correct) {
    weaknesses.push(questions[currentQuestion].q);
    localStorage.setItem("weaknesses", JSON.stringify(weaknesses));
    alert("Incorrect");
  } else {
    alert("Correct!");
  }
}

function nextQuestion() {
  currentQuestion = (currentQuestion + 1) % questions.length;
  loadQuestion();
}

// Weakness Tracker
function renderWeakness() {
  const list = document.getElementById("weakList");
  list.innerHTML = "";

  const unique = [...new Set(weaknesses)];

  unique.forEach(w => {
    const li = document.createElement("li");
    li.innerText = w;
    list.appendChild(li);
  });
}

// AI Tutor (REAL API SUPPORT)
async function askAI() {
  const input = document.getElementById("aiInput").value;

  const responseDiv = document.getElementById("aiResponse");
  responseDiv.innerText = "Thinking...";

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are an FBLA Organizational Leadership tutor." },
          { role: "user", content: input }
        ]
      })
    });

    const data = await res.json();
    responseDiv.innerText = data.choices[0].message.content;

  } catch (err) {
    responseDiv.innerText = "Error connecting to AI.";
  }
}

// Initialize
loadCard();
loadQuestion();
