export class Evento {
    private nome: string;
    private inicio: Dia;
    private fim: Dia;
}

export class Dia {
    private eventos: Evento[];
    private ano: Ano;
    private mes: Mes;
    private dia: number;
}

export class Mes {
    private dias: Dia[];
    private ano: Ano;
    private mes: number;
}

export class Ano {
    private messes: Mes[];
    private ano: string;
}

export class Calendario {
    current: Dia;
}