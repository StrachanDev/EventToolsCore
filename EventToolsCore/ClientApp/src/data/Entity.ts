import { observable, computed, action } from 'mobx';

// The basic definition of an Entity from which all other entities must derive
export class Entity {
    constructor(public Type: string[], public Id: string, displayName: string) {
        this.displayName = displayName;
    }

    @observable
    displayName: string;

    @observable
    entityType: string[];
}

export class SessionEntity extends Entity {
    constructor(id: string, displayName: string) {
        super(['Session'], id, displayName);
    }
}