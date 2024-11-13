import { useReducer } from "react";
import AppReducer from "../data/AppReducer";
import AppContext from "../data/AppContext";
import { data } from "../data/module-data";

export default function AppProvider({ children }) {
    const [items, dispatch] = useReducer(AppReducer, data);

    return (
        <AppContext.Provider value={{ dispatch, items }}>
            {children}
        </AppContext.Provider>
    );
}
