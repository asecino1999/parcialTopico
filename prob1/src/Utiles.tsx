export interface Utiles {
    obtenerLista (sexo:number):string[];
}


export class Nivel1 implements Utiles {
    utilV:string []=["Zapatillas","buzo", "soga de saltar"]
    utilM:string[]=["Zapatillas","buzo","6 m de elástico" ]
    obtenerLista (sexo:number):string[]{
        return sexo>0?this.utilV:this.utilM;
    }
}

export class Nivel2 implements Utiles {
    utilV:string []=["Zapatillas","buzo", "pelotade fútbol Nro. 4"]
    utilM:string[]=["Zapatillas","buzo","pelotade voley Nro. 4"]
    obtenerLista (sexo:number):string[]{
        return sexo>0?this.utilV:this.utilM;
    }
}

export class Nivel3 implements Utiles {
    utilV:string []=["bate","pelota","guante"]
    utilM:string[]=["bate","pelota","guante"]
    obtenerLista (sexo:number):string[]{
        return sexo>0?this.utilV:this.utilM;
    }
}

export class Nivel4 implements Utiles {
    utilV:string []=["Ropa de baño","gorro", "goggles", "chinpunes"]
    utilM:string[]=["Ropa de baño","gorro", "goggles", "tutu"]
    obtenerLista (sexo:number):string[]{
        return sexo>0?this.utilV:this.utilM;
    }
}


export class Nivel5 implements Utiles {
    utilV:string []=["Ropa de baño", "gorro", "goggles", "chinpunes","skanteboard"]
    utilM:string[]=["Ropa de baño", "gorro", "goggles","stepper" ]
    obtenerLista (sexo:number):string[]{
        return sexo>0?this.utilV:this.utilM;
    }
}
