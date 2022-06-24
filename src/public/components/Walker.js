import {EmptyField} from '/components/EmptyField.js';
import {Field} from '/components/Field.js';

export class Walker {

    static sizeMultiplyer = 0.8;
    static speed = 4;

    constructor({position={x: 1.5 * Field.blockSize, y: 1.5 * Field.blockSize}, ctx, offset={x:0, y:0}, }) { // position -- center
        this.position = position;
        this.ctx = ctx;
        this.offset = offset;
        
        this.xCord = Math.floor(this.position.x / Field.blockSize);
        this.yCord = Math.floor(this.position.y / Field.blockSize);

        this.color = 'yellow';
        this.win = false;
        this.lifes = 1;
        this.coins = 0;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(
            this.position.x - Field.blockSize / 2 * Walker.sizeMultiplyer, 
            this.position.y - Field.blockSize / 2 * Walker.sizeMultiplyer, 
            Field.blockSize * Walker.sizeMultiplyer, 
            Field.blockSize * Walker.sizeMultiplyer
        );
        this.ctx.fillStyle = this.color;
        this.ctx.fill();        
        this.ctx.closePath();

        this.drawLives();
        this.drawPoints();
    }

    drawLives() {
        this.ctx.beginPath();
        this.ctx.font = '16px Helvetica';
        this.ctx.fillStyle = '#efefef';
        this.ctx.fillText('Lives: ' + this.lifes, 10, 20);
        this.ctx.closePath();
    }

    drawPoints() {
        this.ctx.beginPath();
        this.ctx.font = '16px Helvetica';
        this.ctx.fillStyle = '#efefef';
        this.ctx.fillText('Points: ' + this.coins, 950, 20);
        this.ctx.closePath();
    }

    update_offset(keys) {        
        if (keys.rightPressed && !keys.leftPressed && !keys.downPressed && !keys.upPressed) {
            this.offset = {x: Walker.speed, y: 0};
            this.position.y = (this.yCord + 0.5) * Field.blockSize;
        }
        else if (keys.leftPressed && !keys.rightPressed && !keys.downPressed && !keys.upPressed) {
            this.offset = {x: -Walker.speed, y: 0};
            this.position.y = (this.yCord + 0.5) * Field.blockSize;
        }
        else if (keys.downPressed && !keys.upPressed && !keys.rightPressed && !keys.leftPressed) {
            this.offset = {x: 0, y: Walker.speed};
            this.position.x = (this.xCord + 0.5) * Field.blockSize;
        }
        else if (keys.upPressed && !keys.downPressed && !keys.rightPressed && !keys.leftPressed) {
            this.offset = {x: 0, y: -Walker.speed};
            this.position.x = (this.xCord + 0.5) * Field.blockSize;
        }
        else {
            this.offset = {x: 0, y: 0};
        }
    }

    center_player() {
        this.position.y = (this.yCord + 0.5) * Field.blockSize;
        this.position.x = (this.xCord + 0.5) * Field.blockSize;
    }

    openDoorA(table) {
        for (let i = 0; i < table.field.length; ++i) {
            for (let j = 0; j < table.field[i].length; ++j) {
                if (table.field[i][j].type == 'key-door-A' 
                    || table.field[i][j].type == 'blocked-door-A') {
                    table.field[i][j] = new EmptyField({xCord: j, yCord: i, ctx: this.ctx});
                }
            }
        }
    }

    openDoorB(table) {
        for (let i = 0; i < table.field.length; ++i) {
            for (let j = 0; j < table.field[i].length; ++j) {
                if (table.field[i][j].type == 'key-door-B' 
                    || table.field[i][j].type == 'blocked-door-B') {
                    table.field[i][j] = new EmptyField({xCord: j, yCord: i, ctx: this.ctx});
                }
            }
        }
    }

    openDoorC(table) {
        for (let i = 0; i < table.field.length; ++i) {
            for (let j = 0; j < table.field[i].length; ++j) {
                if (table.field[i][j].type == 'key-door-C' 
                    || table.field[i][j].type == 'blocked-door-C') {
                    table.field[i][j] = new EmptyField({xCord: j, yCord: i, ctx: this.ctx});
                }
            }
        }
    }

    winGame() {
        if (!this.win) alert('You won!');
        this.win = true;
        document.getElementById('nextLevel').style.display = 'block';
    }

    loseGame() {
        if (this.win) return;
        alert('You lost!');
        window.location.href = 'http://localhost:5000/game.html';
    }

    check_collisions(table) {
        if (table.field[this.yCord][this.xCord].type == 'key-door-A') this.openDoorA(table);
        if (table.field[this.yCord][this.xCord].type == 'key-door-B') this.openDoorB(table);
        if (table.field[this.yCord][this.xCord].type == 'key-door-C') this.openDoorC(table);


        if (table.field[this.yCord - 1][this.xCord].type == 'blocked'
            || table.field[this.yCord - 1][this.xCord].type == 'blocked-door-A'
            || table.field[this.yCord - 1][this.xCord].type == 'blocked-door-B'
            || table.field[this.yCord - 1][this.xCord].type == 'blocked-door-C') {
            if (this.offset.y < 0) this.center_player();
            this.offset.y = Math.max(0, this.offset.y);
        }
        if (table.field[this.yCord + 1][this.xCord].type == 'blocked'
            || table.field[this.yCord + 1][this.xCord].type == 'blocked-door-A'
            || table.field[this.yCord + 1][this.xCord].type == 'blocked-door-B'
            || table.field[this.yCord + 1][this.xCord].type == 'blocked-door-C') {
            if (this.offset.y > 0) this.center_player();
            this.offset.y = Math.min(0, this.offset.y);
        }

        if (table.field[this.yCord][this.xCord - 1].type == 'blocked'
            || table.field[this.yCord][this.xCord - 1].type == 'blocked-door-A'
            || table.field[this.yCord][this.xCord - 1].type == 'blocked-door-B'
            || table.field[this.yCord][this.xCord - 1].type == 'blocked-door-C') {
            if (this.offset.x < 0) this.center_player();
            this.offset.x = Math.max(0, this.offset.x);
        }
        if (table.field[this.yCord][this.xCord + 1].type == 'blocked'
            || table.field[this.yCord][this.xCord + 1].type == 'blocked-door-A'
            || table.field[this.yCord][this.xCord + 1].type == 'blocked-door-B'
            || table.field[this.yCord][this.xCord + 1].type == 'blocked-door-C') {
            if (this.offset.x > 0) this.center_player();
            this.offset.x = Math.min(0, this.offset.x);
        }

        if (table.field[this.yCord][this.xCord].type == 'finish') {
            if (!this.win) this.center_player();
            this.winGame();
        }
        if (table.field[this.yCord][this.xCord].type == 'heal') {
            ++this.lifes;
            table.field[this.yCord][this.xCord] = new EmptyField({xCord: this.xCord, yCord: this.yCord, ctx: this.ctx});
        }
        if (table.field[this.yCord][this.xCord].type == 'bomb') {
            --this.lifes;
            table.field[this.yCord][this.xCord] = new EmptyField({xCord: this.xCord, yCord: this.yCord, ctx: this.ctx});
            if (this.lifes < 1) this.loseGame();
        }
        if (table.field[this.yCord][this.xCord].type == 'coin') {
            ++this.coins;
            table.field[this.yCord][this.xCord] = new EmptyField({xCord: this.xCord, yCord: this.yCord, ctx: this.ctx});
        }
    }

    update() {
        this.position.x+= this.offset.x * (Field.blockSize / 64);
        this.position.y+= this.offset.y * (Field.blockSize / 64);

        this.xCord = Math.floor(this.position.x / Field.blockSize);
        this.yCord = Math.floor(this.position.y / Field.blockSize);
    }

    drawConsole() {
        document.getElementById('myConsole').rows[this.yCord].cells[this.xCord].innerHTML = "P";
    }
}

export default Walker;