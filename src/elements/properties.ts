export interface Elements{
    name:string
    symbol: string
    atomicNo: number
    atomicMass: number
    period: number
    state: string
    phase: string
    
}

export interface group{
    group: number
}

export interface transitionMetals{
    group: string
}

export class metals{
    public phase: string = "solid"
}


