const Footer = () => {
    return (
        <section className="flex items-center justify-center mt-8 mb-16 md:mb-0">
            <div className="w-[90%] flex flex-col items-center justify-center max-w-300">
                <img src="logo.webp" alt="Logo GeniaArte" className="h-12 mb-4"/>
                <p className="text-black font-normal text-lg mb-8">Cada producto es un lienzo en blanco</p>
                <div className="flex gap-8 mb-12">
                    <img className='size-10' src="facebook.svg" alt="Facebook GeniaArte"/>
                    <img className='size-10' src="instagram.svg" alt="Instagram GeniaArte"/>
                </div>
                <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 w-full items-center justify-between mb-12">
                    <span className="text-lg">® GeniaArte 2026</span>
                    <ul className="flex font-medium gap-x-4 text-lg">
                        <li className="cursor-pointer hover:text-[#58684f]">INICIO</li>
                        <li className="cursor-pointer hover:text-[#58684f]">CATALOGO</li>
                        <li className="cursor-pointer hover:text-[#58684f]">CONTACTO</li>
                    </ul>
                    <h4 className="text-black text-lg">Una web de <span className="font-semibold">Cesar Oliva</span></h4>
                </div>
            </div>
        </section>
    );
}
 
export default Footer;