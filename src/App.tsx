import { Route, Routes } from "react-router"
import Layout from "./Layout"
import HomePage from "./pages/Home"
import AdminPage from "./pages/Admin"
import CatalogoPage from "./pages/Catalogo"
import ProductoPage from "./pages/Producto"

function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<HomePage/>}/>     
        <Route path="/Catalogo" element={<CatalogoPage/>}/>
        <Route path="/Catalogo/:producto" element={<ProductoPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>     
      </Route>
    </Routes>
  )
}

export default App
