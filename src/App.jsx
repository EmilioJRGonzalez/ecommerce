import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Mi Página" />
    </>
  );
}

export default App
