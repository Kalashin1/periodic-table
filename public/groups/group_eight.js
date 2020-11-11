import { nobleGas } from '../elements/groups.js';
const groupEight = [];
const helium = new nobleGas('Helium', 'He', 4, 2, 1, 'Non-Metal', 'Gas');
const neon = new nobleGas('Neon', 'Ne', 20.2, 10, 2, 'Non-Metal', 'Gas');
const argon = new nobleGas('Argon', 'Ar', 39.0, 18, 3, 'Non-Metal', 'Gas');
const krypton = new nobleGas('Krypton', 'Kr', 83.8, 36, 4, 'Non-Metal', 'Gas');
const xenon = new nobleGas('Xenon', 'Xe', 131, 54, 5, 'Non-Metal', 'Gas');
const radon = new nobleGas('Radon', 'Rn', 222, 86, 6, 'Non-Metal', 'Gas');
groupEight.push(helium, neon, argon, krypton, xenon, radon);
export class NobleGas {
    constructor() {
        this.elements = groupEight;
    }
}
