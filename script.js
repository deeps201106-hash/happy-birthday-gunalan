// Welcome Alert
window.onload = function () {
    setTimeout(() => {
        alert("🎉 Happy Birthday Guna❤️");
    }, 1000);
};


// Heart Effect
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "25px";
    heart.style.animation = "fall 5s linear";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 500);

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(100vh);
opacity:0;
}
}`;
document.head.appendChild(style);
// Welcome Message
setTimeout(function () {
    console.log("Happy Birthday Guna ❤️");
}, 3000);

// Auto Scroll Effect
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;

        if (top > offset) {
            sec.classList.add("fade");
        }
    });
});

// Button Effect
function surprise() {
    const screen = document.getElementById("loveScreen");
    screen.style.display = "flex";

    // Extra floating hearts
    for(let i = 0; i < 25; i++){
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = "100vh";
            heart.style.fontSize = (20 + Math.random()*30) + "px";
            heart.style.zIndex = "10000";
            heart.style.animation = "heartRise 4s linear forwards";
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 4000);
        }, i * 120);
    }
}

function closeLoveScreen(){
    document.getElementById("loveScreen").style.display = "none";
}

// Heart rising animation
const heartStyle = document.createElement("style");
heartStyle.innerHTML = `
@keyframes heartRise{
    0%{
        transform:translateY(0) scale(1);
        opacity:1;
    }
    100%{
        transform:translateY(-120vh) scale(1.6);
        opacity:0;
    }
}`;
document.head.appendChild(heartStyle);
function openLetter(){
document.getElementById("letterPopup").style.display="block";
}

function closeLetter(){
document.getElementById("letterPopup").style.display="none";
}
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("reasonBtn");
    const text = document.getElementById("reasonText");

    const reasons = [
        "❤️ Un smile enaku romba pudikum",
        "🥰 Nee romba caring",
        "💖 Un voice romba cute",
        "💕 Nee enna purinjukura vidham",
        "🌹 Un kuda irukum pothu happy ah feel aagum",
        "❤️ Nee en life la romba special"
    ];

    if (btn && text) {
        btn.addEventListener("click", function () {
            const random = Math.floor(Math.random() * reasons.length);
            text.innerHTML = reasons[random];
        });
    }

});
function loveReason() {
    const reasons = [
        "❤️ Un smile paatha odane enaku happy feel varum",
        "🥰 Nee romba caring and lovable",
        "💖 Un voice kekumbodhu calm ah feel aagum",
        "🌹 Nee enna purinjukura vidham enaku romba special",
        "💕 Un kuda irukum pothu naan romba safe ah feel panren",
        "💞 Nee en life la vandhadhunaala dhaan life beautiful aayiduchu",
        "❤️ Nee siricha naalum enaku full day happy",
        "😘 Because nee dhaan en favourite person"
    ];

    const random = Math.floor(Math.random() * reasons.length);
    document.getElementById("reasonText").innerHTML = reasons[random];
}
const quiz = [
  {
    q: "Who is the cutest? 😘",
    options: ["Guna ❤️", "Deepuu ❤️"],
    answer: 0
  },
  {
    q: "Who gets angry first? 😂",
    options: ["Guna 😤", "Deepuu 😤"],
    answer: 1
  },
  {
    q: "Who says 'I miss you' more? 🥺",
    options: ["Guna 💖", "Deepuu 💖"],
    answer: 1
  },
  {
    q: "Who is more caring? ❤️",
    options: ["Guna 🤍", "Deepuu 🤍"],
    answer: 0
  },
  {
    q: "Who loves bike rides more? 🏍️",
    options: ["Guna 🏍️", "Deepuu 🏍️"],
    answer: 0
  },
  {
    q: "Who is more stubborn? 😏",
    options: ["Guna ❤️", "Deepuu ❤️"],
    answer: 1
  },
  {
    q: "Who is more emotional? 🥹",
    options: ["Guna 💙", "Deepuu 💙"],
    answer: 1
  },
  {
    q: "Who gives the sweetest smile? 😊",
    options: ["Guna ✨", "Deepuu ✨"],
    answer: 0
  },
  {
    q: "Who says 'sorry' first after a fight? 🥺",
    options: ["Guna ❤️", "Deepuu ❤️"],
    answer: 1
  },
  {
    q: "Who gets jealous more? 😤💖",
    options: ["Guna ❤️", "Deepuu ❤️"],
    answer: 1
  },
  {
    q: "Who is the bigger baby in this relationship? 👶",
    options: ["Guna ❤️", "Deepuu ❤️"],
    answer: 0
  },
  {
    q: "Who loves hugs more? 🤗",
    options: ["Guna ❤️", "Deepuu ❤️"],
    answer: 1
  },
  {
    q: "Who thinks about the other person all day? 💭",
    options: ["Guna ❤️", "Deepuu ❤️"],
    answer: 1
  },
  {
    q: "Who is luckier in this relationship? 🍀",
    options: ["Guna ❤️", "Deepuu ❤️"],
    answer: 0
  },
  {
    q: "Who loves whom more? 💖",
    options: ["Guna ❤️", "Deepuu ❤️"],
    answer: 1
  }
];

let current = 0;
let score = 0;
function loadQuestion(){
  document.getElementById("quizQuestion").innerHTML = quiz[current].q;
  document.getElementById("option1").innerHTML = quiz[current].options[0];
  document.getElementById("option2").innerHTML = quiz[current].options[1];
  document.getElementById("quizResult").innerHTML = "";
}

function checkAnswer(choice){
  const result = document.getElementById("quizResult");

if(choice === quiz[current].answer){
    score++;
    result.innerHTML = "💖 Correct! You know us so well! 😘";
}else{
    result.innerHTML = "😂 Wrong! But I still love you forever ❤️";
}
  setTimeout(() => {
      current++;
      if(current < quiz.length){
          loadQuestion();
      }else{
          document.getElementById("quizQuestion").innerHTML = "🎉 Quiz Completed! 🎉";
          document.getElementById("option1").style.display = "none";
          document.getElementById("option2").style.display = "none";
         document.getElementById("quizResult").innerHTML =
"🏆 Final Result: Guna scored " + score + "/15 because he knows deepuuu very well ❤️<br><br>But one thing is always true... Deepuu Loves Guna More Than Anything 💖😘 Forever and Ever!";
      }
  }, 1200);
}

document.addEventListener("DOMContentLoaded", loadQuestion);
