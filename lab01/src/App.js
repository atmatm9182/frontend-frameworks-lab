import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import RootLayout from "./layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import navBarItems from "./data/nav-bar-items";
import AppProvider from "./components/AppProvider";
import LineChart from "./components/LineChart";

function App() {
    return (
        <AppProvider>
            <div className="App">
                <RootLayout>
                    <Routes>
                        {navBarItems.map((item) => (
                            <Route path={item.urlPattern} key={item.id} {...item}></Route>
                        ))}
                    </Routes>
                </RootLayout>
            <LineChart
                    data={[6, 5, 5, 10, 1, 2, 3]}
                    stroke="red"
                    background="green"
                />
            </div>
        </AppProvider>
    );
}

export default App;
