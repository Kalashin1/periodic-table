import { transitionMetal } from '../elements/groups.js';
const transitionMetals = [];
const scandium = new transitionMetal('Scandium', 'Sc', 45, 21, 3, 'Solid');
const titanium = new transitionMetal('Titanium', 'Ti', 47.8, 22, 3, 'Solid');
const vanadium = new transitionMetal('Vanadium', 'V', 50.9, 23, 3, 'Solid');
const chromium = new transitionMetal('Chromium', "Cr", 52, 24, 3, 'Solid');
const manganese = new transitionMetal('Manganese', 'Mn', 54.9, 25, 3, 'Solid');
const iron = new transitionMetal('Iron', 'Fe', 55.9, 26, 3, 'Solid');
const colbalt = new transitionMetal('Colbalt', 'Co', 58.9, 27, 3, 'Solid');
const nickel = new transitionMetal('Nickel', 'Ni', 58.7, 28, 33, 'Solid');
const copper = new transitionMetal('Copper', 'Cu', 63.5, 29, 3, 'Solid');
const zinc = new transitionMetal('Zinc', 'Zn', 65.4, 30, 3, 'Solid');
const yittrium = new transitionMetal('Yittrium', 'Y', 88.9, 39, 4, 'Solid');
const zircornium = new transitionMetal('Zircornium', 'Zr', 91.2, 40, 4, 'Solid');
const nobium = new transitionMetal('Nobium', 'Nb', 92.9, 41, 4, 'Solid');
const molybdenum = new transitionMetal('Molybdenum', 'Mo', 95.9, 42, 4, 'Solid');
const technetium = new transitionMetal('Technetium', 'Tc', 99, 43, 4, 'Solid');
const rutherium = new transitionMetal('Rutherium', 'Ru', 101.1, 44, 4, 'Solid');
const rhodium = new transitionMetal('Rhodium', 'Rh', 102.3, 45, 4, 'Solid');
const palladium = new transitionMetal('Palladium', 'Pd', 106.4, 46, 4, 'Solid');
const silver = new transitionMetal('Silver', 'Ag', 107.9, 47, 4, 'Solid');
const cadmium = new transitionMetal('Cadmium', 'Cd', 112.4, 48, 4, 'Solid');
const halfnium = new transitionMetal('Halfnium', 'Hf', 91.2, 72, 5, 'Solid');
const tantalum = new transitionMetal('Tantalum', 'Ta', 181, 73, 5, 'Solid');
const tungsten = new transitionMetal('Tungsten', 'W', 183.9, 74, 5, 'Solid');
const rhenium = new transitionMetal('Rhenium', 'Rh', 186.2, 75, 5, 'Solid');
const osmiunm = new transitionMetal('Osmium', 'Os', 190.2, 76, 5, 'Solid');
const iridium = new transitionMetal('Iridium', 'Ir', 192.2, 77, 5, 'Solid');
const platinum = new transitionMetal('Platinum', 'Pt', 195.1, 78, 5, 'Solid');
const gold = new transitionMetal('Gold', 'Au', 197.0, 79, 5, 'Solid');
const mecury = new transitionMetal('Mecury', 'Hg', 200.6, 80, 5, 'Liquid');
const lanathides = new transitionMetal('Lanathides', 'To', 71, 57, 6, 'solid');
const actinides = new transitionMetal('Actinides', 'To', 103, 89, 7, 'solid');
transitionMetals.push(scandium, titanium, vanadium, chromium, manganese, iron, colbalt, nickel, copper, zinc, yittrium, zircornium, nobium, molybdenum, technetium, rutherium, rhodium, palladium, silver, cadmium, lanathides, halfnium, tantalum, tungsten, rhenium, osmiunm, iridium, platinum, gold, mecury, actinides);
export class TransitionMetals {
    constructor() {
        this.elements = transitionMetals;
    }
}
