import * as React from 'react';
import { observable, action, computed } from 'mobx';
import { inject } from 'mobx-react';

import { EntityFormatService } from '../../services/EntityFormatService';
import { UserService } from '../../services/UserService';

import { EntityFormat } from '../../data/Configuration/EntityFormats';
import { Entity } from '../../data/Entity';
import { RendererResolutionService } from '../../services/RendererResolutionService';

@inject('entityFormatService', 'userService', 'rendererResolutionService')
export class ContentRenderer extends React.Component<{ entityFormatService?: EntityFormatService, userService?: UserService, rendererResolutionService?: RendererResolutionService, format: string, entity: Entity }> {
    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        return this.resolveEntityFormats(
            this.props.entityFormatService.GetEntityFormat(
                this.props.entity.Type, this.props.format, this.props.userService.LoggedOnUser.UserType),
            this.props.entity);
    }

    private resolveEntityFormats(entityFormat: EntityFormat, entity: Entity): React.ReactNode {
        return this.props.rendererResolutionService.resolve(entityFormat, this.props.entity);
    }
}