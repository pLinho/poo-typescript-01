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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Mamifero = /** @class */ (function (_super) {
    __extends(Mamifero, _super);
    function Mamifero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mamifero;
}(Animal));
var Ave = /** @class */ (function (_super) {
    __extends(Ave, _super);
    function Ave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ave;
}(Animal));
var BeijaFlor = /** @class */ (function (_super) {
    __extends(BeijaFlor, _super);
    function BeijaFlor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BeijaFlor;
}(Ave));
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cachorro;
}(Mamifero));
var Homem = /** @class */ (function (_super) {
    __extends(Homem, _super);
    function Homem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Homem;
}(Mamifero));
