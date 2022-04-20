import {Field} from '/components/Field.js';

export class KeyCField extends Field {

    static sizeMultiplyer = 0.2;

    constructor({xCord, yCord, ctx}) {
        super({xCord, yCord, ctx});

        this.color = '#ab23cd';
        this.type = 'key-door-C';
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(
            (this.xCord + 0.5) * Field.blockSize - Field.blockSize / 2 * KeyCField.sizeMultiplyer,
            (this.yCord + 0.5) * Field.blockSize - Field.blockSize / 2 * KeyCField.sizeMultiplyer,
            Field.blockSize * KeyCField.sizeMultiplyer,
            Field.blockSize * KeyCField.sizeMultiplyer
        );
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default KeyCField;