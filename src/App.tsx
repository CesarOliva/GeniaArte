import { Route, Routes } from "react-router"
import Layout from "./Layout"
import HomePage from "./pages/Home"
import CatalogoPage from "./pages/Catalogo"
import ProductoPage from "./pages/Producto"
import NotFoundPage from "./pages/NotFoundPage"
import ContactPage from "./pages/Contacto"
import DasboardPage from "./pages/Dashboard"
import LogInPage from "./pages/LogIn"

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>     
        <Route path="/catalogo" element={<CatalogoPage/>}/>
        <Route path="/catalogo/:producto" element={<ProductoPage/>}/>
        <Route path="/contacto" element={<ContactPage/>}/>
        <Route path="/admin" element={<DasboardPage/>}/>     
        <Route path="/admin/login" element={<LogInPage/>}/>     
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
