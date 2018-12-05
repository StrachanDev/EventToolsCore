import * as React from 'react';
import { observable, action, computed } from 'mobx';
import { NavItem, NavLink, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';
import { IMenuItem } from '../data/menuItems';
import './NavMenu.css';

export class MenuItem extends React.Component<IMenuItem, {}> {
    id: string;

    @observable isExpanded: boolean;

    constructor(props) {
        super(props);

        this.isExpanded = false;
    }

    @action
    toggleDropDown() {
        this.isExpanded = !this.isExpanded;
    }

    @computed
    get canExecute(): boolean {
        return !this.props.CanExecute || this.props.CanExecute();
    }

    @computed
    get isVisible(): boolean {
        return !this.props.IsVisible || this.props.IsVisible();
    }

    @action
    execute() {
        if (this.props.SubMenuItems && this.props.SubMenuItems.length) {
            this.toggleDropDown();
        } else {
            // Depends on the type of the menu item.  Needs to be defined.
            this.canExecute && (this.props.Execute && this.props.Execute());
        }
    }

    render() {
        return (this.props.SubMenuItems && this.props.SubMenuItems.length > 0) ? (
            <DropdownMenu onClick={this.execute.bind(this)}>
                <ul className="navbar-nav flex-grow">
                    {this.props.SubMenuItems.map((smi) => {
                        return (
                            <MenuItem key={smi.Id} Id={smi.Id} DisplayName={smi.DisplayName} Description={smi.Description} SubMenuItems={smi.SubMenuItems}>
                            </MenuItem>
                        );
                    })}
                </ul>
            </DropdownMenu>
        ) : (
                <NavItem key={this.props.Id}>
                    <NavLink tag={Link} className="text-dark" to="/">{this.props.DisplayName}</NavLink>
                </NavItem>
            )
    }
}