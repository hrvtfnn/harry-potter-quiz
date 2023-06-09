// Questions //

const quizData = [
  {
    question: "Which house did Ronald Weasley get placed in?",
    a: "Ravenclaw",
    b: "Slytherin",
    c: "Gryffindor",
    d: "Hufflepuff",
    correct: "c",
  },

  {
    question: 'What does the "Obliviate" spell mean?',
    a: "Remove ones memory",
    b: "Protect yourself from Dark Magic",
    c: "Transform into somebody else",
    d: "Transport from one place to another",
    correct: "a",
  },

  {
    question: "Who killed Sirius Black before he fell into the Veil?",
    a: "Lucius Malfoy",
    b: "Lord Voldemort",
    c: "Draco Malfoy",
    d: "Bellatrix Lestrange",
    correct: "d",
  },

  {
    question:
      "How many turns did Harry and Hermione require to go back in time with the Time Turner?",
    a: "10 turns",
    b: "3 turns",
    c: "17 turns",
    d: "1 turn",
    correct: "b",
  },

  {
    question:
      "Which position did Hermione Granger play in the giant game of chess in her first year?",
    a: "Pawn",
    b: "Bishop",
    c: "Castle",
    d: "Knight",
    correct: "c",
  },

  {
    question: "What is Severus Snape's Patronus?",
    a: "A doe",
    b: "A deer",
    c: "A beaver",
    d: "A snake",
    correct: "a",
  },

  {
    question:
      "What was the name of event in the Triwizard Tournament in which students would dance with their partners?",
    a: "The Magic Ball",
    b: "The Charm Ball",
    c: "The Triwizard Ball",
    d: "The Yule Ball",
    correct: "d",
  },

  {
    question: "What was the name of Albus Dumbledore's brother?",
    a: "Arthur",
    b: "Abeforth",
    c: "Ariana",
    d: "Grindelwald",
    correct: "b",
  },

  {
    question:
      "What is the name of the girl ghost who haunts the female bathrooms and died seeing the Basilisk?",
    a: "Haughty Hetty",
    b: "Scaredy-cat Sara",
    c: "Miserable Myrtle",
    d: "Moaning Myrtle",
    correct: "d",
  },

  {
    question: "Who killed Albus Dumbledore?",
    a: "Draco Malfoy",
    b: "Bellatrix Lestrange",
    c: "Severus Snape",
    d: "Salazar Slytherin",
    correct: "c",
  },

  {
    question:
      "When Dumbledore collected Harry from the Dursleys, what drink did he give them?",
    a: "Butterbeer",
    b: "Firewhisky",
    c: "Oak-matured mead",
    d: "Pumpkin juice",
    correct: "c",
  },

  {
    question:
      "What was the name of only book that Hermoine could find that mentioned Horcruxes?",
    a: "Secrets of the Darkest Arts",
    b: "Magick Moste Evile",
    c: "Moste Potente Potions",
    d: "Olde and Forgotten Bewitchments and Charms",
    correct: "b",
  },

  {
    question:
      "What was the name of the Department of Magical Law Enforcement employee whose memory Harry saw in the Pensieve?",
    a: "Bob Ogden",
    b: "Bertram Oakden",
    c: "Jasper Ocken",
    d: "Colin Ogilvy",
    correct: "a",
  },

  {
    question:
      "A poster for what product was displayed in the window of Weasleys' Wizard Wheezes?",
    a: "Skiving Snackboxes",
    b: "U-No-Poo",
    c: "Decoy Detonator",
    d: "Pygmy Puffs",
    correct: "b",
  },

  {
    question: "What was the name of Severus Snape's mother?",
    a: "Eliza Hinch",
    b: "Elsie King",
    c: "Eileen Prince",
    d: "Ellen Finch",
    correct: "c",
  },

  {
    question: "What was Lavender Brown's nickname for Ron?",
    a: "My Wonnykins",
    b: "Little Wonkins",
    c: "Wonny",
    d: "Won-Won",
    correct: "d",
  },

  {
    question: "Who was the matron at the orphanage that Tom Riddle grew up in?",
    a: "Mrs. Cole",
    b: "Ms. Tomkins",
    c: "Miss Babbage",
    d: "Mrs. Jones",
    correct: "a",
  },

  {
    question:
      "What were the initials of the person who had stolen the real Horcrux from the cave?",
    a: "S.B.",
    b: "H.J.P.",
    c: "R.A.B.",
    d: "A.P.W.B.D.",
    correct: "c",
  },

  {
    question: "What was the name of Barty Crouch's house-elf?",
    a: "Dobby",
    b: "Hokey",
    c: "Kreacher",
    d: "Winky",
    correct: "d",
  },

  {
    question:
      "What creature did Barty Crouch Jr. posing as Professor Moody turn Draco into?",
    a: "Rat",
    b: "Ferret",
    c: "Weasel",
    d: "Vole",
    correct: "b",
  },

  {
    question:
      "What was the name of the Riddle family's gardener who was murdered?",
    a: "Reggie Wilson",
    b: "Gary Green",
    c: "Frank Bryce",
    d: "Colin Brown",
    correct: "c",
  },

  {
    question:
      "What did Hermione discover Rita Skeeter's unregistered Animagus form was?",
    a: "Ladybird",
    b: "Beetle",
    c: "Cockroach",
    d: "Butterfly",
    correct: "b",
  },

  {
    question:
      "What was the answer to the Sphinx's riddle that Harry had to answer in the third task?",
    a: "Lion",
    b: "Time",
    c: "Circle",
    d: "Spider",
    correct: "d",
  },

  {
   question: "What item of clothing did Dobby receive which set him free?",
   a: "Sock",
   b: "Wooly Jumper",
   c: "Scarf",
   d: "Hat",
   correct: "a",
 },
];

var welcome = document.getElementById("welcome");
const quiz = document.getElementById("quiz");
var startBtn = document.getElementById("start");
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

// Start Button //

startBtn.onclick = function () {
    quiz.style.visibility = "visible";
    welcome.style.display = "none";
  };
  
loadQuiz();

// Load //

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Select //
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <div class="score-wrapper">
           <div>
           <iframe src="https://giphy.com/embed/w48WeMIN73QsM" width="480" height="356" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
           </div>
           <h2 class="score">You answered ${score}/${quizData.length} questions correctly</h2>
           <button class="play-again" onclick="location.reload()">Reload</button>
           </div>
           `
       }
    }
})