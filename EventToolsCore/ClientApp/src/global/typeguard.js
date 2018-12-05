"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isa(o, t) {
    let to = new t();
    let matched = true;
    let propName;
    for (propName in to) {
        if (o[propName] === undefined) {
            // We have a mismatch
            matched = false;
            break;
        }
    }
    return matched;
}
exports.isa = isa;
