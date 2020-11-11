export class sblock {
    constructor(name, symbol, atomicMass, atomicNo, period, state, phase) {
        this.name = name;
        this.symbol = symbol;
        this.atomicMass = atomicMass;
        this.atomicNo = atomicNo;
        this.period = period;
        this.state = state;
        this.phase = phase;
        this.block = 'S-Block';
    }
}
export class pblock {
    constructor(name, symbol, atomicMass, atomicNo, period, state, phase) {
        this.name = name;
        this.symbol = symbol;
        this.atomicMass = atomicMass;
        this.atomicNo = atomicNo;
        this.period = period;
        this.state = state;
        this.phase = phase;
        this.block = 'P-Block';
    }
}
export class dblock {
    constructor(name, symbol, atomicMass, atomicNo, period, phase) {
        this.name = name;
        this.symbol = symbol;
        this.atomicMass = atomicMass;
        this.atomicNo = atomicNo;
        this.period = period;
        this.phase = phase;
        this.block = 'D-Block';
        this.state = 'Transition-Metal';
    }
}
export class fblock {
    constructor(name, symbol, atomicMass, atomicNo, period, state, phase) {
        this.name = name;
        this.symbol = symbol;
        this.atomicMass = atomicMass;
        this.atomicNo = atomicNo;
        this.period = period;
        this.state = state;
        this.phase = phase;
        this.block = 'F-Block';
    }
}
