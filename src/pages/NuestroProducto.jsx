import casa from "../assets/casa.png"
import plantacion from "../assets/plantacion.png"
import trabajador from "../assets/trabajador.png"

import { useStore } from "../store/cartStore"

export default function NuestroProducto(){

    const cart = useStore((state) => state.cart)
    return (
        <div className="h-screen flex flex-col text-texto  mt-[200px]">
            <h1 className="text-3xl text-black font-bold font-montserrat">Tesoro Aromático de la Tierra</h1>
           
            <div className="flex ">
            <img className="float-left ml-4" width="300px" src={casa}></img>
            <p className="p-4 w-[1100px] text-left  ml-4 font-black float-right text-4xl">
            En el corazón de la vereda El Venado, rodeada de montañas, nace el Café La Mina. Su sabor único proviene de una tierra volcánica milenaria, aguas cristalinas y un clima seco y templado, combinación que da vida a uno de los cafés más exquisitos del mundo.</p>

            </div>

            <div className="flex justify-evenly mr-12 pt-5">
                <img width="500px" src={plantacion}></img>
                <img width="500px" src={trabajador}></img>
                

            </div>

          
        </div>
    )
}