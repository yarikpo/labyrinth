export class Field {

    static blockSize = parseInt(localStorage.getItem('blockSize')) || 64;

    constructor({xCord, yCord, ctx}) {
        // throw new Error("You can't create object from abstract class #- Field -#.");
        this.xCord = xCord;
        this.yCord = yCord;
        this.ctx = ctx;
    }

    draw() {
        throw new Error("You have to implement method #- draw -# in abstract class #- Field -#.")
    }
}

export default Field;