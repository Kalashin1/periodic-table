import { Elements } from 'elements/properties.js';
import { groupFour } from  '../elements/groups.js';

const groupFourE : Elements[] = [];

const carbon = new groupFour('Carbon', 'C', 12, 6, 1, 'Non-Metal', 'Solid');
const silicon = new groupFour('Silicon', 'Si', 28.1, 14, 2, 'Semi-Conductor', 'Solid');
const germanium = new groupFour('Germanium', 'Ge', 72.6, 32, 3, 'Semi-Conductor', 'Solid');
const tin = new groupFour('Tin', 'Sn', 118.7, 50, 4,  'Metal', 'Solid');
const lead = new groupFour('Lead', 'Pb', 207.2, 82, 5,  'Metal', 'Solid');

groupFourE.push(carbon, silicon, germanium, tin, lead);

export class groupFourEl{
    readonly elements : Elements[] = groupFourE;
}