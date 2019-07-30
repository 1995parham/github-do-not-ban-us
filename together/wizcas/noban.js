const fontSize = 32;
const LINES = [{
        text: 'GitHub',
        scale: {
            x: 1.2,
            y: 1.2
        },
        anim: 'horizontal',
        func: Math.sin,
        power: .5,
        speed: 2,
    },
    {
        text: 'is for',
        anim: 'horizontal',
        func: Math.sin,
        power: 3,
        speed: 5,
    },
    {
        text: 'EVERYONE!',
        dpos: {
            y: 20,
        },
        scale: {
            x: 1.5,
            y: 1.5
        },
        anim: 'vertical',
        func: Math.cos,
        power: 3,
        speed: 10,
    },
];

const startPos = {
    x: 20,
    y: 110
};
const speed = 10;
const animSettings = {
    dx: 30,
    dy: 30,
};

let time = 0;
let raf;
let ctx;

window.addEventListener('load', function () {
    canvas = document.getElementById('StopLickingTrumpAss');
    console.log('GitHub is for everyone!');
    init(canvas);
});

function init(canvas) {
    if (!canvas || !canvas.getContext) {
        console.error('Sorry but your web browser is not supported.');
        return;
    }
    ctx = canvas.getContext('2d');
    console.log(ctx.canvas.width, ctx.canvas.height);
    draw();

    canvas.addEventListener('mouseover', () => {
        raf = requestAnimationFrame(anim);
    });
    canvas.addEventListener('mouseleave', () => {
        cancelAnimationFrame(raf);
        time = 0;
        draw();
    })
}

function w() {
    return ctx.canvas.width;
}

function h() {
    return ctx.canvas.height;
}

function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, w(), h());
    drawHint();
    let y = startPos.y;
    for (const line of LINES) {
        y = drawTextLine(line, startPos.x, y);
    }
};

function drawHint() {
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.font = '14px Arial';
    ctx.fillText('mouse over me', 10,290);
    ctx.restore();
}

function drawTextLine(line, x, y) {
    ctx.fillStyle = '#fff';
    ctx.font = `${fontSize}px bold Arial`;
    ctx.save();
    let height = 35;
    if (line.dpos) {
        x += line.dpos.x || 0;
        y += line.dpos.y || 0;
    }
    let dx = 0;
    let dy = 0;
    if (line.anim && time > 0) {
        if (line.dir == null) {
            line.dir = 1;
        }
        const scale = (line.func ? line.func(time * line.speed / 1000) : 0) * (line.power || 1);
        switch (line.anim) {
            case 'vertical':
                dy = scale * animSettings.dy;
                break;
            case 'horizontal':
                dx = scale * animSettings.dx;
                break;
        }
    }
    let toX = x + dx;
    let toY = y + dy;
    if (line.scale) {
        ctx.translate(toX, toY);
        ctx.scale(line.scale.x, line.scale.y);
        ctx.translate(-toX, -toY);
        height *= line.scale.y;
    }
    ctx.fillText(line.text, toX, toY);
    ctx.restore();
    return y + height;
}

function anim(t) {
    time = t;
    draw(ctx);
    raf = requestAnimationFrame(anim);
}