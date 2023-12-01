import './App.css'
import CartWidget from './component/cartWidget/CartWidget'
import Navbar from './component/navbar/Navbar'
import ProductCard from './component/productCard/ProductCard'


function App() {

  return (
    <>
      <Navbar />
      <ProductCard imageUrl={"https://http2.mlstatic.com/D_NQ_NP_2X_693279-MLA72366016276_102023-F.webp"} title={"Zapatillas Puma Running"} subtitle={"Softride Sophia Wns Mujer"} price={"39.000,00"} />

      <ProductCard imageUrl={"https://http2.mlstatic.com/D_NQ_NP_2X_940457-MLA49461169782_032022-F.webp"} title={"Zapatillas Puma Running"} subtitle={"Softride Sophia Wns Hombre"} price={"38.000,00"} />

      <ProductCard imageUrl={"https://http2.mlstatic.com/D_NQ_NP_2X_660451-MLA51918241528_102022-F.webp"} title={"Zapatillas Puma Flyer Runner"} subtitle={"Adp Hombres Running"} price={"45.599,00"} />
    </>
  )
}

export default App
