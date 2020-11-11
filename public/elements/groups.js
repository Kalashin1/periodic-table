import { sblock, pblock, dblock, fblock } from './blocks.js';
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
export class groupFour extends pblock {
    constructor() {
        super(...arguments);
        this.group = 4;
    }
}
export class pnictogens extends pblock {
    constructor() {
        super(...arguments);
        this.group = 5;
    }
}
export class chalcogens extends pblock {
    constructor() {
        super(...arguments);
        this.group = 6;
    }
}
export class halogens extends pblock {
    constructor() {
        super(...arguments);
        this.group = 7;
    }
}
export class nobleGas extends pblock {
    constructor() {
        super(...arguments);
        this.group = 8;
    }
}
export class transitionMetal extends dblock {
    constructor() {
        super(...arguments);
        this.group = 'B';
    }
}
export class lanathides extends fblock {
}
;
export class actinides extends fblock {
}
;
