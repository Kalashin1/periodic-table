import { Elements} from './properties.js';

export class sblock implements Elements{
    private block: string = 'S-Block'

    constructor(public name:string, public symbol:string, public atomicMass: number, public atomicNo: number, public period: number, public state: string, public phase: string){}
}


export class pblock implements Elements{
    private block: string = 'P-Block';

    constructor(public name:string, public symbol:string, public atomicMass: number, public atomicNo: number, public period: number, public state: string, public phase: string){}
}

export class dblock implements Elements{
    private block: string = 'D-Block';
    state: string = 'Transition-Metal'

    constructor(public name:string, public symbol:string, public atomicMass: number, public atomicNo: number, public period: number, public phase: string){}
}

export class fblock implements Elements{
    private block: string = 'F-Block';


    constructor(public name:string, public symbol:string, public atomicMass: number, public atomicNo: number, public period: number, public state:string, public phase: string){}
}
