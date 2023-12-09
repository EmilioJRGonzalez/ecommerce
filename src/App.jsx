import { BrowserRouter, Routes, Route} from "react-router-dom"

import "./App.css";
import { CartProvider } from "./contexts/CartContext";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Err404 } from "./components/Err404";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Mi Página" />} />
          <Route path="/category/:id" element={<ItemListContainer greeting="Categoria" />} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Err404/>} />
        </Routes >
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
