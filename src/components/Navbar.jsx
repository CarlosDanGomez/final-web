
import {MdAccountCircle} from 'react-icons/md'
import {TiShoppingCart} from 'react-icons/ti'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
function Navbar(){
    return (
        <nav className="w-full sticky  z-50 top-0 h-[154px] bg-secondary flex justify-between">
            <div className="flex justify-center items-center corner rounded-r-3xl w-[233px] h-[223px] bg-secondary relative">
                <img className="" src={logo}></img>
                
            </div>
                <ul className="flex font-bold  text-white mr-auto text-3xl gap-36 items-center justify-start">
                    <Link to="/nosotros"><li className="ml-40">Nosotros</li></Link>
                    <Link to="/nuestroproducto"> <li>Nuestro producto</li></Link>
                    <Link to="/galeria"><li>Galería</li></Link>
                    <Link to="/tienda"><li>Tienda</li></Link>
                    <MdAccountCircle size={60}></MdAccountCircle>
                    <Link to="/cart"><TiShoppingCart size ={60}></TiShoppingCart></Link>
                </ul>
               



         
        </nav>
    )

}
export default Navbar