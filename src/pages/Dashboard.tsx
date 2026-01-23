import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const DasboardPage = () => {
    const { user } = useAuth();

    if(!user) {
        return <Navigate to={'/'}/>
    }
    
    return (
        <div className="w-full mt-12 flex items-center justify-center">
            <div className="w-[90%] flex flex-col justify-center items-center">
            </div>
        </div>
    );
}
 
export default DasboardPage;