import { Elements } from 'elements/properties.js';
import { pnictogens } from  '../elements/groups.js';

const groupFive : Elements[] = [];

const nitrogen = new pnictogens('Nitrogen', 'N', 14, 7, 1, 'Non-Metal', 'Gas');
const phosphorus = new pnictogens('Phosphorus', 'P', 31.0, 15, 2, 'Non-Metal', 'Gas');
const arsenic = new pnictogens('Arsenic', 'As', 74.9, 33, 3, 'Semi-Conductor', 'Solid');
const antimony = new pnictogens('Antimony', 'Sb', 121.8, 51, 4,  'Semi-Conductor', 'Solid');
const bismuth = new pnictogens('Bismuth', 'Bi', 209.0, 83, 5,  'Metal', 'Solid');

groupFive.push(nitrogen, phosphorus, arsenic, antimony, bismuth);

export class Pnictogens{
    readonly elements : Elements[] = groupFive;
}