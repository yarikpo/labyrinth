import {Field} from '/components/Field.js';

export class FinishField extends Field {

    constructor({xCord, yCord, ctx}) {
        super({xCord, yCord, ctx});

        this.color = '#efefef';
        this.type = 'finish';
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.xCord * Field.blockSize, this.yCord * Field.blockSize, Field.blockSize, Field.blockSize);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawConsole() {
        document.getElementById('myConsole').rows[this.yCord].cells[this.xCord].innerHTML = "F";
    }
}

export default FinishField;