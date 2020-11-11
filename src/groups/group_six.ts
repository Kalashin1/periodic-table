import { Elements } from 'elements/properties.js';
import { chalcogens } from  '../elements/groups.js';

const groupSix : Elements[] = [];

const oxygen = new chalcogens('Oxygen', 'O', 16, 8, 1, 'Non-Metal', 'Gas');
const sulphur = new chalcogens('Sulphur', 'S', 32.0, 16, 2, 'Non-Metal', 'Gas');
const selenium = new chalcogens('Selenium', 'Se', 79.0, 34, 3, 'Non-Metal', 'Gas');
const technetium = new chalcogens('Technetium', 'Te', 127, 52, 4,  'Semi-Conductor', 'Solid');
const polonium = new chalcogens('Polonium', 'Po', 210, 84, 5,  'Metal', 'Solid');

groupSix.push(oxygen, sulphur, selenium, technetium, polonium);

export class Chalcogens{
    readonly elements : Elements[] = groupSix;
}