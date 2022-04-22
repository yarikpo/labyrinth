import {Field} from '/components/Field.js';

export class BombField extends Field {

    static sizeMultiplyer = 0.5;

    constructor({xCord, yCord, ctx}) {
        super({xCord, yCord, ctx});

        this.color = '#ac5213';
        this.type = 'bomb';
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc((this.xCord + 0.5) * Field.blockSize, (this.yCord + 0.5) * Field.blockSize, Field.blockSize * BombField.sizeMultiplyer / 2, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default BombField;