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
const mobx_react_1 = require("mobx-react");
const react_router_dom_1 = require("react-router-dom");
const MenuItem_1 = require("./MenuItem");
require("./NavMenu.css");
let NavigationMenu = class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (React.createElement("header", null,
            React.createElement(reactstrap_1.Navbar, { className: "navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3", light: true },
                React.createElement(reactstrap_1.Container, null,
                    React.createElement(reactstrap_1.NavbarBrand, { tag: react_router_dom_1.Link, to: "/" }, "EventToolsCore"),
                    React.createElement(reactstrap_1.NavbarToggler, { onClick: this.toggleNavbar, className: "mr-2" }),
                    React.createElement(reactstrap_1.Collapse, { className: "d-sm-inline-flex flex-sm-row-reverse", isOpen: true, navbar: true },
                        React.createElement("ul", { className: "navbar-nav flex-grow" }, this.props.menuService.menuItems.map(mi => {
                            return (React.createElement(MenuItem_1.MenuItem, { key: mi.Id, Id: mi.Id, DisplayName: mi.DisplayName, Description: mi.Description }));
                        })))))));
    }
};
__decorate([
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavigationMenu.prototype, "toggleNavbar", null);
NavigationMenu = __decorate([
    mobx_react_1.inject('menuService'),
    __metadata("design:paramtypes", [Object])
], NavigationMenu);
exports.NavigationMenu = NavigationMenu;
