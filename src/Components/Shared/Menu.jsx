import React from 'react';
import './Menu.css';
import BotonMenu from "./Boton-Menu";

function Menu() {
    return (
        <div>
            <div className="banner">
                <span>Nosotros</span>
                <span>Galería</span>
                <span className="icon-persiana">🖼️</span> {/* Este es un emoji como placeholder para el icono de persiana. Puedes reemplazarlo con un ícono real. */}
                <span className="icon-carrito">🛒</span> {/* Este es un emoji como placeholder para el icono de carrito. Puedes reemplazarlo con un ícono real. */}
            </div>
            <BotonMenu />
        </div>
    );
}

export default Menu;
