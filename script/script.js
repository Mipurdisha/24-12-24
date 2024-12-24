const web = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const radius = canvas.height / 2;
ctx.translate(radius, radius);

function drawFace() {
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = "#333";
    ctx.fill();


}

function drawNumber() {
    ctx.font = `${radius * 0.3}px arial`
    ctx.textAlign = "center";
    for (let i = 1; i < 13; i++) {
        const ang = i * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(i, 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85)
        ctx.rotate(-ang);
    }
}


function drawTime() {
    const now = new Date();
    let hour = now.getHours();
    let minuts = now.getMinutes();
    let second = now.getSeconds();

    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minuts * Math.PI / (6 * 60));

    minuts = (minuts * Math.PI / 30) + (second * Math.PI / (30 * 60 ));
    drawHands(minuts, radius*0.7, radius*0.05);

    second = (second * Math.PI / 30);
    drawHands(second, radius*0.9, radius*0.03);


    drawHands(hour, radius*0.5, radius*0.07);
}


function drawHands(pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);


}

function drawClock() {
    drawFace();
    drawNumber();
    drawTime();
}

drawClock();

setInterval(() => {
    drawClock(); 
}, 1000);
