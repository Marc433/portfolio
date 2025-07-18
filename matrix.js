// matrix.js
const canvas = document.createElement("canvas");
canvas.id = "matrix";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;
canvas.style.opacity = 0.2;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";
    drops.forEach((y, i) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);
        drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
    });
}

setInterval(drawMatrix, 50);