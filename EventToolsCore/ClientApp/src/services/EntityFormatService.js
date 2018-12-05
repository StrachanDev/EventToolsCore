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
const EntityFormats_1 = require("../data/Configuration/EntityFormats");
class EntityFormatService {
    constructor() {
        this._typeOnlyFormatters = [];
        this._typeAndFormatFormatters = [];
        this._typeFormatAndUserFormatters = [];
    }
    AddEntityFormat(entityFormat, entityType, format, userType) {
        if (entityType) {
            if (format) {
                if (userType) {
                    this._typeFormatAndUserFormatters[userType][format][entityType] = entityFormat;
                }
                else {
                    this._typeAndFormatFormatters[format][entityType] = entityFormat;
                }
            }
            else {
                this._typeOnlyFormatters[entityType] = entityFormat;
            }
        }
        else {
            throw "No qualifiers specified to AddEntityFormat";
        }
    }
    // userType: the type of user - anonymous, remote, inperson etc.
    // entityType: the type of item being rendered - attendee, session, meeting, expert etc.
    // format: the major format type - tile, summary, block, listEntry
    GetEntityFormat(entityType, format, userType) {
        // Find the most appropriate entity format and return it.
        let entityFormat;
        const userTypes = this._typeFormatAndUserFormatters[userType];
        if (userTypes) {
            const userFormatTypes = userTypes[format];
            if (userFormatTypes) {
                entityFormat = userFormatTypes[entityType];
            }
        }
        if (!entityFormat) {
            const formatTypes = this._typeAndFormatFormatters[format];
            if (formatTypes) {
                entityFormat = formatTypes[entityType];
            }
        }
        if (!entityFormat) {
            entityFormat = this._typeOnlyFormatters[entityType];
        }
        return entityFormat;
    }
}
__decorate([
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EntityFormats_1.EntityFormat, String, String, String]),
    __metadata("design:returntype", void 0)
], EntityFormatService.prototype, "AddEntityFormat", null);
exports.EntityFormatService = EntityFormatService;
