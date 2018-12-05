import * as React from 'react';

import { EntityFormat } from '../data/Configuration/EntityFormats';
import { Entity } from '../data/Entity';
import { IContentFormatDefinition } from '../data/Configuration/ContentFormats';
import { IContentDefinition } from '../data/Configuration/ContentDefinitions';
import { ContentRenderer } from '../components/render/ContentRenderer';


export interface IContent {
    bind(fieldName?: string): React.ReactNode;
}

export class BaseEntityRenderer extends React.Component<{ content: IContent }>{
    constructor(props) {
        super(props);
    }

    render() {
        return <div><div>Entity Name : {this.props.content.bind("displayName")}</div>
            <div>Entity Type: {this.props.content.bind("type")}</div></div>
    }
}

export class Tile extends React.Component<{ contentResolver: IContent }> {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="tile">
            <div className="tile-image">
                {this.props.contentResolver.bind("image")}
            </div>
            <div className="tile-header">
                {this.props.contentResolver.bind("header")}
            </div>
            <div className="tile-body">
                {this.props.contentResolver.bind("body")}
            </div>
        </div>);
    }
}

// RendererResolutionService maps from a given entityFormat into a Renderer, then passes the entity to the Renderer which will return 
// React Components to display the entity.
export class RendererResolutionService {

    resolve(entityFormat: EntityFormat, entity: Entity): React.ReactNode {
        // Resolve the entity format and entity into the root renderer, create a contentResolver for the entity, then apply the contentResolver to the renderer
        let content = new ContentResolver(entityFormat.Content, entity, this);

        return content.bind();
    }
}


export class ContentResolver {
    constructor(private contentDefinition: IContentFormatDefinition, private entity: Entity, private rendererResolutionService: RendererResolutionService) {

    }

    bind(fieldName?: string): React.ReactNode {
        if (fieldName) {
            // We're binding to a specific field
        } else {
            return 
        }
        return {fieldName ? <IContentDefinition>((this.contentDefinition)[fieldName]).Value};
}

/* May need this to resolve arrays? 
 * entity.Type.reduce((pv, cv) => {
                if (pv.length !== 0) {
                    pv.push(', ');
                }
                pv.push(cv);
                return pv;
            }, []).map(t => <span>{t}</span>)} */
}

/*
A render takes an object and renders parts of it.It may have 'sub fields' which 



Need to ask the question - what do I render this with?  The answer is a renderer - based on formatter, and the object type passed in.

A renderer may have content fields, which it asks the formatter to populate - which will result in other formatters/renderers 
being returned, so it's recursive...  But should not be re-entrant.

IContentFormat::GetContent(fieldName: string, entity: Entity): IContentFormatDefinition ==> returns a content formatter for the specified field

RenderedResolutionService::resolve(fieldName: string, entity: Entity)
        ==> resolves field name to an IContentFormatDefinition,
            creates a IContentResolver based on the contentFormatDefinition and the entity and 
                returns a react component which takes an IContentResolver (which stores the object being bound to) and binds to IContentResolver::bind(fieldName: string)

*/