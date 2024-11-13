export default function TableDataReducer(data, action) {
    if (action.init) {
        return action.init;
    }

    switch (action.sortOrder) {
    case "asc":
        return data.toSorted((lhs, rhs) => {
            const lValue = action.sortBy(lhs);
            const cmp = comparatorFor(lValue);
            return cmp(lValue, action.sortBy(rhs));
        });
    case "desc":
        return data.toSorted((lhs, rhs) => {
            const rValue = action.sortBy(rhs);
            const cmp = comparatorFor(rValue);
            return cmp(rValue, action.sortBy(lhs));
        });
    case "nat":
        return action.originalState;
    default:
        throw new Error(`Unknown sorting order ${action.sortOrder}`);
    }
}

function comparatorFor(value) {
    const t = typeof value;
    switch (t) {
    case "number":
        return (lhs, rhs) => lhs - rhs;
    case "string":
        return (lhs, rhs) => lhs.localeCompare(rhs);
    default:
        throw new Error(`Cannot get a comparator for value of type '${t}'`);
    }
}
