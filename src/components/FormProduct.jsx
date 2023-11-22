import React, { useState } from 'react';

const FormularioProducto = () => {
  const [producto, setProducto] = useState({
    image: '',
    name: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos del producto, como enviarlos a un servidor.
    fetch("http://localhost:8000/products/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('Respuesta de la API:', responseData);
      })
      .catch(error => {
        console.error('Error al enviar los datos a la API:', error);
      });
  };
 
  

  return (
    <div>
        <form className='flex flex-col gap-20 justify-center items-center text-3xl text-texto font-montserrat font-bold' onSubmit={handleSubmit}>
        <div className='flex gap-4'>
          <label>image:</label>
          <input
            type="url"
            name="image"
            value={producto.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex gap-4'>
          <label>name:</label>
          <input
            type="text"
            name="name"
            value={producto.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='flex gap-4'>
          <label>price:</label>
          <input
            type="textr"
            name="price"
            value={producto.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default FormularioProducto;