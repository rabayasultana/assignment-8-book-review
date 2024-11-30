import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            
            <div className="min-h-[calc(100vh-116px)]">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;