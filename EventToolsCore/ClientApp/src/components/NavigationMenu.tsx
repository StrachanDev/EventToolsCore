import * as React from 'react';
import { observable, action, computed } from 'mobx';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { MenuService } from '../services/MenuService';
import { MenuItem } from './MenuItem';
import './NavMenu.css';

@inject('menuService')
export class NavigationMenu extends React.Component<{ menuService?: MenuService }, { collapsed: boolean }> {
    constructor(props) {
        super(props);
        
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    @action
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">EventToolsCore</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={true} navbar>
                            <ul className="navbar-nav flex-grow">
                                {
                                    this.props.menuService.menuItems.map(mi => {
                                        return (
                                            <MenuItem key={mi.Id} Id={mi.Id} DisplayName={mi.DisplayName} Description={mi.Description}>
                                            </MenuItem>)
                                    })
                                }
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
