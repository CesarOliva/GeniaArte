import { useQuery } from "convex/react";
import { Link } from "react-router";
import { api } from "../../convex/_generated/api";

const CatalogoPage = () => {
    const products = useQuery(api.products.getAllProducts);
    
    return (
        <section className="flex items-center justify-center mt-8 mb-16">
            <div className="w-[90%] flex flex-col md:flex-row justify-between max-w-300">
                <aside className="w-full md:w-[20%] order-1 md:order-0 px-2 flex flex-col">
                    <img className="w-48 mb-4" src="/logo.webp" alt="Logo"/>
                    <p className="leading-relaxed text-lg">En GENIA, no vendemos simples objetos; creamos experiencias. Nuestra tienda de regalos está impregnada del espíritu de los grandes artistas y escritores que han dejado huella en la historia. Cada producto es un lienzo en blanco, esperando ser transformado por tu imaginación.</p>
                </aside>

                <div className="w-full md:w-[80%] order-0 md:order-1 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-fit mb-16 md:mb-0">
                    {products?.map(({ _id, name, price, imageUrl, url }) => (
                        <div key={_id} className="flex flex-col h-fit bg-[#eee] w-full rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <Link className="flex flex-col items-center p-4" to={`/catalogo/${url}`}>
                                <img className="rounded-lg size-64 object-cover mb-1" src={imageUrl} alt={name} />
                                <div className="w-full">
                                    <p className="text-lg font-semibold">{name}</p>
                                    <span className="text-md font-medium text-[#58684f]">${price}.00</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
 
export default CatalogoPage;