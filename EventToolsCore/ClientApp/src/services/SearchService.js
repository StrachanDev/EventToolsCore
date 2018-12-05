"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchService {
    Search(criteria) {
        return fetch(new Request('api/search', { method: 'POST', body: JSON.stringify(criteria), headers: { 'Content-Type': 'application/json' } }))
            .then(response => response.json());
    }
    ContinuationSearch(token) {
        return fetch(new Request('api/search/continue', { method: 'POST', body: JSON.stringify({ token: token }), headers: { 'Content-Type': 'application/json' } }))
            .then(response => response.json());
    }
}
exports.SearchService = SearchService;
