import { Subject } from 'rxjs';
import { SearchCriteria } from '../data/SearchCriteria';

import { Entity } from '../data/Entity';
import { SearchResponse } from '../data/SearchResponse';

export class SearchService {
    public Search(criteria: SearchCriteria): Promise<SearchResponse> {
        return fetch(new Request('api/search', { method: 'POST', body: JSON.stringify(criteria), headers: { 'Content-Type': 'application/json' } }))
            .then(response => response.json());
    }

    public ContinuationSearch(token: string) {
        return fetch(new Request('api/search/continue', { method: 'POST', body: JSON.stringify({ token: token }), headers: { 'Content-Type': 'application/json' } }))
            .then(response => response.json());
    }
}