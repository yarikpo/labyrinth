import {Table} from '/components/Table.js';
import {EmptyField} from '/components/EmptyField.js';
import {Field} from '/components/Field.js';
import {BlockedField} from '/components/BlockedField.js';
import {Walker} from '/components/Walker.js';
import {Keys} from '/components/Keys.js';

import data from '/levels/level01.json' assert { type: "json" };

console.log(`Block - ${localStorage.getItem('blockSize') || '64'}x${localStorage.getItem('blockSize') || '64'}`);

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

localStorage.setItem('rank1', 'undefined');
localStorage.setItem('rank2', 'undefined');
localStorage.setItem('rank3', 'undefined');
localStorage.setItem('rank4', 'undefined');
localStorage.setItem('rank5', 'undefined');
localStorage.setItem('rank6', 'undefined');
localStorage.setItem('rank7', 'undefined');
localStorage.setItem('rank8', 'undefined');
localStorage.setItem('rank9', 'undefined');


let table = new Table({width: canvas.width, height: canvas.height, ctx: ctx});
table.importLevel(parseInt(localStorage.getItem('level')));

let player = new Walker({
    position: {x: parseInt(localStorage.getItem('blockSize')) * 1.5, y: canvas.height - parseInt(localStorage.getItem('blockSize')) * 1.5},
    ctx: ctx,
    offset: {x: 0, y: 0}
});

let keys = new Keys();

function draw() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#222';
    ctx.fill();
    ctx.closePath();

    table.draw();
    player.draw();
    player.drawConsole();
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
            break;
        case 40:
            keys.downPressed = false;
            break;
        case 37:
            keys.leftPressed = false;
            break;
        case 38:
            keys.upPressed = false;
            break;
        default:
            console.log(keys);
    }
});