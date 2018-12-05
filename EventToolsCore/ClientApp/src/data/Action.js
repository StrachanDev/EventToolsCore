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
const mobx_react_1 = require("mobx-react");
;
;
class GenericAction extends React.Component {
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
        return this.IsVisible && !this.IsExecuting && (!this.canExecute || this.canExecute());
    }
    get IsVisible() {
        // If isVisible is not defined, then return true, or call isVisible and return the resulting value
        return !this.isVisible || this.isVisible();
    }
    Execute() {
        // If this is allowed to execute and this.execute is defined, then call it
        this.CanExecute &&
            this.execute &&
            (this.IsExecuting = true) &&
            this.execute()
                .then(() => {
                this.IsExecuting = false;
            })
                .catch(() => {
                this.IsExecuting = false;
            });
    }
}
__decorate([
    mobx_1.observable,
    __metadata("design:type", Boolean)
], GenericAction.prototype, "IsExecuting", void 0);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], GenericAction.prototype, "CanExecute", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], GenericAction.prototype, "IsVisible", null);
__decorate([
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GenericAction.prototype, "Execute", null);
exports.GenericAction = GenericAction;
// Action implements a generic global action which requires no specific parameters
class Action extends GenericAction {
    constructor(props) {
        super(props);
    }
}
exports.Action = Action;
let UserAction = class UserAction extends GenericAction {
    constructor(props) {
        super(props);
        // TODO : Did the injection work, or if we need to do this some other way
        this.user = this.props.userService.LoggedOnUser;
    }
    get CanExecute() {
        // If canExecute is not defined, then return true, or call canExecute and return the resulting value
        return this.IsVisible && !this.IsExecuting && (!this.canExecute || this.canExecute(this.user));
    }
    get IsVisible() {
        // If isVisible is not defined, then return true, or call isVisible and return the resulting value
        return !this.canExecute || this.canExecute(this.user);
    }
    Execute() {
        // If this is allowed to execute and this.execute is defined, then call it
        this.CanExecute &&
            this.execute &&
            (this.IsExecuting = true) &&
            this.execute(this.user)
                .then(() => {
                this.IsExecuting = false;
            })
                .catch(() => {
                this.IsExecuting = false;
            });
    }
};
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], UserAction.prototype, "user", void 0);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], UserAction.prototype, "CanExecute", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], UserAction.prototype, "IsVisible", null);
__decorate([
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserAction.prototype, "Execute", null);
UserAction = __decorate([
    mobx_react_1.inject('userService'),
    __metadata("design:paramtypes", [Object])
], UserAction);
exports.UserAction = UserAction;
class EntityAction extends GenericAction {
    constructor(props) {
        super(props);
        this.entity = props.entity;
    }
    get CanExecute() {
        // If canExecute is not defined, then return true, or call canExecute and return the resulting value
        return this.IsVisible && !this.IsExecuting && (!this.canExecute || this.canExecute(this.entity));
    }
    get IsVisible() {
        // If isVisible is not defined, then return true, or call isVisible and return the resulting value
        return !this.canExecute || this.canExecute(this.entity);
    }
    Execute() {
        // If this is allowed to execute and this.execute is defined, then call it
        this.CanExecute &&
            this.execute &&
            (this.IsExecuting = true) &&
            this.execute(this.entity)
                .then(() => {
                this.IsExecuting = false;
            })
                .catch(() => {
                this.IsExecuting = false;
            });
    }
}
__decorate([
    mobx_1.computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], EntityAction.prototype, "CanExecute", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], EntityAction.prototype, "IsVisible", null);
__decorate([
    mobx_1.action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EntityAction.prototype, "Execute", null);
exports.EntityAction = EntityAction;
