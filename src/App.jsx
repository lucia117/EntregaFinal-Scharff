import './App.css'

import ItemDetail from './component/itemDetail/ItemDetail';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from './component/footer/Footer';
import ItemCard from './component/itemCard/ItemCard';
import ItemCheckout from './component/itemCheckout/ItemCheckout';
import PokeApi from './component/pasar/pokeApi';
import Navbar from './component/navbar/Navbar'
import ItemNotFound from './component/itemNotFound/ItemNotFound';
import ItemListContainer from './component/itemListContainer/ItemListContainer';
import HomePage from './component/homePage/HomePage';



function App() {

  return (

    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/pokeapi' element={<PokeApi />} />


        <Route path='/not-found' element={<ItemNotFound />} />
        <Route path='*' element={<Navigate to={"/not-found"} />} />

      </Routes>
      <ItemDetail imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_652388-MLA54091535621_032023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" />

      <Footer />
    </BrowserRouter>
  )
}

export default App

{/* 
      <div className='container m-auto pl-5 pr-5 bg-gray-100 '>

        <div className="p-2 m-auto ">
          <div className="mt-6 sm:mt-1">
            <div>
              <div className="grid gird-cols-4 md:grid-cols-4 sm:grid-cols-4 gap-3  ">
                <ItemCard imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_763796-MLA72180623096_102023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" price="18.000" />
                <ItemCard imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_652388-MLA54091535621_032023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" price="18.000" />
                <ItemCard imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_893886-MLU70045140742_062023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" price="18.000" />
                <ItemCard imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_652388-MLA54091535621_032023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" price="18.000" />
              </div>
            </div>
          </div>
        </div>

        <ItemDetail imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_652388-MLA54091535621_032023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" />
        <hr className='m-2' />
        <ItemDetail imageUrl="https://http2.mlstatic.com/D_NQ_NP_2X_763796-MLA72180623096_102023-F.webp" title="Remera Hombre Billabong Fundamental Neutral" />
        <ItemCheckout />      </div>
 */}