import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="p-4">
            <nav className="flex w-full items-center justify-around">
                <div className="flex items-center">
                    <img onClick={()=> setIsOpen(!isOpen)} className="size-6 mr-4" src="/puntos.png" alt="Ilustrativo"/>
                    <Link to={'/'}>
                        <img className="h-12" src="/logo.webp" alt="Logo Genia"/>
                    </Link>
                </div>

                <ul className="hidden sm:flex font-semibold gap-x-8 text-lg">
                    <Link to={'/'} className="cursor-pointer hover:text-[#58684f]">INICIO</Link>
                    <Link to={'/catalogo'} className="cursor-pointer hover:text-[#58684f]">CATALOGO</Link>
                    <Link to={'/contacto'} className="cursor-pointer hover:text-[#58684f]">CONTACTO</Link>
                </ul>
                
                <div className="flex gap-8">
                    <a target="_blank" href="#">
                        <img className='size-8' src="/facebook.svg" alt="Facebook GeniaArte"/>
                    </a>
                    <a target="_blank" href="#">
                        <img className='size-8' src="/instagram.svg" alt="Instagram GeniaArte"/>
                    </a>
                </div>
            </nav>
            {isOpen && (
                <div className="sm:hidden mt-2">
                    <ul className="flex flex-col gap-y-3 font-semibold text-lg py-2 text-center">
                        <Link to={'/'} className="cursor-pointer hover:text-[#58684f]">INICIO</Link>
                        <Link to={'/catalogo'} className="cursor-pointer hover:text-[#58684f]">CATALOGO</Link>
                        <Link to={'/contacto'} className="cursor-pointer hover:text-[#58684f]">CONTACTO</Link>
                    </ul>
                </div>
            )}
        </header>
    );
}
 
export default Navbar;