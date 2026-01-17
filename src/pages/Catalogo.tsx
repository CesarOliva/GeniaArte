import { Link } from "react-router";

const CatalogoPage = () => {
    return (
        <section className="flex items-center justify-center mt-8 mb-16 md:mb-0">
            <div className="w-[90%] grid grid-cols-1 justify-center max-w-300 gap-y-8">
                <div className="flex items-center flex-col md:flex-row bg-[#eee] w-full rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <img className="rounded-lg size-64" src="cojin-1.jpg" alt="Cojin 1 - GeniaArte" />
                    <div className="mt-4 md:mt-0 ml-0 md:ml-4">
                        <h2 className="text-2xl font-semibold mb-2">Llavero Cojín 1</h2>
                        <p className="text-lg font-normal">Cojín decorativo con diseño floral, ideal para darle un toque de color a tu sala o dormitorio.</p>
                        <span className="text-md font-semibold text-[#58684f]">$50.00</span><br/>
                        <button className="bg-[#58684f] text-white px-4 py-2 rounded-lg hover:bg-[#4a5a41] transition-colors duration-300"><Link to={'/Catalogo/cojin1'}>Ver detalles</Link></button>
                    </div>
                </div>

                <div className="flex items-center flex-col md:flex-row bg-[#eee] w-full rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <img className="rounded-lg size-64" src="cojin-2.jpg" alt="Cojin 2 - GeniaArte" />
                    <div className="mt-4 md:mt-0 ml-0 md:ml-4">
                        <h2 className="text-2xl font-semibold mb-2">Llavero Cojín 2</h2>
                        <p className="text-lg font-normal">Cojín decorativo con diseño floral, ideal para darle un toque de color a tu sala o dormitorio.</p>
                        <span className="text-md font-semibold text-[#58684f]">$50.00</span><br/>
                        <button className="bg-[#58684f] text-white px-4 py-2 rounded-lg hover:bg-[#4a5a41] transition-colors duration-300"><Link to={'/Catalogo/cojin1'}>Ver detalles</Link></button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default CatalogoPage;