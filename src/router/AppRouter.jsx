import { useContext } from "react";
import { UserContext } from '../context/UserContext'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from '../component/navbar/Navbar'
import ItemNotFound from '../component/itemNotFound/ItemNotFound';
import HomePage from '../component/homePage/HomePage';
import ItemDetailContainer from '../component/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../component/itemListContainer/ItemListContainer';
import CartView from '../component/cartView/CartView';
import Login from '../component/login/Login';
import Checkout from "../component/checkout/Checkout";


const AppRouter = () => {
    const { user } = useContext(UserContext);
    return (
        <BrowserRouter >
            <Navbar />

            {user.logged ? (
                <Routes >
                    <Route path='/' element={<HomePage />} />
                    <Route
                        path="/productos/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route
                        path="/productos/:categoryId"
                        element={<ItemListContainer />}
                    />
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartView />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path='/not-found' element={<ItemNotFound />} />
                    <Route path='*' element={<Navigate to={"/"} />} />
                </Routes>

            ) : (
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            )}


        </BrowserRouter>
    )
}

export default AppRouter