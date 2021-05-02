import { Carro, MecanismoAceleracao } from './carro';

export class HondaFit extends Carro {
    constructor(mecanismoAceleracao: MecanismoAceleracao) {
        const modelo = 'Honda Fit';
        // Chama o construtor da classe mãe, ou seja, da classe "Carro"
        super(modelo, mecanismoAceleracao);
    }
}