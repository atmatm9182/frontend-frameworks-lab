import Home from "../components/Home";
import Lab1 from "../components/Lab1";
import Lab2 from "../components/Lab2";
import Lab3 from "../components/Lab3";
import { data } from "../module-data";

const navBarItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home></Home>,
  },
  {
    id: 2,
    label: "Laboratorium 1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1 people={data}></Lab1>,
  },
  {
    id: 3,
    label: "Laboratorium 2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2></Lab2>,
  },
  {
    id: 4,
    label: "Laboratorium 3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3></Lab3>,
  },
];

export default navBarItems;
