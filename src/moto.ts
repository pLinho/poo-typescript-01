import { IAutomovel } from './automovel.interface';
import { MecanismoAceleracao } from './carro';

export class Moto implements IAutomovel {
    private mecanismoAceleracao: MecanismoAceleracao;
    private modelo: string;
    constructor(modelo: string, mecanismoAceleracao: MecanismoAceleracao) {
        this.modelo = modelo;
        this.mecanismoAceleracao = mecanismoAceleracao;
    }
    acelerar(): void {
        this.mecanismoAceleracao.acelerar();
    }
    frear(): void {
    }
    acenderFarol(): void {
    }
}