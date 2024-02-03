import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import AppRouter from "./router/AppRouter";

function App() {

  return (
    <UserProvider>
      <AppRouter />
    </UserProvider >
  );
}

export default App;