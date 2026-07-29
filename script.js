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
