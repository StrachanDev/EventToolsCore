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
const react_1 = require("react");
;
class MenuItem extends react_1.Component {
    constructor(props) {
        super(props);
        this.Id = props.id;
        this.DisplayName = props.displayName;
        this.Description = props.description;
        this.execute = props.execute;
        this.canExecute = props.canExecute;
        this.isVisible = props.isVisible;
    }
    get CanExecute() {
        // If canExecute is not defined, then return true, or call canExecute and return the resulting value
        return !this.canExecute || this.canExecute();
    }
    get IsVisible() {
        // If isVisible is not defined, then return true, or call isVisible and return the resulting value
        return !this.canExecute || this.canExecute();
    }
    Execute() {
        // If we have submenu items then toggle the expanded state, otherwise call the execute function
        if (this.SubMenuItems && this.SubMenuItems.length > 0) {
            this.IsExpanded = !this.IsExpanded;
        }
        else {
            this.execute && this.execute();
        }
    }
}
__decorate([
    mobx_1.observable,
    __metadata("design:type", Boolean)
], MenuItem.prototype, "IsExpanded", void 0);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], MenuItem.prototype, "CanExecute", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], MenuItem.prototype, "IsVisible", null);
__decorate([
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuItem.prototype, "Execute", null);
exports.MenuItem = MenuItem;
class LinkMenuItem extends MenuItem {
    constructor(id, displayName, description, link, canExecute, isVisible) {
        super({ id, displayName, description, undefined, canExecute, isVisible });
        this.Link = link;
    }
    Execute() {
        // Navigate to Link
    }
}
__decorate([
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinkMenuItem.prototype, "Execute", null);
exports.LinkMenuItem = LinkMenuItem;
;
