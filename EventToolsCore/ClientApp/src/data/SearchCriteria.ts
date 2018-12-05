import { observable } from 'mobx';
import { Entity } from './Entity';

export class SearchFacet {
    constructor(public Category: string, public Value: string) { }
}

export class SearchCriteria {
    constructor(public Entity?: Entity, text?: string) {
        this.Text = text;
    }

    @observable
    public Text: string;

    @observable
    public Facets: SearchFacet[]; 

    @observable
    public Page: number;
}