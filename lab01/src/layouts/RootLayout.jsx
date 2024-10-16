import NavBarMenu from "../components/NavBarMenu";
import navBarItems from "../data/nav-bar-items";

function RootLayout({ children }) {
  return (
    <>
      <NavBarMenu items={navBarItems}></NavBarMenu>
      {children}
      <footer>ahhaahaha</footer>
    </>
  );
}

export default RootLayout;
