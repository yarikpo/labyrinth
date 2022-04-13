import {Table} from '/components/Table.js';
import {EmptyField} from '/components/EmptyField.js';
import {Field} from '/components/Field.js';
import {BlockedField} from '/components/BlockedField.js';
import {Walker} from '/components/Walker.js';
import {Keys} from '/components/Keys.js';

import data from '/levels/level01.json' assert { type: "json" };

console.log("Block - 64x64");

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

ctx.fillRect(0, 0, canvas.width, canvas.height);

let table = new Table({width: canvas.width, height: canvas.height, ctx: ctx});
table.importLevel1();

let player = new Walker({
    position: {x: 200, y: 400},
    ctx: ctx,
    offset: {x: 0, y: 0}
});

let keys = new Keys();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    table.draw();
    player.draw();
}

function update() {
    player.update_offset(keys);
    player.check_collisions(table);
    player.update();
}

function animate() {
    window.requestAnimationFrame(animate);
    update();
    draw();
}

animate();

window.addEventListener('keydown', (event) => {
    switch(event.keyCode) {
        case 39:
            keys.rightPressed = true;
            keys.lastPressed = 'right';
            console.log('right');
            break;
        case 40:
            keys.downPressed = true;
            keys.lastPressed = 'down';
            console.log('down');
            break;
        case 37:
            keys.leftPressed = true;
            keys.lastPressed = 'left';
            console.log('left');
            break;
        case 38:
            keys.upPressed = true;
            keys.lastPressed = 'up';
            console.log('up');
            break;
        default:
            console.log(keys);
    }
});

window.addEventListener('keyup', (event) => {
    switch(event.keyCode) {
        case 39:
            keys.rightPressed = false;
            // keys.lastPressed = 'right';
            break;
        case 40:
            keys.downPressed = false;
            // keys.lastPressed = 'down';
            break;
        case 37:
            keys.leftPressed = false;
            // keys.lastPressed = 'left';
            break;
        case 38:
            keys.upPressed = false;
            // keys.lastPressed = 'up';
            break;
        default:
            console.log(keys);
    }
});