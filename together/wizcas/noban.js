const fontSize = 32;

window.addEventListener('load', function () {
    canvas = document.getElementById('StopLickingTrumpAss');
    console.log('GitHub is for everyone!');
    init(canvas);
});

function init(canvas) {
    if (canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        console.log(ctx.canvas.width, ctx.canvas.height);
        draw(ctx);
    } else {
        console.error('Sorry but your web browser is not supported.');
    }
}

function w(ctx) {
    return ctx.canvas.width;
}

function h(ctx) {
    return ctx.canvas.height;
}

const LINES = ['GitHub', 'is for', 'EVERYONE'];

function draw(ctx) {
    if (!ctx) return;
    drawRect(ctx);
    let y = 130;
    for (const line of LINES) {
        y = drawTextLine(ctx, line, y);
    }
};

function drawRect(ctx) {
    ctx.fillStyle = 'rgba(255,255,255,.8)';
    ctx.fillRect(120, 95, 60, 105);
}

function drawTextLine(ctx, text, y) {
    ctx.fillStyle = '#fff';
    ctx.font = `${fontSize}px bold Arial`;
    ctx.save();
    if (text === 'GitHub') {
        ctx.translate(210, y);
        ctx.scale(1.5, 1.5);
        ctx.translate(-210, -y);
    }
    ctx.fillText(text, 210, y);
    ctx.restore();
    return y + 35;
}