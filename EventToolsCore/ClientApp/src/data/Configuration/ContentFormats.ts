import { observable, computed, action } from 'mobx';
import { IContentDefinition } from './ContentDefinitions';
import { Entity } from '../Entity';

export interface IContentFormatDefinition {

}

export class TileContentFormatDefinition implements IContentFormatDefinition {
    @observable
    public Image: IContentDefinition;

    @observable
    public Header: IContentDefinition;

    @observable
    public SubHeader: IContentDefinition;
}

export class ContentResolver {
    constructor(private contentFormatDefinition: IContentFormatDefinition, private entity: Entity) {

    }
}