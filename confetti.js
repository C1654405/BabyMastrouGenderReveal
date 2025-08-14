
function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    for (let i = 0; i < 300; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 10 + 10,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            tilt: Math.random() * 10 - 10
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            ctx.beginPath();
            ctx.fillStyle = c.color;
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.fill();
        });
        update();
    }

    function update() {
        confetti.forEach(c => {
            c.y += c.d / 2;
            if (c.y > canvas.height) {
                c.y = -10;
                c.x = Math.random() * canvas.width;
            }
        });
    }

    setInterval(draw, 20);
}
