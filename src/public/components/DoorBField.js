import {Field} from '/components/Field.js';

export class DoorBField extends Field {

    constructor({xCord, yCord, ctx}) {
        super({xCord, yCord, ctx});

        this.color = '#12dc23';
        this.type = 'blocked-door-B';
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.xCord * Field.blockSize, this.yCord * Field.blockSize, Field.blockSize, Field.blockSize);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default DoorBField;