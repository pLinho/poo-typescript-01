"use strict";
exports.__esModule = true;
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(modelo, mecanismoAceleracao) {
        this.modelo = modelo;
        this.mecanismoAceleracao = mecanismoAceleracao;
    }
    Moto.prototype.acelerar = function () {
        this.mecanismoAceleracao.acelerar();
    };
    Moto.prototype.frear = function () {
    };
    Moto.prototype.acenderFarol = function () {
    };
    return Moto;
}());
exports.Moto = Moto;
