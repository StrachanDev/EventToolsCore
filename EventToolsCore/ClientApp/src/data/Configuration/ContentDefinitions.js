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
const Entity_1 = require("../Entity");
// This defines how to render a specific field.
// Each FormatType will have a renderer defined (or will use the default renderer, which will probably just be generic text)
// 
class FieldFormatDefinition {
    constructor(field, formatType, entityType) {
        this.Field = field;
        this.FormatType = formatType;
        this.EntityType = entityType;
    }
}
__decorate([
    mobx_1.observable,
    __metadata("design:type", String)
], FieldFormatDefinition.prototype, "Field", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", String)
], FieldFormatDefinition.prototype, "FormatType", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", String)
], FieldFormatDefinition.prototype, "EntityType", void 0);
exports.FieldFormatDefinition = FieldFormatDefinition;
// String returns a single field from the entity
class StringContentDefinition {
    constructor(field) {
        this.field = field;
    }
    Value(entity) {
        // TODO: This needs to take the field and entity type and convert it into a FieldFormat
        return [entity[this.field]];
    }
}
__decorate([
    mobx_1.computed,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Entity_1.Entity]),
    __metadata("design:returntype", Array)
], StringContentDefinition.prototype, "Value", null);
exports.StringContentDefinition = StringContentDefinition;
// Array concatenates the content, with an optional separator
class ArrayContentDefinition {
    constructor(value, separator) {
        this.value = value;
        this.separator = separator;
    }
    Value(entity) {
        return this.value.map(cd => cd.Value(entity)).reduce((pv, cv) => {
            if (pv) {
                this.separator && pv.push(new FieldFormatDefinition(this.separator, 'Literal'));
                pv.push(...cv);
            }
            else {
                pv = cv;
            }
            return pv;
        }, undefined);
    }
}
__decorate([
    mobx_1.computed,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Entity_1.Entity]),
    __metadata("design:returntype", Array)
], ArrayContentDefinition.prototype, "Value", null);
exports.ArrayContentDefinition = ArrayContentDefinition;
// Coalesce returns the first non-empty content
class CoalesceContentDefinition {
    constructor(value) {
        this.value = value;
    }
    Value(entity) {
        return this.value.reduce((pv, cv) => { return pv || cv.Value(entity); }, undefined);
    }
}
__decorate([
    mobx_1.computed,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Entity_1.Entity]),
    __metadata("design:returntype", Array)
], CoalesceContentDefinition.prototype, "Value", null);
exports.CoalesceContentDefinition = CoalesceContentDefinition;
