"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Search_1;
const React = require("react");
const mobx_react_1 = require("mobx-react");
const SearchCriteria_1 = require("../data/SearchCriteria");
const ContentRenderer_1 = require("./render/ContentRenderer");
let Search = Search_1 = class Search extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = Search_1.name;
        this.state = { results: [], loading: true, error: undefined }; //({ loading: true });
        this.props.searchService.Search(new SearchCriteria_1.SearchCriteria(null, 'a*'))
            .then(data => {
            this.setState({ results: data.entities, loading: false });
        })
            .catch(reason => {
            this.setState({ error: reason.message, loading: false });
        });
    }
    renderResults(results) {
        return (React.createElement("ul", null, results.map(result => {
            return (React.createElement("li", { key: "{result.Id}" },
                React.createElement(ContentRenderer_1.ContentRenderer, { entity: result, format: 'summary' })));
        })));
    }
    render() {
        let contents = (this.state && this.state.loading)
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : ((this.state && this.state.error) ? this.state.error : this.renderResults(this.state.results));
        return (React.createElement("div", null,
            React.createElement("h1", null, "Search Results"),
            contents));
    }
};
Search = Search_1 = __decorate([
    mobx_react_1.inject('searchService'),
    __metadata("design:paramtypes", [Object])
], Search);
exports.Search = Search;
