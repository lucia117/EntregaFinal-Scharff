import './App.css'

import ItemDetail from './component/itemDetail/ItemDetail';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar'
import ItemNotFound from './component/itemNotFound/ItemNotFound';
import HomePage from './component/homePage/HomePage';
import ItemDetailContainer from './component/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './component/itemListContainer/ItemListContainer';
import CartView from './component/cartView/CartView';



function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <div className='container content-center mr-2   bg-slate-100'>
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route
            path="/productos/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />

          <Route path="/cart" element={<CartView />} />

          <Route path='/not-found' element={<ItemNotFound />} />
          <Route path='*' element={<Navigate to={"/not-found"} />} />
        </Routes>
      </div>


      <Footer />
    </BrowserRouter>
  )
}

export default App