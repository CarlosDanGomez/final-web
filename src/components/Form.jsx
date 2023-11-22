import React, { useState } from 'react';
import { useStore } from "../store/cartStore"

const Form = () => {
  const [datos, setDatos] = useState({
    card: '',
    address: '',
    phone: '',
    cvv: '',
    cart: [],
    total: 0,
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };
  const carrito = useStore(state => state.cart)

  const handleSubmit = (e) => {
    e.preventDefault();
    setDatos({
        ...datos,cart: carrito
    })
    
    fetch("http://localhost:8000/orders/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      })
        .then(response => response.json())
        .then(responseData => {
          console.log('Respuesta de la API:', responseData);
        })
        .catch(error => {
          console.error('Error al enviar los datos a la API:', error);
        });
    };
   


    // guardamos pedido en la BD
  

  return (
    <div className='float-left'>
      <form className='flex flex-col gap-11 text-texto font-bold text-3xl' onSubmit={handleSubmit}>
        <div className='flex gap-10 justify-center items-center'>
          <label>Tarjeta:</label>
          <input
            type="text"
            name="card"
            required
            value={datos.card}
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-10 justify-center items-center'>
          <label>Dirección:</label>
          <input
            type="text"
            name="address"
            required
            value={datos.address}
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-10 justify-center items-center'>
          <label>Teléfono:</label>
          <input
            type="tel"
            name="phone"
            required
            value={datos.phone}
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-10 justify-center items-center'>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            required
            value={datos.cvv}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Comprar</button>
      </form>

    </div>
  );
};

export default Form;
