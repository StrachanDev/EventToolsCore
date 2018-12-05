

export function isa(o: any, t: { new(): any }) {
    let to: any = new t();
    
    let matched: boolean = true;
    let propName: string;

    for (propName in to) {
        if (o[propName] === undefined) {
            // We have a mismatch
            matched = false;
            break;
        }
    }

    return matched;
}