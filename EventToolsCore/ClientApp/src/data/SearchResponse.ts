import { observable } from 'mobx';

import { Entity } from './Entity';

export class FacetCount {
    public category: string;

    public value: string;

    public count: number;
}

export class SearchResponse {
    public entities: Entity[];

    public facets: FacetCount[];

    public totalCount: number;

    public currentPage: number;

    public previousPageToken: string;

    public pextPageToken: string;
}