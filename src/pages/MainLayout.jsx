import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="pt-12">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout;