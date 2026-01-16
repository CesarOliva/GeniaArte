const Productos = () => {
    return (
        <section className="flex items-center justify-center py-16 md:mb-0 bg-[#eeeeee]">
            <div className="w-[90%] flex flex-col items-center justify-center max-w-300">
                <div className="flex w-full items-center justify-between mb-6">
                    <span className="text-lg font-medium text-black">Lo nuevo</span>
                    <button className="text-md font-semibold text-black px-4 py-2 border-2 border-black">VER TODOS</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <img src="cojin-1.jpg" alt="Produto GeniaArte - Llavero Cojin"/>
                        <p className="text-lg font-semibold">Llavero Cojín</p>
                        <span className="text-md">$50.00</span>
                    </div>
                    <div className="flex flex-col">
                        <img src="cojin-2.jpg" alt="Produto GeniaArte - Llavero Cojin"/>
                        <p className="text-lg font-semibold">Llavero Cojín</p>
                        <span className="text-md">$50.00</span>
                    </div>
                    <div className="flex flex-col">
                        <img src="cojin-3.jpg" alt="Produto GeniaArte - Llavero Cojin"/>
                        <p className="text-lg font-semibold">Llavero Cojín</p>
                        <span className="text-md">$50.00</span>
                    </div>
                    <div className="flex flex-col">
                        <img src="cojin-4.jpg" alt="Produto GeniaArte - Llavero Cojin"/>
                        <p className="text-lg font-semibold">Llavero Cojín</p>
                        <span className="text-md">$50.00</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Productos;