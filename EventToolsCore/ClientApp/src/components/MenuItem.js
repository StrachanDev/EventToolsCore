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
const React = require("react");
const mobx_1 = require("mobx");
const reactstrap_1 = require("reactstrap");
const react_router_dom_1 = require("react-router-dom");
require("./NavMenu.css");
class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.isExpanded = false;
    }
    toggleDropDown() {
        this.isExpanded = !this.isExpanded;
    }
    get canExecute() {
        return !this.props.CanExecute || this.props.CanExecute();
    }
    get isVisible() {
        return !this.props.IsVisible || this.props.IsVisible();
    }
    execute() {
        if (this.props.SubMenuItems && this.props.SubMenuItems.length) {
            this.toggleDropDown();
        }
        else {
            // Depends on the type of the menu item.  Needs to be defined.
            this.canExecute && (this.props.Execute && this.props.Execute());
        }
    }
    render() {
        return (this.props.SubMenuItems && this.props.SubMenuItems.length > 0) ? (React.createElement(reactstrap_1.DropdownMenu, { onClick: this.execute.bind(this) },
            React.createElement("ul", { className: "navbar-nav flex-grow" }, this.props.SubMenuItems.map((smi) => {
                return (React.createElement(MenuItem, { key: smi.Id, Id: smi.Id, DisplayName: smi.DisplayName, Description: smi.Description, SubMenuItems: smi.SubMenuItems }));
            })))) : (React.createElement(reactstrap_1.NavItem, { key: this.props.Id },
            React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: "/" }, this.props.DisplayName)));
    }
}
__decorate([
    mobx_1.observable,
    __metadata("design:type", Boolean)
], MenuItem.prototype, "isExpanded", void 0);
__decorate([
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuItem.prototype, "toggleDropDown", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], MenuItem.prototype, "canExecute", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], MenuItem.prototype, "isVisible", null);
__decorate([
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuItem.prototype, "execute", null);
exports.MenuItem = MenuItem;
