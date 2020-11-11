import { lanathides } from '../elements/groups.js';
const lanathide = [];
const lanthalum = new lanathides('Lanthalum', 'La', 138.9, 57, 6, 'Lanathides', 'Solid');
const cerium = new lanathides('Cerium', 'Ce', 140.1, 58, 6, 'Lanathides', 'Solid');
const Prasseodymum = new lanathides('Prasseodymum', 'Pr', 140.9, 59, 6, 'Lanathides', 'Solid');
const neodymium = new lanathides('Neodymiun', 'Nd', 144.2, 60, 6, 'Lanathides', 'Solid');
const promethium = new lanathides('Promethium', 'Pm', 147, 61, 6, 'Lanathides', 'Solid');
const samarium = new lanathides('Samarium', 'Sm', 150.3, 62, 6, 'Lanathides', 'Solid');
const europium = new lanathides('Europium', 'Eu', 151, 63, 6, 'Lanathides', 'Solid');
const gandolinium = new lanathides('Gandolinium', 'Gd', 157.2, 64, 6, 'Lanathides', 'Solid');
const terbium = new lanathides('Terbium', 'Tb', 158.9, 65, 6, 'Lanathides', 'Solid');
const dysposium = new lanathides('Dysposium', 'Dy', 162.5, 66, 6, 'Lanathides', 'Solid');
const holium = new lanathides('Holium', 'Ho', 164.9, 67, 6, 'Lanathides', 'Solid');
const erbium = new lanathides('Erbium', 'Er', 167.3, 68, 6, 'Lanathides', 'Solid');
const thullum = new lanathides('Thullum', 'Tm', 168.9, 69, 6, 'Lanathides', 'Solid');
const ytterbium = new lanathides('Ytterbium', 'Yb', 173.0, 70, 6, 'Lanathides', 'Solid');
const lutetium = new lanathides('Lutetium', 'Lu', 175, 71, 6, 'Lanathides', 'Solid');
lanathide.push(lanthalum, cerium, Prasseodymum, neodymium, promethium, samarium, europium, gandolinium, terbium, erbium, holium, dysposium, thullum, ytterbium, lutetium);
export class Lanathides {
    constructor() {
        this.lanathides = lanathide;
    }
}
