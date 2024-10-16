import "./App.css";
import { data } from "./module-data";
import PersonProfile from "./components/PersonProfile";
import "bootstrap/dist/css/bootstrap.css";
import RootLayout from "./layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import navBarItems from "./data/nav-bar-items";

function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          {navBarItems.map((item) => (
            <Route path={item.urlPattern}></Route>
          ))}
        </Routes>
        <div>
          {data.map((person) => (
            <PersonProfile {...person} />
          ))}
        </div>
      </RootLayout>
    </>
  );
}

export default App;
