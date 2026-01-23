import { Link } from "react-router";

const Hero = () => {
    return (
        <section className="flex items-center justify-center mt-8 mb-16 md:mb-0">
            <div className="w-[90%] flex flex-col md:flex-row md:min-h-[80vh] items-center justify-center max-w-300">
                <div className="order-1 md:order-0 w-full md:w-1/2 text-center md:text-start">
                    <h2 className="text-lg font-semibold mb-1 mt-6 md:m-0">GeniaArte | Accesorios</h2>
                    <h3 className="text-4xl font-semibold mb-4 md:mb-8">Cada producto es un lienzo en blanco.</h3>
                        <Link to={'/catalogo'} className="font-semibold text-white px-8 py-4 bg-[#58684f] hover:bg-[#4a5a41]">CATALOGO</Link>
                </div>
                <div className="order-0 md:order-1 w-full md:w-1/2 flex justify-center">
                    <img className="rounded-full size-96 md:size-120 object-cover" 
                        src="VasoNocheEstrellada.jpg" 
                        alt="Producto Vaso Noche Estrellada | GeniaArte"
                    />
                </div>
            </div>
        </section>
    );
}
 
export default Hero;