import { useContext } from "react";
import { UserContext } from '../context/UserContext'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from '../component/footer/Footer';
import Navbar from '../component/navbar/Navbar'
import ItemNotFound from '../component/itemNotFound/ItemNotFound';
import HomePage from '../component/homePage/HomePage';
import ItemDetailContainer from '../component/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../component/itemListContainer/ItemListContainer';
import CartView from '../component/cartView/CartView';
import Login from '../component/login/Login';


const AppRouter = () => {
    const { user } = useContext(UserContext);
    return (
        <BrowserRouter >
            <Navbar />

            {user.logged ? (
                <Routes>
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
                    <Route path='/not-found' element={<ItemNotFound />} />
                    <Route path='*' element={<Navigate to={"/"} />} />
                </Routes>

            ) : (
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            )}
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter