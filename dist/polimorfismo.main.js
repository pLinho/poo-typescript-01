"use strict";
exports.__esModule = true;
exports.Main = void 0;
var carro_1 = require("./carro");
var moto_1 = require("./moto");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var moto = new moto_1.Moto('Yamarra', new carro_1.MecanismoAceleracao());
        var carro = new carro_1.Carro('Honda Fit', new carro_1.MecanismoAceleracao());
        var listaAutomoveis = new Array(carro, moto);
        for (var _i = 0, listaAutomoveis_1 = listaAutomoveis; _i < listaAutomoveis_1.length; _i++) {
            var automovel = listaAutomoveis_1[_i];
            automovel.acelerar();
            automovel.acenderFarol();
        }
    };
    return Main;
}());
exports.Main = Main;
