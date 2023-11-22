import { MdPersonAddDisabled } from "react-icons/md";
import { useStore } from "../store/cartStore"
import { Link } from 'react-router-dom'

export default function Cart(){
    const cart = useStore(state => state.cart)
  
    
    function contarObjetosIgualesPorNombre(listaObjetos) {
        const contadorNombres = {};
      
        for (const objeto of listaObjetos) {
          const nombre = objeto.name;
          if (contadorNombres[nombre]) {
            contadorNombres[nombre]++;
          } else {
            contadorNombres[nombre] = 1;
          }
        }
      
        return contadorNombres;
      }

    
      
    const resultado = contarObjetosIgualesPorNombre(cart);

    function getTotal(resultado,carrito){
        let total = 0;
        Object.keys(resultado).forEach(key => {

            //buscamos el precio del objeto
            let object = cart.filter((obj) => obj.name == key )
          
            total += resultado[key] * parseInt(object[0]['price'])
    

        });
        return total
    }

   
    let jsonObject = cart.map(JSON.stringify)
    let uniqueSet = new Set(jsonObject)
    let uniqueArray = Array.from(uniqueSet).map(JSON.parse)
    const totalValue = getTotal(resultado,cart)



    // calcular total
    

    return (
        <div className=''>
            
            {uniqueArray.map(product => (
                        <div className="flex mt-20 ml-4 items-center gap-20">
                          <img width="200px" height="200px" src={product.image}></img>
                            <h1 className="text-3xl font-bold text-white">Cantidad: {resultado[product.name]}</h1>
                        </div>
                    ))}
            <h1 className="text-3xl font-bold text-white absolute top-[350px] right-52">Subtotal: {totalValue}</h1>
            <Link to="/pagar"><button className="absolute bottom-10 right-[300px] font-bold text-white text-3xl">Pagar</button></Link>
            

        </div>
    )
}