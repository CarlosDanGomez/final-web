import { Link } from "react-router-dom";
import Product from "../components/Product"
import React, { useState, useEffect } from 'react';

export default function Tienda(){
    const [products, setProducts] = useState(null);

   // se hace el fetch a la BD

   let images = require.context('../assets/productos',true);
   console.log(images)
   const fetchProducts = () => {
     fetch("http://localhost:8000/products/")
       .then(response => {
         return response.json()
       })
       .then(data => {
         setProducts(data)
       })
   }
   useEffect(() => {
    fetchProducts()
  }, [])

    return (
                <div>
                    {products && (
                        <div className="flex mt-2 flex-wrap h-screen justify-center items-center gap-40">
                    {products.map(product => (
                        <Product  imageUrl={product.image} name={product.name} price={product.price} ></Product>
                       
                    ))}
                    </div>
      )}          <Link to = "/subir"><h1 className="absolute text-texto mb-5 text-3xl">Añadir producto</h1></Link>
                  </div>
            
    )
}