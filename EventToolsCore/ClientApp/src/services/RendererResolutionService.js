"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class BaseEntityRenderer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement("div", null,
            React.createElement("div", null,
                "Entity Name : ",
                this.props.entity.displayName),
            React.createElement("div", null,
                "Entity Type: ",
                this.props.entity.Type.reduce((pv, cv) => {
                    if (pv.length !== 0) {
                        pv.push(', ');
                    }
                    pv.push(cv);
                    return pv;
                }, []).map(t => React.createElement("span", null, t))));
    }
}
exports.BaseEntityRenderer = BaseEntityRenderer;
class RendererResolutionService {
    resolve(entityFormat, entity) {
        return (React.createElement(BaseEntityRenderer, { entity: entity }));
    }
}
exports.RendererResolutionService = RendererResolutionService;
