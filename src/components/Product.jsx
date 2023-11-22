import React from 'react';
import {useStore} from "../store/cartStore"

function Product({ imageUrl, price, name }) {
    const { addProduct} = useStore();

    const handleAddToCart = () => {
        addProduct({
            'name': name,
            'image': imageUrl,
            'price':price
        })
    }
    
    return (
        <div className="flex flex-col items-center gap-8 justify-center font-montserrat font-bold text-3xl text-texto font-bold">
            <h1></h1>
            <img className='w-[300px] h-[300px]' src={imageUrl} alt={name} />
            <p className=''>{name}</p>
            
            <p>${price}</p>
            <button onClick={handleAddToCart}><p className='mt-10' >Comprar</p></button>
        </div>
    );
}

export default Product;
