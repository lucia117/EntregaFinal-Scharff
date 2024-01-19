import './App.css'
import Navbar from './component/navbar/Navbar'
//import ProductDetail from './component/productDetail/ProductDetail';
//  import ProductList from './component/productList/ProductList'
import ItemDetail from './component/itemDetail/ItemDetail';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from './component/footer/footer';


function App() {

  return (

    <BrowserRouter>
      <Navbar />

      {/*       <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route
          path="/productos/:categoryId"
          element={<ProductList products={products} />}
        />

        <Route path="/item/:itemId" element={<h1> Detalle del producto </h1>} />
        <Route path="/cart" element={<h1>Carrito</h1>} />


        <Route path="/not-found" element={<h2>Not found</h2>} />
        <Route path="*" element={<Navigate to={"/not-found"} />} />

      </Routes> */}

      <ItemDetail />
      <Footer />
    </BrowserRouter>




  )
}

export default App
