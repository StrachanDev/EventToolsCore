import { observable, computed, action } from 'mobx';
import { Component } from 'react';
import { IAction } from './Action';

export interface IMenuItem extends IAction {
    SubMenuItems?: Array<IMenuItem>;
};

export class MenuItem extends Component<{ id: string, displayName: string, description: string, execute?: () => void, canExecute?: () => boolean, isVisible?: () => boolean }> {
    private canExecute: () => boolean;
    private isVisible: () => boolean;
    private execute: () => void;

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
    SubMenuItems?: IMenuItem[];

    @observable
    IsExpanded: boolean;

    @computed
    get CanExecute(): boolean {
        // If canExecute is not defined, then return true, or call canExecute and return the resulting value
        return !this.canExecute || this.canExecute();
    }

    @computed
    get IsVisible(): boolean {
        // If isVisible is not defined, then return true, or call isVisible and return the resulting value
        return !this.canExecute || this.canExecute();
    }

    @action
    Execute(): void {
        // If we have submenu items then toggle the expanded state, otherwise call the execute function
        if (this.SubMenuItems && this.SubMenuItems.length > 0) {
            this.IsExpanded = !this.IsExpanded;
        } else {
            this.execute && this.execute();
        }
    }
}

export class LinkMenuItem extends MenuItem {
    constructor(id: string, displayName: string, description: string, link: string, canExecute?: () => boolean, isVisible?: () => boolean) {
        super({ id, displayName, description, undefined, canExecute, isVisible })

        this.Link = link;
    }

    @action
    Execute(): void {
        // Navigate to Link
    }

    Link: string;
};