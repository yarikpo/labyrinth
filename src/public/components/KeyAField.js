import {Field} from '/components/Field.js';

export class KeyAField extends Field {

    static sizeMultiplyer = 0.2;

    constructor({xCord, yCord, ctx}) {
        super({xCord, yCord, ctx});

        this.color = '#dc1223';
        this.type = 'key-door-A';
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(
            (this.xCord + 0.5) * Field.blockSize - Field.blockSize / 2 * KeyAField.sizeMultiplyer,
            (this.yCord + 0.5) * Field.blockSize - Field.blockSize / 2 * KeyAField.sizeMultiplyer,
            Field.blockSize * KeyAField.sizeMultiplyer,
            Field.blockSize * KeyAField.sizeMultiplyer
        );
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default KeyAField;