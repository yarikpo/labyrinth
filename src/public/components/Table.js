import BlockedField from './BlockedField.js';
import {EmptyField} from '/components/EmptyField.js';
import {Field} from '/components/Field.js';

import map1 from '/levels/level01.json' assert { type: "json" };

export class Table {

    constructor({width, height, ctx}) {
        this.width = Math.floor(width / Field.blockSize);
        this.height = Math.floor(height / Field.blockSize);
        this.ctx = ctx;

        this.field = [];
        for (let i = 0; i < this.height; ++i) {
            this.field.push([]);
            for (let j = 0; j < this.width; ++j) {
                this.field[i].push(new EmptyField({xCord: j, yCord: i, ctx: ctx}));
            }
        }

        console.log(this.field);
    }

    draw() {
        for (let i = 0; i < this.field.length; ++i) {
            for (let j = 0; j < this.field[i].length; ++j) {
                this.field[i][j].draw();
            }
        }
    }

    importLevel1() {
        for (let i = 0; i < map1.map.length; ++i) {
            for (let j = 0; j < map1.map[0].length; ++j) {
                if (map1.map[i][j] == ' ') this.field[i][j] = new EmptyField({xCord: j, yCord: i, ctx: this.ctx});
                if (map1.map[i][j] == '#') this.field[i][j] = new BlockedField({xCord: j, yCord: i, ctx: this.ctx});
            }
        }
    }
}

export default Table;