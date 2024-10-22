import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import RootLayout from "./layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import navBarItems from "./data/nav-bar-items";

function App() {
  return (
    <div className="App">
      <RootLayout>
        <Routes>
          {navBarItems.map((item) => (
            <Route path={item.urlPattern} key={item.id} {...item}></Route>
          ))}
        </Routes>
      </RootLayout>
    </div>
  );
}

export default App;
