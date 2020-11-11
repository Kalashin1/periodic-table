class sblock {
    constructor(name, symbol, atomicMass, atomicNo, period) {
        this.name = name;
        this.symbol = symbol;
        this.atomicMass = atomicMass;
        this.atomicNo = atomicNo;
        this.period = period;
        this.block = 'S-Block';
    }
}
class pblock {
    constructor(name, symbol, atomicMass, atomicNo, period) {
        this.name = name;
        this.symbol = symbol;
        this.atomicMass = atomicMass;
        this.atomicNo = atomicNo;
        this.period = period;
        this.block = 'P-Block';
    }
}
export class AlkaliMetals extends sblock {
    constructor() {
        super(...arguments);
        this.group = 1;
    }
}
export class AlkaliEarthMetals extends sblock {
    constructor() {
        super(...arguments);
        this.group = 2;
    }
}
export class groupThree extends pblock {
    constructor() {
        super(...arguments);
        this.group = 3;
    }
}
