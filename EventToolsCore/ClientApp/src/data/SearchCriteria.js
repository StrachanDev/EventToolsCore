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
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
class SearchFacet {
    constructor(Category, Value) {
        this.Category = Category;
        this.Value = Value;
    }
}
exports.SearchFacet = SearchFacet;
class SearchCriteria {
    constructor(Entity, text) {
        this.Entity = Entity;
        this.Text = text;
    }
}
__decorate([
    mobx_1.observable,
    __metadata("design:type", String)
], SearchCriteria.prototype, "Text", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", Array)
], SearchCriteria.prototype, "Facets", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", Number)
], SearchCriteria.prototype, "Page", void 0);
exports.SearchCriteria = SearchCriteria;
