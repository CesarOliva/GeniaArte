import { useQuery } from "convex/react";
import { Link } from "react-router";
import { api } from "../../convex/_generated/api";

const Destacado = () => {
    const product = useQuery(api.products.getSingleProduct,
        { url: "libreta-pasta-dura" }
    );
        
    return (
        <section className="flex items-center justify-center my-16 md:mb-0">
            <div className="w-[90%] flex flex-col md:flex-row md:min-h-[80vh] items-center justify-center max-w-300">
                <div className="order-1 md:order-0 w-full md:w-1/2 text-center md:text-start pr-0 md:pr-8">
                    <h2 className="text-lg font-semibold mb-1 mt-6 md:mt-0 md:mb-4 text-[#58684f]">RECIÉN LLEGADOS</h2>
                    <h3 className="text-5xl font-semibold mb-4">Libreta.</h3>
                    <p className="text-lg text-neutral-700 font-medium mb-8">Libreta de pasta dura, con cortes personalizados</p>
                    <div className="flex justify-center md:justify-start gap-4 md:gap-8">
                        <Link to={`catalogo/${product?.url}`} className="font-semibold text-white px-8 py-4 bg-black hover:bg-[#1e1e1e]">COMPRA AHORA</Link>
                        <Link to={`catalogo/${product?.url}`} className="font-semibold text-white px-8 py-4 bg-[#58684f] hover:bg-[#4a5a41]">DETALLES</Link>
                    </div>
                </div>
                <div className="order-0 md:order-1 w-full md:w-1/2 flex justify-center">
                    <img className="object-cover" 
                        src="Libreta.jpg" 
                        alt="Producto Libreta Pasta dura | GeniaArte"
                    />
                </div>
            </div>
        </section>
    );
}
 
export default Destacado;