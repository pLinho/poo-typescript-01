import { IAutomovel } from './automovel.interface';
import { Carro, MecanismoAceleracao } from './carro';
import { Moto } from './moto';

export class Main {

    public static main(): void {
        let moto: IAutomovel = new Moto('Yamarra', new MecanismoAceleracao());
        let carro: IAutomovel = new Carro('Honda Fit', new MecanismoAceleracao());

        let listaAutomoveis: Array<IAutomovel> = new Array(carro, moto);

        for (let automovel of listaAutomoveis) {
            automovel.acelerar();
            automovel.acenderFarol();
        }
    }
}