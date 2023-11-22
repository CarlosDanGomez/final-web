
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import Galeria from './pages/Galeria';
import Nosotros from './pages/Nosotros';
import NuestroProducto from './pages/NuestroProducto';
import Tienda from './pages/Tienda';
import Cart from "./pages/Cart"
import Pagar from './pages/Pagar';
import Subir from './pages/Subir';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    
    <div className="App"> 


    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/galeria" element={<Galeria/>}></Route>
      <Route path="/nosotros" element={<Nosotros/>}></Route>
      <Route path="/nuestroproducto" element={<NuestroProducto/>}></Route>
      <Route path="/tienda" element={<Tienda/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/pagar" element={<Pagar/>}></Route>
      <Route path="/Subir" element={<Subir/>}></Route>
      
    </Routes>
    </BrowserRouter>

 </div>
  );
}

export default App;
