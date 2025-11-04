import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";

function Layout1() {
    return <div>
        <Navbar />
        <Outlet />
        <Banner />
        <Footer />
    </div>
}

export default Layout1;