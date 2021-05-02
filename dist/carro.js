"use strict";
exports.__esModule = true;
exports.Carro = exports.MecanismoAceleracao = void 0;
var MecanismoAceleracao = /** @class */ (function () {
    function MecanismoAceleracao() {
    }
    MecanismoAceleracao.prototype.acelerar = function () {
    };
    return MecanismoAceleracao;
}());
exports.MecanismoAceleracao = MecanismoAceleracao;
var Carro = /** @class */ (function () {
    function Carro(modelo, mecanismoAceleracao) {
        this.modelo = modelo;
        this.mecanismoAceleracao = mecanismoAceleracao;
    }
    Carro.prototype.acelerar = function () {
        /* Código do carro para acelerar */
        this.mecanismoAceleracao.acelerar();
    };
    Carro.prototype.frear = function () {
        /* Código do Carro para frear */
    };
    Carro.prototype.acenderFarol = function () {
    };
    Carro.prototype.setVelocidade = function (valor) {
        this.velocidade = valor;
    };
    Carro.prototype.getVelocidade = function () {
        return this.velocidade;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (cor) {
        this.cor = cor;
    };
    return Carro;
}());
exports.Carro = Carro;
