import './App.css'
import Navbar from './component/navbar/Navbar'
import ProductList from './component/productList/ProductList'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {

  const products = [{ imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_693279-MLA72366016276_102023-F.webp", title: "Zapatillas Puma Running", subtitle: "Softride Sophia Wns Mujer", price: "39.000,00" },
  { imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_940457-MLA49461169782_032022-F.webp", title: "Zapatillas Puma Running", subtitle: "Softride Sophia Wns Hombre", price: "38.000,00" },
  { imageUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_660451-MLA51918241528_102022-F.webp", title: "Zapatillas Puma Flyer Runner", subtitle: "Adp Hombres Running", price: "45.599,00" }]

  return (

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route
          path="/productos/:categoryId"
          element={<ProductList products={products} />}
        />

        <Route path="/item/:itemId" element={<h1> Detalle del producto </h1>} />
        <Route path="/cart" element={<h1>Carrito</h1>} />


        <Route path="/not-found" element={<h2>Not found</h2>} />
        <Route path="*" element={<Navigate to={"/not-found"} />} />





      </Routes>
    </BrowserRouter>



  )
}

export default App
