import { Elements } from 'elements/properties.js';
import { groupThree } from '../elements/groups.js';

const groupThreeE: Elements[] = [];

const boron = new groupThree('Boron', 'B', 10.8, 5, 1, 'Semi Conductor', 'Solid');
const Aluminium = new groupThree('Aluminium', 'Al', 27.0, 13, 2, 'Metal', 'Solid');
const galium = new groupThree('Galium', 'Ga', 69.7, 31, 3, 'Metal', 'Solid');
const indium = new groupThree('Indium', 'In', 114.8, 49, 4,  'Metal', 'Solid');
const thalum = new groupThree('Thalum', 'Tl', 200.6, 81, 5,  'Metal', 'Solid');

groupThreeE.push(boron);
groupThreeE.push(Aluminium);
groupThreeE.push(galium);
groupThreeE.push(indium);
groupThreeE.push(thalum);

export class groupThreeEl{
    readonly elements : Elements [] = groupThreeE
}
