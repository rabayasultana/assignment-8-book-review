import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            
            <div className="min-h-[calc(100vh-116px)]">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;