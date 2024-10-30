export default function AppReducer(state, action) {
    const idx = state.findIndex((item) => item.id === action.id);
    if (idx === -1) {
        return state;
    }

    switch(action.type) {
    case "edit":
        return state;
    case "rate": {
        const newState = structuredClone(state);
        newState[idx].rating = (newState[idx].rating + 1) % 11;
        return newState;
    }
    case "delete": {
        const newState = structuredClone(state);
        newState.splice(idx, 1);
        return newState;
    }
    default:
        throw new Error(`Unknown action type ${action.type}`);
    }
}
