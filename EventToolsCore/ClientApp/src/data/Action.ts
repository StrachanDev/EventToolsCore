import * as React from 'react';
import { observable, action, computed } from 'mobx';
import { inject } from 'mobx-react';

import { Entity } from './Entity';
import { User, UserService } from '../services/UserService';

// The basic interface which all actions must support
export interface IAction {
    Id: string;
    DisplayName: string;
    Description: string;

    CanExecute?: () => boolean;
    IsVisible?: () => boolean;

    Execute?: () => void;
};

export interface IActionDefinition {
    id: string;
    displayName: string;
    description: string;
    execute?: (params?: any) => Promise<void>;
    canExecute?: (params?: any) => boolean;
    isVisible?: (params?: any) => boolean;
};

export interface IEntityActionDefinition extends IActionDefinition {
    execute: (entity: Entity) => Promise<void>;
    canExecute: (entity: Entity) => boolean;
    isVisible: (entity: Entity) => boolean;

    entity: Entity;
}

export interface IUserActionDefinition extends IActionDefinition {
    execute: (user: User) => Promise<void>;
    canExecute: (user: User) => boolean;
    isVisible: (user: User) => boolean;

    userService: UserService;
}

export interface IActionExecution {
    isExecuting: boolean;
}

export class GenericAction<T, S> extends React.Component<T, S> {
    protected canExecute: (params?: any) => boolean;
    protected isVisible: (params?: any) => boolean;
    protected execute: (params?: any) => Promise<void>;

    constructor(props) {
        super(props);
        this.Id = props.id;
        this.DisplayName = props.displayName;
        this.Description = props.description;
        this.execute = props.execute;
        this.canExecute = props.canExecute;
        this.isVisible = props.isVisible;
    }

    Id: string;
    DisplayName: string;
    Description: string;

    @observable
    IsExecuting: boolean;

    @computed
    get CanExecute(): boolean {
        // If canExecute is not defined, then return true, or call canExecute and return the resulting value
        return this.IsVisible && !this.IsExecuting && (!this.canExecute || this.canExecute());
    }

    @computed
    get IsVisible(): boolean {
        // If isVisible is not defined, then return true, or call isVisible and return the resulting value
        return !this.isVisible || this.isVisible();
    }

    @action
    Execute(): void {
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

// Action implements a generic global action which requires no specific parameters
export class Action<IActionDefinition> extends GenericAction<IActionDefinition, IActionExecution>  {
    constructor(props) {
        super(props);
    }
}

@inject('userService')
export class UserAction extends GenericAction<IUserActionDefinition, IActionExecution> {
    @observable
    private user: any;

    constructor(props) {
        super(props);

        // TODO : Did the injection work, or if we need to do this some other way
        this.user = this.props.userService.LoggedOnUser;
    }

    @computed
    get CanExecute(): boolean {
        // If canExecute is not defined, then return true, or call canExecute and return the resulting value
        return this.IsVisible && !this.IsExecuting && (!this.canExecute || this.canExecute(this.user));
    }

    @computed
    get IsVisible(): boolean {
        // If isVisible is not defined, then return true, or call isVisible and return the resulting value
        return !this.canExecute || this.canExecute(this.user);
    }

    @action
    Execute(): void {
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
}

export class EntityAction extends GenericAction<IEntityActionDefinition, IActionExecution> {
    private entity: Entity;

    constructor(props) {
        super(props);

        this.entity = props.entity;
    }

    @computed
    get CanExecute(): boolean {
        // If canExecute is not defined, then return true, or call canExecute and return the resulting value
        return this.IsVisible && !this.IsExecuting  && (!this.canExecute || this.canExecute(this.entity));
    }

    @computed
    get IsVisible(): boolean {
        // If isVisible is not defined, then return true, or call isVisible and return the resulting value
        return !this.canExecute || this.canExecute(this.entity);
    }

    @action
    Execute(): void {
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