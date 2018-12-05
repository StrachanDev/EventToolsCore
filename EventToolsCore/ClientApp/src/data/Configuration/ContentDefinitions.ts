import { observable, computed, action } from 'mobx';
import { inject } from 'mobx-react';
import { Entity } from '../Entity';

// This defines how to render a specific field.
// Each FormatType will have a renderer defined (or will use the default renderer, which will probably just be generic text)
// 
export class FieldFormatDefinition {
    @observable
    public Field: string;

    @observable
    public FormatType: string;

    @observable
    public EntityType: string;

    constructor(field: string, formatType: string, entityType?: string) {
        this.Field = field;
        this.FormatType = formatType;
        this.EntityType = entityType;
    }
}

// This is the interface which all ContentDefinitions must implement
export interface IContentDefinition {
    Value(entity: any): FieldFormatDefinition[];
}

// String returns a single field from the entity
export class StringContentDefinition implements IContentDefinition {
    constructor(private field: string) { }

    @computed
    public Value(entity: Entity): FieldFormatDefinition[] {
        // TODO: This needs to take the field and entity type and convert it into a FieldFormat
        return [entity[this.field]];
    }
}

// Array concatenates the content, with an optional separator
export class ArrayContentDefinition implements IContentDefinition {
    constructor(private value: IContentDefinition[], private separator?: string) { }

    @computed Value(entity: Entity): FieldFormatDefinition[] {
        return this.value.map(cd => cd.Value(entity)).reduce((pv, cv) => {
            if (pv) {
                this.separator && pv.push(new FieldFormatDefinition(this.separator, 'Literal'));

                pv.push(...cv);
            } else {
                pv = cv;
            }

            return pv;
        }, <FieldFormatDefinition[]>undefined);
    }
}

// Coalesce returns the first non-empty content
export class CoalesceContentDefinition implements IContentDefinition {
    constructor(private value: IContentDefinition[]) { }

    @computed Value(entity: Entity): FieldFormatDefinition[] {
        return this.value.reduce((pv, cv) => { return pv || cv.Value(entity); }, <FieldFormatDefinition[]>undefined);
    }
}