import { observable, computed, action } from 'mobx';
import { IContentFormat, TileContentFormat } from './ContentFormats';
import { isa } from '../../global/typeguard';

export class EntityFormat {
    @observable
    public Content: IContentFormat;

    public constructor(public EntityType: string, content: IContentFormat) {
        // The reason for not auto-declaring this in the constructor is that now we can update the content at runtime 
        // and the rendered content will automagically change
        this.Content = content;
    }
}

export class EntityTileFormat extends EntityFormat {
    @observable TileLayout: string;

    public constructor(entityType: string, tileLayout: string, content: TileContentFormat) {
        super(entityType, content);

        this.TileLayout = tileLayout;
    }
}

export class EntityListFormat extends EntityFormat {

}

isa(new EntityListFormat('meeting', new TileContentFormat()), Object);