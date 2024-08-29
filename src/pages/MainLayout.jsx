import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout;