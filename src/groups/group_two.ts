import { Elements } from 'elements/properties.js';
import { AlkaliEarthMetals } from '../elements/groups.js';

const groupTwoE: Elements[] = [];

const berrylium = new AlkaliEarthMetals('Berrylium', 'Be', 9.0, 4, 1, 'Metal', 'Solid');
const magnesium = new AlkaliEarthMetals('Magnesium', 'Mg', 24.3, 12, 2, 'Metal', 'Solid');
const calcium = new AlkaliEarthMetals('Calcium', 'Ca', 40, 20, 3, 'Metal', 'Solid');
const strontium = new AlkaliEarthMetals('Strontium', 'Sr', 87.6, 38, 5,  'Metal', 'Solid');
const barium = new AlkaliEarthMetals('Barium', 'Ba', 137.3, 56,  6,  'Metal', 'Solid');
const radium = new AlkaliEarthMetals('Radium', 'Ra', 226, 88, 7,  'Metal', 'Solid');

groupTwoE.push(berrylium);
groupTwoE.push(magnesium);
groupTwoE.push(calcium);
groupTwoE.push(strontium);
groupTwoE.push(barium);
groupTwoE.push(radium);

export class groupTwo{
    readonly elements : Elements [] = groupTwoE
}
