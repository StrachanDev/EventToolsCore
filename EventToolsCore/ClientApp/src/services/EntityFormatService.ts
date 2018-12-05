import { observable, computed, action } from 'mobx';
import { EntityFormat } from '../data/Configuration/EntityFormats';

export class EntityFormatService {
    private _typeOnlyFormatters: EntityFormat[] = [];
    private _typeAndFormatFormatters: EntityFormat[][] = [];
    private _typeFormatAndUserFormatters: EntityFormat[][][] = [];

    @action
    public AddEntityFormat(entityFormat: EntityFormat, entityType: string, format?: string, userType?:string):void {
        if (entityType) {
            if (format) {
                if (userType) {
                    this._typeFormatAndUserFormatters[userType][format][entityType] = entityFormat;
                } else {
                    this._typeAndFormatFormatters[format][entityType] = entityFormat;
                }

            } else {
                this._typeOnlyFormatters[entityType] = entityFormat;
            }
        } else {
            throw "No qualifiers specified to AddEntityFormat";
        }
    }

    // userType: the type of user - anonymous, remote, inperson etc.
    // entityType: the type of item being rendered - attendee, session, meeting, expert etc.
    // format: the major format type - tile, summary, block, listEntry
    public GetEntityFormat(entityType: string, format: string, userType: string) : EntityFormat {
        // Find the most appropriate entity format and return it.
        let entityFormat: EntityFormat;
        const userTypes = this._typeFormatAndUserFormatters[userType];
        if (userTypes) {
            const userFormatTypes = userTypes[format];
            if (userFormatTypes) {
                entityFormat = userFormatTypes[entityType];
            }
        }
        if (!entityFormat) {
            const formatTypes = this._typeAndFormatFormatters[format];
            if (formatTypes) {
                entityFormat = formatTypes[entityType];
            }
        }
        if (!entityFormat) {
            entityFormat = this._typeOnlyFormatters[entityType];
        }

        return entityFormat;
    }
}