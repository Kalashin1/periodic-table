import { group, transitionMetals } from './properties.js';
import { sblock, pblock, dblock, fblock} from './blocks.js';

export class AlkaliMetals extends sblock implements group{
    group: number = 1;
}
export class AlkaliEarthMetals extends sblock implements group{
    group: number = 2;
}

export class groupThree extends pblock implements group{
    group: number = 3;
}

export class groupFour extends pblock implements group{
    group: number = 4
}

export class pnictogens extends pblock implements group{
    group: number = 5
}

export class chalcogens extends pblock implements group{
    group: number = 6;
}
export class halogens extends pblock implements group{
    group: number = 7
}
export class nobleGas extends pblock implements group{
    group: number = 8
}

export class transitionMetal extends dblock implements transitionMetals{
   group: string ='B';
  
}



export class lanathides extends fblock {};
export class actinides extends fblock{};
