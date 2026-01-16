import { Outlet } from "react-router";
import Navbar from "./components/navbar";

const Layout = () => {
    return (
        <div className="bg-[#f5fcfe]">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}
 
export default Layout;