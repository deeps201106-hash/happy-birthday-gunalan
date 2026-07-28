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
    alert("❤️ Happy Birthday My Love Guna ❤️\n\nI Love You Forever ❤️");
}
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height / 2;

    for (let i = 0; i < 40; i++) {
        particles.push({
            x,
            y,
            dx: (Math.random() - 0.5) * 8,
            dy: (Math.random() - 0.5) * 8,
            life: 100
        });
    }
}

function animateFireworks() {
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{
        p.x += p.dx;
        p.y += p.dy;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x,p.y,3,0,Math.PI*2);
        ctx.fillStyle="gold";
        ctx.fill();

        if(p.life<=0){
            particles.splice(index,1);
        }
    });

    requestAnimationFrame(animateFireworks);
}

setInterval(createFirework,1500);
animateFireworks();
function openLetter(){
document.getElementById("letterPopup").style.display="block";
}

function closeLetter(){
document.getElementById("letterPopup").style.display="none";
}
const reasons=[
"❤️ onoda Cute Smile",
"🥰 onoda Caring Heart",
"😍 onoda Kindness",
"💖 onoda Voice",
"🌹 Nee ena purijikita vitham",
"💞 Ne neeya eruka la athu enaku romba pudikum",
"💕 Nee enakaga enna venalum seiva nu enaku thonuchu",
"❤️ Unkuda erukurapa romba safe fa happy ya feel aagum"
];

function loveReason(){

let random=Math.floor(Math.random()*reasons.length);

document.getElementById("reasonText").innerHTML=reasons[random];

}
setTimeout(function(){

alert("💖 Happy Birthday Gunalan 💖\n\nYou Will Always Be Special ❤️\n\nForever Yours,\nDeepa ❤️");

},12000);
