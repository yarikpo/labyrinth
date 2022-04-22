import BlockedField from './BlockedField.js';
import {EmptyField} from '/components/EmptyField.js';
import {DoorAField} from '/components/DoorAField.js';
import {DoorBField} from '/components/DoorBField.js';
import {DoorCField} from '/components/DoorCField.js';
import {KeyAField} from '/components/KeyAField.js';
import {KeyBField} from '/components/KeyBField.js';
import {KeyCField} from '/components/KeyCField.js';
import {Field} from '/components/Field.js';
import {FinishField} from '/components/FinishField.js';
import {HealField} from '/components/HealField.js';
import {BombField} from '/components/BombField.js';
import {CoinField} from '/components/CoinField.js';

import map1 from '/levels/level01.json' assert { type: "json" };
import map2 from '/levels/level02.json' assert { type: "json" };
import map3 from '/levels/level03.json' assert { type: "json" };
import map4 from '/levels/level04.json' assert { type: "json" };
import map5 from '/levels/level05.json' assert { type: "json" };
import map6 from '/levels/level06.json' assert { type: "json" };
import map7 from '/levels/level07.json' assert { type: "json" };
import map8 from '/levels/level08.json' assert { type: "json" };
import map9 from '/levels/level09.json' assert { type: "json" };

export class Table {

    constructor({width, height, ctx}) {
        this.width = Math.floor(width / Field.blockSize);
        this.height = Math.floor(height / Field.blockSize);
        this.ctx = ctx;

        this.buildField();
    }

    buildField() {
        this.field = [];
        for (let i = 0; i < this.height; ++i) {
            this.field.push([]);
            for (let j = 0; j < this.width; ++j) {
                this.field[i].push(new EmptyField({xCord: j, yCord: i, ctx: this.ctx}));
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
    

    importLevel(levelNumber) {
        let map = map1.map;
        map = levelNumber == 1 ? map1.map : map;
        map = levelNumber == 2 ? map2.map : map;
        map = levelNumber == 3 ? map3.map : map;
        map = levelNumber == 4 ? map4.map : map;
        map = levelNumber == 5 ? map5.map : map;
        map = levelNumber == 6 ? map6.map : map;
        map = levelNumber == 7 ? map7.map : map;
        map = levelNumber == 8 ? map8.map : map;
        map = levelNumber == 9 ? map9.map : map;

        console.log(map);

        Field.blockSize = Math.floor(576 / map.length);

        this.buildField();

        for (let i = 0; i < map.length; ++i) {
            for (let j = 0; j < map[0].length; ++j) {
                if (map[i][j] == ' ') this.field[i][j] = new EmptyField({xCord: j, yCord: i, ctx: this.ctx});
                if (map[i][j] == '#') this.field[i][j] = new BlockedField({xCord: j, yCord: i, ctx: this.ctx});
                if (map[i][j] == 'A') this.field[i][j] = new DoorAField({xCord: j, yCord: i, ctx: this.ctx});
                if (map[i][j] == 'a') this.field[i][j] = new KeyAField({xCord: j, yCord: i, ctx: this.ctx});
                if (map[i][j] == 'B') this.field[i][j] = new DoorBField({xCord: j, yCord: i, ctx: this.ctx});
                if (map[i][j] == 'b') this.field[i][j] = new KeyBField({xCord: j, yCord: i, ctx: this.ctx});
                if (map[i][j] == 'C') this.field[i][j] = new DoorCField({xCord: j, yCord: i, ctx: this.ctx});
                if (map[i][j] == 'c') this.field[i][j] = new KeyCField({xCord: j, yCord: i, ctx: this.ctx});
                if (map[i][j] == 'F') this.field[i][j] = new FinishField({xCord: j, yCord: i, ctx: this.ctx});
                if (map[i][j] == 'h') this.field[i][j] = new HealField({xCord: j, yCord: i, ctx: this.ctx});
                if (map[i][j] == 'd') this.field[i][j] = new BombField({xCord: j, yCord: i, ctx: this.ctx});
                if (map[i][j] == 'p') this.field[i][j] = new CoinField({xCord: j, yCord: i, ctx: this.ctx});
            }
        }

        
    }
}

export default Table;