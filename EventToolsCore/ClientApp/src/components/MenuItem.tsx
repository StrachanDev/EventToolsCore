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
        return this.props.canExecute ? this.props.canExecute() : true;
    }

    @computed
    get isVisible(): boolean {
        return this.props.isVisible ? this.props.isVisible() : true;
    }

    @action
    execute() {
        if (this.props.subMenuItems && this.props.subMenuItems.length) {
            this.toggleDropDown();
        } else {
            // Depends on the type of the menu item.  Needs to be defined.
            this.canExecute && (this.props.execute && this.props.execute());
        }
    }

    render() {
        return (this.props.subMenuItems && this.props.subMenuItems.length > 0) ? (
            <DropdownMenu onClick={this.execute.bind(this)}>
                <ul className="navbar-nav flex-grow">
                    {this.props.subMenuItems.map((smi) => {
                        return (
                            <MenuItem id={smi.displayName} displayName={smi.displayName} description={smi.description} subMenuItems={smi.subMenuItems}>
                            </MenuItem>
                        );
                    })}
                </ul>
            </DropdownMenu>
        ) : (
                <NavItem key={this.props.id}>
                    <NavLink tag={Link} className="text-dark" to="/">{this.props.displayName}</NavLink>
                </NavItem>
            )
    }
}