import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import RootLayout from "./layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import navBarItems from "./data/nav-bar-items";
import { data } from "./data/module-data";
import AppContext from "./data/AppContext";
import AppReducer from "./data/AppReducer";
import { useReducer } from "react";

function App() {
    const [items, dispatch] = useReducer(AppReducer, data);
    return (
        <AppContext.Provider value={{ items, dispatch }}>
            <div className="App">
                <RootLayout>
                    <Routes>
                        {navBarItems.map((item) => (
                            <Route path={item.urlPattern} key={item.id} {...item}></Route>
                        ))}
                    </Routes>
                </RootLayout>
            </div>
        </AppContext.Provider>
    );
}

export default App;
