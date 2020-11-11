import { AlkaliMetals } from '../elements/groups.js';
const groupOneE = [];
;
const hydrogen = new AlkaliMetals('Hydrogen', 'H', 1.0, 1, 1, 'Non-Metal', 'Solid');
const lithium = new AlkaliMetals('Lithium', 'Li', 6.9, 3, 2, 'Metal', 'Solid');
const sodium = new AlkaliMetals('Sodium', 'Na', 23, 11, 3, 'Metal', 'Solid');
const potassium = new AlkaliMetals('Potassium', 'K', 39.1, 19, 4, 'Metal', 'Solid');
const rubidium = new AlkaliMetals('Rubidium', 'Rb', 85.5, 37, 5, 'Metal', 'Solid');
const cesium = new AlkaliMetals('Cesium', 'Cs', 132.9, 59, 6, 'Metal', 'Solid');
const francium = new AlkaliMetals('Francium', 'Fr', 223, 87, 7, 'Metal', 'Solid');
groupOneE.push(hydrogen);
groupOneE.push(lithium);
groupOneE.push(sodium);
groupOneE.push(potassium);
groupOneE.push(rubidium);
groupOneE.push(cesium);
groupOneE.push(francium);
export class groupOne {
    constructor() {
        this.elements = groupOneE;
    }
}
