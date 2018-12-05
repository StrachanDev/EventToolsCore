import { observable, computed, action } from 'mobx';
import * as MenuItems from '../data/menuItems';

export class MenuService {
    @observable public menuItems: Array<MenuItems.IMenuItem>;

    public constructor() {
        this.menuItems = [];
    }

    @action public addMenuItem(menuItem: MenuItems.IMenuItem) {
        if (!this.menuItems) {
            this.menuItems = [];
        }

        this.menuItems.push(menuItem);
    }
}