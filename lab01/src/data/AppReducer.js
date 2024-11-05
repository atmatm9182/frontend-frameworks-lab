export default function AppReducer(state, action) {
    switch(action.type) {
    case "edit":
        const idx = state.findIndex((item) => item.id === action.id);
        if (idx === -1) {
            return state;
        }

        const newState = structuredClone(state);
        newState[idx] = { ...action.payload };
        return newState;
    case "rate": {
        const idx = state.findIndex((item) => item.id === action.id);
        if (idx === -1) {
            return state;
        }

        const newState = structuredClone(state);
        newState[idx].rating = (newState[idx].rating + 1) % 11;
        return newState;
    }
    case "delete": {
        const idx = state.findIndex((item) => item.id === action.id);
        if (idx === -1) {
            return state;
        }

        const newState = structuredClone(state);
        newState.splice(idx, 1);
        return newState;
    }
    case "add": {
        const newState = structuredClone(state);
        newState.push(action.payload);
        return newState;
    }
    default:
        throw new Error(`Unknown action type ${action.type}`);
    }
}
