import { Outlet } from "react-router-dom";
import Navbar from "../components/NavbarComponent/NavbarComponent.jsx";
import Footer from "../components/FooterComponent/FooterComponent.jsx";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
