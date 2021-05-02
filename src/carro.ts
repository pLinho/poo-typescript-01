import { IAutomovel } from './automovel.interface';

export class MecanismoAceleracao {
    automovel: IAutomovel;

    public acelerar() {

    }
}

export class Carro implements IAutomovel {
    private velocidade: number;
    private modelo: string;
    private mecanismoAceleracao: MecanismoAceleracao;
    private cor: string;
    private farolAceso: boolean;

    constructor(modelo: string, mecanismoAceleracao: MecanismoAceleracao) {
        this.modelo = modelo;
        this.mecanismoAceleracao = mecanismoAceleracao;
    }

    acelerar(): void {
        /* Código do carro para acelerar */
        this.mecanismoAceleracao.acelerar()
    }

    frear(): void {
        /* Código do Carro para frear */
    }

    acenderFarol() {

    }

    private setVelocidade(valor: number) {
        this.velocidade = valor;
    }

    public getVelocidade() {
        return this.velocidade;
    }

    public getModelo() {
        return this.modelo;
    }

    public getCor() {
        return this.cor;
    }

    public setCor(cor: string) {
        this.cor = cor;
    }

}