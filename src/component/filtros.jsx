import React from "react";
import "./style/personaje.css";

const Filtros = ({ onFilterChange }) => {


    return (
        <div className="filtros">
            <div className="especialidad-conten">
                <label className="titulo-label" htmlFor="especialidad">Filtrar por especialidad:</label>
                <select className="especialidad"
                    id="especialidad"
                    onChange={(e) => onFilterChange(e.target.value)}
                >
                    <option value="">Todas</option>
                    <option value="Anestesista">Anestesista</option>
                    <option value="Bombero">Bombero</option>
                    <option value="Cardiología">Cardiología</option>
                    <option value="Enfermería">Enfermería</option>
                    <option value="Cirugía Fetal">Fetal</option>
                    <option value="Cirugía General">General</option>
                    <option value="Internos">Internos</option>
                    <option value="Residente">Residentes</option>
                    <option value="Neurocirugía">Neurocirugía</option>
                    <option value="Obstetricia">Obstetricia</option>
                    <option value="Oftalmología">Oftalmología</option>
                    <option value="Ortopédia">Ortopédia</option>
                    <option value="Oncologia">Oncologia</option>
                    <option value="Patología">Patología</option>
                    <option value="Plastica">Plastica</option>
                    <option value="Pediatria">Pediatria</option>
                    <option value="Trauma">Trauma</option>
                    <option value="Urología">Urología</option>
                    
                    
                    {/* Agrega más opciones según sea necesario */}
                </select>
            </div>
        </div>
    );
};

export default Filtros;
