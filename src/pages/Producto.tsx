import { Link } from "react-router";

const ProductoPage = () => {
    return (
        <section className="flex flex-col items-center justify-center mt-8 mb-16">
            <div className="w-[90%] flex flex-col md:flex-row justify-center items-center max-w-300 gap-y-8">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img className="rounded-lg size-96 md:size-128" src="/cojin-1.jpg" alt="Cojin 1 - GeniaArte"/>
                </div>
                <div className="w-full md:w-1/2 md:ml-4">
                    <h2 className="text-[30px] font-semibold mb-2">Llavero Cojín</h2>
                    <p className="text-2xl font-semibold text-[#58684f] mb-2">$50.00</p>
                    <p className="text-lg font-normal mb-4">Llavero hecho a mano con materiales de alta calidad, lo que garantiza durabilidad y un toque especial. 
                        Elige entre una amplia gama de colores y diseños, ya sea para cumpleaños, aniversarios, eventos corporativos o cualquier ocasión especial, 
                        puedes personalizarlo con un mensaje único que hará que cada momento sea aún más memorable.</p>
                    <button className="bg-[#58684f] text-white px-6 py-3 rounded-lg hover:bg-[#4a5a41] transition-colors duration-300">Comprar</button>
                </div>
            </div>

            <div className="w-[90%] max-w-300 mt-16">
                <h2 className="text-3xl font-semibold mb-2">Productos Destacados</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <Link to="/Catalogo/cojin1">
                        <div className="flex flex-col">
                            <img className='rounded-lg' src="/cojin-1.jpg" alt="Produto GeniaArte - Llavero Cojin"/>
                            <p className="text-lg font-semibold">Llavero Cojín</p>
                            <span className="text-md">$50.00</span>
                        </div>
                    </Link>
                    <Link to="/Catalogo/cojin1">
                        <div className="flex flex-col">
                            <img className='rounded-lg' src="/cojin-2.jpg" alt="Produto GeniaArte - Llavero Cojin"/>
                            <p className="text-lg font-semibold">Llavero Cojín</p>
                            <span className="text-md">$50.00</span>
                        </div>
                    </Link>
                    <Link to="/Catalogo/cojin1">
                        <div className="flex flex-col">
                            <img className='rounded-lg' src="/cojin-3.jpg" alt="Produto GeniaArte - Llavero Cojin"/>
                            <p className="text-lg font-semibold">Llavero Cojín</p>
                            <span className="text-md">$50.00</span>
                        </div>
                    </Link>
                    <Link to="/Catalogo/cojin1">
                        <div className="flex flex-col">
                            <img className='rounded-lg' src="/cojin-4.jpg" alt="Produto GeniaArte - Llavero Cojin"/>
                            <p className="text-lg font-semibold">Llavero Cojín</p>
                            <span className="text-md">$50.00</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
 
export default ProductoPage;