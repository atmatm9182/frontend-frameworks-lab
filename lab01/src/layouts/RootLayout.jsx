import NavBarMenu from "../components/NavBarMenu";
import Footer from "../components/Footer";
import navBarItems from "../data/nav-bar-items";

function RootLayout({ children }) {
  return (
    <>
      <NavBarMenu items={navBarItems}></NavBarMenu>
      {children}
      <Footer />
    </>
  );
}

export default RootLayout;
