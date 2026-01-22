import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <section className="flex items-center justify-center mt-8 mb-16">
            <div className="w-[90%] flex flex-col items-center justify-center max-w-300">
                <h1 className="text-4xl font-bold mb-4">Página no encontrada</h1>
                <p className="text-lg mb-8">La página que estás buscando no existe o ha sido movida.</p>
                <Link to={'/'} className="bg-[#58684f] font-semibold text-white px-6 py-3 rounded-lg hover:bg-[#4a5a41] transition-colors duration-300">
                    Volver a la página principal
                </Link>
            </div>
        </section>
    );
}
 
export default NotFoundPage;