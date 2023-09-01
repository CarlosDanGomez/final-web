import logo from './logo.svg';
import React from 'react';
import './App.css';
import Index from './Pages/Index/Index';
import Nosotros from './Pages/Nosotros/Nosotros';
import NuestroProducto from './Pages/Nuestro-producto/Nuestro-producto';
import CargarProducto from './Pages/CargarProducto/CargarProducto';
import Carrito from './Pages/Carrito/Carrito';
import DatosAdmon from './Pages/DatosAdmon/DatosAdmon';
import DatosCliente from './Pages/DatosCliente/DatosCliente';
import Galeria from './Pages/Galeria/Galeria';
import Tienda from './Pages/Tienda/Tienda';

function App() {
  return (
    <div className="App">
      <Index/>
    </div>
  );
}

export default App;
