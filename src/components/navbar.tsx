import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="p-4">
            <nav className="flex w-full items-center justify-around">
                <div className="flex items-center">
                    <img onClick={()=> setIsOpen(!isOpen)} className="size-6 mr-4" src="puntos.png" alt="Ilustrativo"/>
                    <img className="h-12" src="logo.webp" alt="Logo Genia"/>
                </div>

                <ul className="hidden sm:flex font-semibold gap-x-8 text-lg">
                    <li className="cursor-pointer hover:text-[#58684f]">INICIO</li>
                    <li className="cursor-pointer hover:text-[#58684f]">CATALOGO</li>
                    <li className="cursor-pointer hover:text-[#58684f]">CONTACTO</li>
                </ul>
                
                <div className="flex gap-x-6 items-center">
                    <Search className="size-6 text-neutral-500"/>
                    <div className="bg-black rounded-full p-2">
                        <ShoppingCart className="size-6 text-white"/>
                    </div>
                </div>
            </nav>
            {isOpen && (
                <div className="sm:hidden mt-2">
                    <ul className="flex flex-col gap-y-3 font-semibold text-lg py-2 text-center">
                        <li>INICIO</li>
                        <li>CATALOGO</li>
                        <li>CONTACTO</li>
                    </ul>
                </div>
            )}
        </header>
    );
}
 
export default Navbar;