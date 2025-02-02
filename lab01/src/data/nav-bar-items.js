import Home from "../components/Home";
import Lab1 from "../components/Lab1";
import Lab2 from "../components/Lab2";
import Lab3 from "../components/Lab3";
import Lab4Add from "../components/Lab4Add";
import Lab4Edit from "../components/Lab4Edit";
import Lab5 from "../components/Lab5";
import Lab5User from "../components/Lab5User";
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
    element: <Lab1 people={data}></Lab1>
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
  {
    id: 5,
    label: "Laboratorium 4 Add",
      url: "/lab4/add",
      urlPattern: "/lab4/add",
      element: <Lab4Add></Lab4Add>,
      hidden: true,
  },
  {
    id: 6,
    label: "Laboratorium 4 Edit",
      url: "/lab4/edit/1",
      urlPattern: "/lab4/edit/:id",
      element: <Lab4Edit></Lab4Edit>,
      hidden: true,
  },
    {
        id: 7,
        label: "Laboratorium 5",
        url: "/lab5",
        urlPattern: "/lab5",
        element: <Lab5></Lab5>,
    },
    {
        id: 8,
        label: "Laboratorium 5 users",
        url: "/lab5/users/1",
        urlPattern: "/lab5/users/:id",
        element: <Lab5User></Lab5User>,
    }
];

export default navBarItems;
