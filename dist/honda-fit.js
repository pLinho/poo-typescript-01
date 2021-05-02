"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.HondaFit = void 0;
var carro_1 = require("./carro");
var HondaFit = /** @class */ (function (_super) {
    __extends(HondaFit, _super);
    function HondaFit(mecanismoAceleracao) {
        var _this = this;
        var modelo = 'Honda Fit';
        // Chama o construtor da classe mãe, ou seja, da classe "Carro"
        _this = _super.call(this, modelo, mecanismoAceleracao) || this;
        return _this;
    }
    return HondaFit;
}(carro_1.Carro));
exports.HondaFit = HondaFit;
