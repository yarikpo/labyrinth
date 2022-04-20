import {Field} from '/components/Field.js';

export class KeyBField extends Field {

    static sizeMultiplyer = 0.2;

    constructor({xCord, yCord, ctx}) {
        super({xCord, yCord, ctx});

        this.color = '#12dc23';
        this.type = 'key-door-B';
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(
            (this.xCord + 0.5) * Field.blockSize - Field.blockSize / 2 * KeyBField.sizeMultiplyer,
            (this.yCord + 0.5) * Field.blockSize - Field.blockSize / 2 * KeyBField.sizeMultiplyer,
            Field.blockSize * KeyBField.sizeMultiplyer,
            Field.blockSize * KeyBField.sizeMultiplyer
        );
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default KeyBField;