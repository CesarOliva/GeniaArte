import { useQuery } from "convex/react";
import { Link, Navigate, useParams } from "react-router";
import { api } from "../../convex/_generated/api";

const ProductoPage = () => {
    const { producto } = useParams<{ producto: string }>();

    const product = useQuery(api.products.getSingleProduct,
        producto ? { url: producto } : "skip"
    );
    
    const products = useQuery(api.products.getRecentProducts)
    
    if (product === undefined) {
        return(
            <section className="flex flex-col items-center justify-center mt-8 mb-16">
                <div className="w-[90%] flex flex-col md:flex-row justify-center items-center max-w-300 gap-y-8">
                    <div className="w-full md:w-1/2 flex justify-center animate-pulse">
                        <div className="rounded-lg size-96 md:size-128 bg-gray-300"></div>
                    </div>
                    <div className="w-full md:w-1/2 md:ml-4">
                        <div className="h-8 w-3/4 bg-gray-300 rounded mb-2 animate-pulse"></div>
                        <div className="h-6 w-1/4 bg-gray-300 rounded mb-2 animate-pulse"></div>
                        <div className="h-4 w-full bg-gray-300 rounded mb-4 animate-pulse"></div>
                        <div className="h-10 w-1/3 bg-gray-300 rounded animate-pulse"></div>
                    </div>
                </div>
            </section>
        )
    }

    if (product === null){
        return <Navigate to="/404" replace />;
    }

    return (
        <section className="flex flex-col items-center justify-center mt-8 mb-16">
            <div className="w-[90%] flex flex-col md:flex-row justify-center items-center max-w-300 gap-y-8">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img className="rounded-lg object-cover size-96 md:size-128" src={product.imageUrl} alt={product.name}/>
                </div>
                <div className="w-full md:w-1/2 md:ml-4">
                    <h2 className="text-[30px] font-semibold mb-2">{product.name}</h2>
                    <p className="text-2xl font-semibold text-[#58684f] mb-2">${product.price}.00</p>
                    <p className="text-lg font-normal mb-4">{product.description}</p>
                    <button className="bg-[#58684f] font-semibold text-white px-6 py-3 rounded-lg hover:bg-[#4a5a41] transition-colors duration-300">COMPRAR</button>
                </div>
            </div>

            <div className="w-[90%] max-w-300 mt-16">
                <h2 className="text-3xl font-semibold mb-2">Productos Destacados</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {products?.map(({ _id, name, price, imageUrl, url }) => (
                        <div key={_id} className="flex flex-col h-fit bg-[#eee] w-full rounded-lg">
                            <Link className="p-4" to={`/catalogo/${url}`}>
                                <img className="rounded-lg size-64 object-cover mb-1" src={imageUrl} alt={name} />
                                <div>
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
 
export default ProductoPage;