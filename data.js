const flashcards = [
  { q: "What is leadership?", a: "The ability to influence and guide individuals or groups." },
  { q: "What is management?", a: "The process of planning, organizing, and controlling resources." },
  { q: "Difference between leader and manager?", a: "Leaders inspire vision; managers maintain systems." },
  { q: "What is emotional intelligence?", a: "The ability to understand and manage emotions." },
  { q: "5 components of emotional intelligence?", a: "Self-awareness, self-regulation, motivation, empathy, social skills." },
  { q: "What is motivation?", a: "The internal drive to achieve goals." },
  { q: "Intrinsic motivation?", a: "Motivation from internal satisfaction." },
  { q: "Extrinsic motivation?", a: "Motivation from external rewards." },
  { q: "Maslow's hierarchy purpose?", a: "Explains human needs from basic to self-actualization." },
  { q: "Top of Maslow's pyramid?", a: "Self-actualization." },
  { q: "What is communication?", a: "The process of sharing information." },
  { q: "Types of communication?", a: "Verbal, nonverbal, written." },
  { q: "What is active listening?", a: "Fully focusing and understanding the speaker." },
  { q: "What is teamwork?", a: "Working collaboratively toward a goal." },
  { q: "Conflict resolution?", a: "The process of resolving disagreements." },
  { q: "What is delegation?", a: "Assigning tasks to others." },
  { q: "What is decision-making?", a: "Choosing between alternatives." },
  { q: "Autocratic leadership?", a: "Leader makes decisions alone." },
  { q: "Democratic leadership?", a: "Group participation in decisions." },
  { q: "Laissez-faire leadership?", a: "Hands-off leadership style." },
  { q: "What is organizational culture?", a: "Shared values and beliefs in a company." },
  { q: "What is ethics?", a: "Moral principles guiding behavior." },
  { q: "What is accountability?", a: "Taking responsibility for actions." },
  { q: "What is productivity?", a: "Efficiency in completing tasks." },
  { q: "What is strategic planning?", a: "Setting long-term goals and actions." },
  { q: "What is SWOT analysis?", a: "Strengths, Weaknesses, Opportunities, Threats." },
  { q: "What is time management?", a: "Planning and controlling time usage." },
  { q: "What is adaptability?", a: "Ability to adjust to change." },
  { q: "What is innovation?", a: "Creating new ideas or methods." },
  { q: "What is vision?", a: "A clear future goal." },
  { q: "What is mission statement?", a: "Defines purpose of organization." },
  { q: "What is leadership trait theory?", a: "Leaders have specific traits." },
  { q: "What is behavioral leadership theory?", a: "Leadership based on actions." },
  { q: "What is situational leadership?", a: "Leadership adapts to situation." }
];

const questions = [
  { const questions = [
  {
    q: "Which leadership style involves group decision-making?",
    options: ["Autocratic", "Democratic", "Laissez-faire", "Authoritative"],
    answer: 1
  },
  {
    q: "What is the first level of Maslow's hierarchy?",
    options: ["Esteem", "Safety", "Physiological", "Love"],
    answer: 2
  },
  {
    q: "Which is NOT emotional intelligence?",
    options: ["Empathy", "Self-awareness", "IQ", "Self-regulation"],
    answer: 2
  },
  {
    q: "SWOT stands for?",
    options: [
      "Strengths, Weaknesses, Opportunities, Threats",
      "Speed, Work, Output, Time",
      "System, Work, Operation, Task",
      "None"
    ],
    answer: 0
  },
  {
    q: "Which leadership style is hands-off?",
    options: ["Autocratic", "Democratic", "Laissez-faire", "Transformational"],
    answer: 2
  },
  {
    q: "Intrinsic motivation comes from?",
    options: ["Money", "Rewards", "Internal satisfaction", "Punishment"],
    answer: 2
  },
  {
    q: "Delegation means?",
    options: ["Doing all tasks yourself", "Assigning tasks", "Avoiding work", "None"],
    answer: 1
  },
  {
    q: "Active listening requires?",
    options: ["Ignoring speaker", "Interrupting", "Full attention", "Multitasking"],
    answer: 2
  }
];
    q: "What is leadership?",
    options: ["Control", "Influence", "Authority", "Power"],
    answer: 1
  },
  {
    q: "Emotional intelligence involves:",
    options: ["IQ", "Emotions", "Memory", "Logic"],
    answer: 1
  const flashcards = []; // keep empty or reuse later if you want

const questions = [
  { q: "What is leadership?", options: ["Control", "Influence", "Authority", "Power"], answer: 1 },
  { q: "Which leadership style is group-based?", options: ["Autocratic", "Democratic", "Laissez-faire", "Transactional"], answer: 1 },
  { q: "Maslow's lowest need?", options: ["Esteem", "Safety", "Physiological", "Social"], answer: 2 },
  { q: "Emotional intelligence includes?", options: ["IQ", "Empathy", "Speed", "Strength"], answer: 1 },
  { q: "Delegation means?", options: ["Avoiding work", "Assigning tasks", "Working alone", "Leading"], answer: 1 },
  { q: "Intrinsic motivation is from?", options: ["Money", "Internal drive", "Rewards", "Punishment"], answer: 1 },
  { q: "Extrinsic motivation is from?", options: ["Enjoyment", "Internal goals", "External rewards", "Passion"], answer: 2 },
  { q: "SWOT stands for?", options: ["Strengths Weaknesses Opportunities Threats", "Speed Work Output Time", "System Work Operation Task", "None"], answer: 0 },
  { q: "Active listening requires?", options: ["Interrupting", "Ignoring", "Full attention", "Multitasking"], answer: 2 },
  { q: "Conflict resolution is?", options: ["Avoiding issues", "Solving disagreements", "Arguing", "Ignoring"], answer: 1 },

  { q: "Autocratic leadership?", options: ["Group decisions", "Leader decides alone", "No leader", "Shared power"], answer: 1 },
  { q: "Laissez-faire leadership?", options: ["Strict control", "Hands-off", "Group control", "Dictatorship"], answer: 1 },
  { q: "Teamwork is?", options: ["Working alone", "Working together", "Competing", "Leading"], answer: 1 },
  { q: "Accountability means?", options: ["Blaming others", "Responsibility", "Avoiding work", "Ignoring"], answer: 1 },
  { q: "Productivity is?", options: ["Slow work", "Efficiency", "Delay", "Confusion"], answer: 1 },
  { q: "Strategic planning is?", options: ["Short-term thinking", "Long-term planning", "Ignoring goals", "Random actions"], answer: 1 },
  { q: "Mission statement defines?", options: ["Profit", "Purpose", "Employees", "Rules"], answer: 1 },
  { q: "Vision statement is?", options: ["Past", "Future goal", "Money", "Rules"], answer: 1 },
  { q: "Ethics are?", options: ["Rules", "Moral principles", "Laws only", "Opinions"], answer: 1 },
  { q: "Adaptability is?", options: ["Resisting change", "Adjusting to change", "Ignoring", "Leading"], answer: 1 },

  { q: "Innovation means?", options: ["Copying", "New ideas", "Old methods", "Routine"], answer: 1 },
  { q: "Communication is?", options: ["Talking only", "Sharing info", "Writing only", "Listening only"], answer: 1 },
  { q: "Nonverbal communication?", options: ["Speaking", "Body language", "Writing", "Emails"], answer: 1 },
  { q: "Decision-making is?", options: ["Guessing", "Choosing options", "Ignoring", "Avoiding"], answer: 1 },
  { q: "Time management is?", options: ["Wasting time", "Planning time", "Ignoring time", "Rushing"], answer: 1 },

  // Continue pattern to 100

  { q: "Which builds trust?", options: ["Lying", "Honesty", "Avoiding", "Ignoring"], answer: 1 },
  { q: "Good leaders are?", options: ["Selfish", "Visionary", "Lazy", "Confused"], answer: 1 },
  { q: "Motivation improves?", options: ["Failure", "Performance", "Confusion", "Delay"], answer: 1 },
  { q: "Empathy is?", options: ["Ignoring feelings", "Understanding others", "Arguing", "Leading"], answer: 1 },
  { q: "Goal setting helps?", options: ["Confusion", "Direction", "Failure", "Delay"], answer: 1 },

  // AUTO-GENERATED STYLE QUESTIONS TO REACH 100

];

while (questions.length < 100) {
  let i = questions.length + 1;

  questions.push({
    q: `Practice Question ${i}: What is an important leadership skill?`,
    options: ["Communication", "Ignoring", "Avoiding", "Confusion"],
    answer: 0
  });
}

