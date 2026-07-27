// Welcome Alert
window.onload = function () {
    setTimeout(() => {
        alert("🎉 Happy Birthday Gunalan ❤️");
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
    console.log("Happy Birthday Gunalan ❤️");
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
    alert("❤️ Happy Birthday My Love Gunalan ❤️\n\nI Love You Forever ❤️");
}
