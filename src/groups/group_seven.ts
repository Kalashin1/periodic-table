import { Elements } from 'elements/properties.js';
import { halogens } from  '../elements/groups.js';

const groupSeven : Elements[] = [];

const flourine = new halogens('Flourine', 'F', 19, 9, 1, 'Non-Metal', 'Gas');
const chlorine = new halogens('Chlorine', 'Cl', 35.5, 17, 2, 'Non-Metal', 'Gas');
const bromine = new halogens('Bromine', 'Br', 79.0, 35, 3, 'Non-Metal', 'Liquid');
const iodine = new halogens('Iodine', 'I', 114, 53, 4,  'Non-Metal', 'Solid');
const astantine = new halogens('Astantine', 'At', 210, 85, 5,  'Metal', 'Solid');

groupSeven.push(flourine, chlorine, bromine, iodine, astantine);

export class Halogens{
    readonly elements : Elements[] = groupSeven;
}