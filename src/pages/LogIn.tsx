import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext"
import { toast } from "sonner";
import { Navigate } from "react-router";

const LogInPage = () => {
    const { login, user } = useAuth();

    if(user) {
        return <Navigate to={'/admin'}/>
    }

    return (
        <div className="w-full mt-12 flex items-center justify-center">
            <div className="w-[90%] flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-center">Inicio de Sesión</h1>
                <div className="mt-8 w-full flex flex-col gap-4 max-w-125 mx-auto">
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            login(credentialResponse.credential as string)
                        }}
                        onError={() => {
                            toast.error('Algo salío mal')
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default LogInPage;