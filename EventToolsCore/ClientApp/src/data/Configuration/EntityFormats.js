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
class EntityFormat {
    constructor(EntityType, content) {
        this.EntityType = EntityType;
        // The reason for not auto-declaring this in the constructor is that now we can update the content at runtime 
        // and the rendered content will automagically change
        this.Content = content;
    }
}
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], EntityFormat.prototype, "Content", void 0);
exports.EntityFormat = EntityFormat;
class EntityTileFormat extends EntityFormat {
    constructor(entityType, tileLayout, content) {
        super(entityType, content);
        this.TileLayout = tileLayout;
    }
}
__decorate([
    mobx_1.observable,
    __metadata("design:type", String)
], EntityTileFormat.prototype, "TileLayout", void 0);
exports.EntityTileFormat = EntityTileFormat;
class EntityListFormat extends EntityFormat {
}
exports.EntityListFormat = EntityListFormat;
