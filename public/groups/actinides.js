import { actinides } from '../elements/groups.js';
const actinide = [];
const actinum = new actinides('Actinum', 'Ac', 227, 89, 7, 'Actinide', 'Solid');
const thorium = new actinides('Thorium', 'Th', 232, 90, 7, 'Actinide', 'Solid');
const protactinum = new actinides('Protactinum', 'Pa', 231, 91, 7, 'Actinide', 'Solid');
const uranium = new actinides('Uranium', 'U', 238, 92, 7, 'Actinide', 'Solid');
const neptunium = new actinides('Neptunium', 'Np', 237, 93, 7, 'Actinide', 'Solid');
const plutonium = new actinides('Plutonium', 'Pu', 242, 94, 7, 'Actinide', 'Solid');
const americium = new actinides('Americium', 'Am', 243, 95, 7, 'Actinide', 'Solid');
const curium = new actinides('Curium', 'Cm', 247, 96, 7, 'Actinide', 'Solid');
const berkellum = new actinides('Berkellum', 'Bk', 245, 97, 7, 'Actinide', 'Solid');
const carlifornium = new actinides('Carlifornium', 'Cf', 251, 98, 7, 'Actinide', 'Solid');
const eisntienium = new actinides('Eisntienium', 'Es', 254, 99, 7, 'Actinide', 'Solid');
const fermium = new actinides('Fermium', 'Fm', 253, 100, 7, 'Actinide', 'Solid');
const mendelevium = new actinides('Mendelevium', 'Md', 256, 101, 7, 'Actinide', 'Solid');
const nobellum = new actinides('Nobellum', 'No', 254, 102, 7, 'Actinide', 'Solid');
const lawrencium = new actinides('Lawrencium', 'Lr', 262, 103, 7, 'Actinide', 'Solid');
actinide.push(actinum, thorium, protactinum, uranium, neptunium, plutonium, americium, curium, berkellum, carlifornium, eisntienium, fermium, mendelevium, nobellum, lawrencium);
export class Actinides {
    constructor() {
        this.actinides = actinide;
    }
}
