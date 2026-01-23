import { useQuery } from "convex/react";
import { Link } from "react-router";
import { api } from "../../convex/_generated/api";

const Productos = () => {
    const products = useQuery(api.products.getRecentProducts)

    return (
        <section className="flex items-center justify-center py-16 md:mb-0 bg-[#eeeeee]">
            <div className="w-[90%] flex flex-col items-center justify-center max-w-300">
                <div className="flex w-full items-center justify-between mb-6">
                    <span className="text-lg font-medium text-black">Lo nuevo</span>
                    <Link to={'/catalogo'} className="text-md font-semibold text-black px-4 py-2 border-2 border-black">VER TODOS</Link>
                </div>
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
 
export default Productos;