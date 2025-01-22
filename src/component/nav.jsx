import React from 'react'
import logo from '../assets/logo.png'
import "./style/personaje.css";
import { FaSearch } from "react-icons/fa"; 


export default function Nav({ onSearch }) {
  return (
    <div>
      <nav>
       <div className="contenido">
          <div className="logo-nav">
            <img className='logo-img' src={logo} alt="" />
          </div>
          <div className="busqueda">
            <input className='input-busca'
              type="search"
              placeholder="Buscar por nombre"
              onChange={(e) => onSearch(e.target.value)} // Llama a la función que viene desde el padre (Paginass)
            />
            <span className="lupa">
              <FaSearch/> {/* Ícono de lupa de Bootstrap */}
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}
