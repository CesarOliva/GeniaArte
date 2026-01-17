const ProductoPage = () => {
    return (
        <section className="flex items-center justify-center mt-8 mb-16 md:mb-0">
            <div className="w-[90%] flex flex-col md:flex-row justify-center max-w-300 gap-y-8">
                <div className="">
                    <img className="rounded-lg size-96 md:size-128" src="/cojin-1.jpg" alt="Cojin 1 - GeniaArte"/>
                </div>
                <div className="md:ml-4">
                    <h2 className="text-3xl font-semibold mb-4">Llavero Cojín 1</h2>
                    <p className="text-lg font-normal mb-4">Cojín decorativo con diseño floral, ideal para darle un toque de color a tu sala o dormitorio.</p>
                    <span className="text-xl font-semibold text-[#58684f]">$50.00</span><br/>
                    <button className="mt-4 bg-[#58684f] text-white px-6 py-3 rounded-lg hover:bg-[#4a5a41] transition-colors duration-300">Comprar</button>
                </div>
            </div>
        </section>
    );
}
 
export default ProductoPage;