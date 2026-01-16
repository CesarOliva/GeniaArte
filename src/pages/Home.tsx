import Beneficios from "../components/beneficios";
import Destacado from "../components/destacado";
import Hero from "../components/hero";
import Productos from "../components/productos";

const HomePage = () => {
    return (
        <>
            <Hero/>
            <Destacado/>
            <Beneficios/>
            <Productos/>
        </>
    );
}
 
export default HomePage;