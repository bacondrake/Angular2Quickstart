"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CarPartsComponent = (function () {
    function CarPartsComponent() {
        this.carParts = [{
                "id": 1,
                "name": "Super Tires",
                "description": "These tires are the very best",
                "inStock": 5,
                "price": 4.99
            },
            {
                "id": 2,
                "name": "Reinforced Shocks",
                "description": "Shocks made from Kryptonite",
                "inStock": 4,
                "price": 9.99
            },
            {
                "id": 3,
                "name": "NOS button",
                "description": "Gives you the boost you need to win respect on the streets",
                "inStock": 0,
                "price": 16.99
            },
            {
                "id": 4,
                "name": "Padded seats",
                "description": "Super soft seats for a smooth ride",
                "inStock": 1,
                "price": 8.99
            }
        ];
    }
    // See commented out lines below for how this method works
    // Using ES2015 =>
    CarPartsComponent.prototype.totalCarParts = function () {
        return this.carParts.reduce(function (prev, current) { return prev + current.inStock; }, 0);
    };
    ;
    CarPartsComponent = __decorate([
        core_1.Component({
            selector: 'car-parts',
            templateUrl: 'app/car-parts.component.html',
            styleUrls: ['app/car-parts.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CarPartsComponent);
    return CarPartsComponent;
}());
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-parts.component.js.map