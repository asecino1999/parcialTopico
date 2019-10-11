export interface IPaquete {
    Hotel: number;
    AutoDiario: number;
    AutoSemanal: number;
    PasajeAdulto: number;
    PasajeNino: number;
    name:string;
    tarifa(): string[];
}

export class PaqueteTemporadaBaja implements IPaquete {


    Hotel: number = 130;
    AutoDiario: number = 22;
    AutoSemanal: number = 108;
    PasajeAdulto: number = 504;
    PasajeNino: number = 499;
    name:string="baja";

    tarifa(): string[] {
        return [
            "Hotel " + this.Hotel + "/Dia",
            "Auto " + this.AutoDiario + " /Dia " +
            this.AutoSemanal + " / Sem ",
            "Pasaje Adulto:" + this.PasajeAdulto +
            " Pasaje Niño " + this.PasajeNino
        ]
    }
}

export class PaqueteTemporadaAlta implements IPaquete {
    Hotel: number = 450;
    AutoDiario: number = 50;
    AutoSemanal: number = 250;
    PasajeAdulto: number = 950;
    PasajeNino: number = 680;
    name:string="alta";
    tarifa(): string[] {
        return [
            "Hotel " + this.Hotel + "/Dia",
            "Auto " + this.AutoDiario + " /Dia " +
            this.AutoSemanal + " / Sem ",
            "Pasaje Adulto:" + this.PasajeAdulto +
            " Pasaje Niño " + this.PasajeNino
        ]
    }
}





export interface CreadorApstracto {
    InsaciarPaquete(date: Date): IPaquete;
}

export class CreadorConcreto implements CreadorApstracto {
    InsaciarPaquete(date: Date): IPaquete {
        var mes = date.getMonth()
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        if (monthNames[mes] === "July" ||
            monthNames[mes] === "August" ||
            ( mes ===12-1 || mes <=3-1   )
        )
            return new PaqueteTemporadaAlta();
        else
            return new PaqueteTemporadaBaja();
    }
} 