import { observable, computed, action } from 'mobx';
import * as MenuItems from '../data/menuItems';

export class MenuService {
    @observable public menuItems: Array<MenuItems.IMenuItem>;

    public constructor() {
        this.menuItems = [];
    }

    @action public addMenuItem(id: string, displayName: string, description: string) {
        if (!this.menuItems) {
            this.menuItems = [];
        }

        this.menuItems.push({ id: id, displayName: displayName, description: description });
    }
}