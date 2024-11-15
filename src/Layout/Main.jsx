import { Outlet } from "react-router-dom";
import Navber from "../pages/Shared/Navber/Navber";
import Footer from "../pages/Shared/Footer/Footer";

export default function Main() {
    return (
        <div className="bg-[#8ce892] min-h-screen flex flex-col">
            {/* Navbar */}
            <Navber />

            {/* Main Content (Dynamic Content based on Route) */}
            <div className="flex-1">
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
