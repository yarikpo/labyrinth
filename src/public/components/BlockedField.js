import {Field} from '/components/Field.js';

export class BlockedField extends Field {

    constructor({xCord, yCord, ctx}) {
        super({xCord, yCord, ctx});

        // this.ctx = super.ctx;
        this.color = '#743200';
        this.type = 'blocked';
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.xCord * Field.blockSize, this.yCord * Field.blockSize, Field.blockSize, Field.blockSize);
        this.ctx.fillStyle = this.color;
        // this.ctx.strokeStyle = 'silver';
        // this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawConsole() {
        document.getElementById('myConsole').rows[this.yCord].cells[this.xCord].innerHTML = "#";
    }
}

export default BlockedField;