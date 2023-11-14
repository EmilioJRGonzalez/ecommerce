import { BrowserRouter, Routes, Route} from "react-router-dom"

import { Err404 } from "./components/Err404";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

import "./App.css";
import { ItemDetailContainer } from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a Mi Página" />} />
        <Route path="/category/:id" element={<ItemListContainer greeting="Categoria" />} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="*" element={<Err404/>} />
      </Routes >
    </BrowserRouter>
  );
}

export default App
