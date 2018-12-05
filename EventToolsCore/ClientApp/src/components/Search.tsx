import * as React from 'react';
import { inject } from 'mobx-react';
import { SearchService } from '../services/SearchService';
import { SearchCriteria } from '../data/SearchCriteria';
import { ContentRenderer } from './render/ContentRenderer';
import { EntityFormatService } from '../services/EntityFormatService';
import { UserService } from '../services/UserService';

@inject('searchService')
export class Search extends React.Component<{ searchService?: SearchService }, { results: any[], loading: boolean, error: string }> {
    displayName = Search.name

    constructor(props) {
        super(props);

        this.state = { results: [], loading: true, error: undefined }; //({ loading: true });

        this.props.searchService.Search(new SearchCriteria(null, 'a*'))
            .then(data => {
                this.setState({ results: data.entities, loading: false });
            })
            .catch(reason => {
                this.setState({ error: reason.message, loading: false });
            });
    }

    renderResults(results: any[]) {
        return (
            <ul>
                {
                    results.map(result => {
                        return (
                            <li key="{result.Id}">
                                <ContentRenderer entity={result} format='summary'>
                                </ContentRenderer>
                            </li>
                        );
                    }) 
                }
            </ul>
        );
    }

    render() {
        let contents = (this.state && this.state.loading)
            ? <p><em>Loading...</em></p>
            : ((this.state && this.state.error) ? this.state.error : this.renderResults(this.state.results));

        return (
            <div>
                <h1>Search Results</h1>
                {contents}
            </div>
        );
    }
}
