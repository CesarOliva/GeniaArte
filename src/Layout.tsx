import { Outlet } from "react-router";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Layout = () => {
    return (
        <div className="bg-[#f5fcfe]">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}
 
export default Layout;