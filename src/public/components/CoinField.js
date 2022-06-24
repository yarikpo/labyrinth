import {Field} from '/components/Field.js';

export class CoinField extends Field {

    static sizeMultiplyer = 0.2;

    constructor({xCord, yCord, ctx}) {
        super({xCord, yCord, ctx});

        this.color = '#c99';
        this.type = 'coin';
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc((this.xCord + 0.5) * Field.blockSize, (this.yCord + 0.5) * Field.blockSize, Field.blockSize * CoinField.sizeMultiplyer / 2, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    drawConsole() {
        document.getElementById('myConsole').rows[this.yCord].cells[this.xCord].innerHTML = "p";
    }
}

export default CoinField;