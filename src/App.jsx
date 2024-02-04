import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import AppRouter from "./router/AppRouter";
import "./App.css";


function App() {

  return (
    <UserProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </UserProvider >
  );
}

export default App;