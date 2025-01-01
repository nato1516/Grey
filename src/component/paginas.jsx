import React, { useEffect, useState ,useCallback } from 'react';
import Nav from './nav';
import "./style/personaje.css";
import data from "../assets/data/data.json";
import Filtros from "./filtros";
import FiltroTempIni from "./filtroTempIni";
import FiltroTempFin from "./filtroTempFin";
import Personajes from "./personaje";
import Botones from "./botones";



export default function Paginass() {
    const [personajes, setPersonajes] = useState([]); // Datos originales
    const [filteredPersonajes, setFilteredPersonajes] = useState([]); // Lista filtrada
    const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
    const [filtroEspecialidad, setFiltroEspecialidad] = useState(""); // Filtro de especialidad
    const [filtroTemporada, setFiltroTemporada] = useState(""); // Filtro de temporada inicial
    const [filtroTemporadaFin, setFiltroTemporadaFin] = useState(""); // Filtro de temporada final
    const [currentPage, setCurrentPage] = useState(1); // Página actual
    const personajesPorPagina = 5;
    const totalPages = Math.ceil(filteredPersonajes.length / personajesPorPagina);

    // Cargar datos iniciales
    useEffect(() => {
        setPersonajes(data);
        setFilteredPersonajes(data);
    }, []);

    // Usamos useCallback para evitar recrear la función en cada render
    const aplicarFiltros = useCallback(() => {
        let personajesFiltrados = personajes;

        // Filtro por especialidad
        if (filtroEspecialidad) {
            personajesFiltrados = personajesFiltrados.filter(
                (personaje) => personaje.especialidad === filtroEspecialidad
            );
        }

        // Filtro por temporada inicial
        if (filtroTemporada) {
            personajesFiltrados = personajesFiltrados.filter(
                (personaje) => personaje.temporadasIni === filtroTemporada
            );
        }

        // Filtro por temporada final
        if (filtroTemporadaFin) {
            personajesFiltrados = personajesFiltrados.filter(
                (personaje) => personaje.temporadaFin === filtroTemporadaFin
            );
        }

        // Filtro por  búsqueda
        if (searchTerm) {
            personajesFiltrados = personajesFiltrados.filter((personaje) =>
                personaje.nombre.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredPersonajes(personajesFiltrados);
        setCurrentPage(1); 
    }, [personajes, filtroEspecialidad, filtroTemporada, filtroTemporadaFin, searchTerm]);

    useEffect(() => {
        aplicarFiltros();
    }, [aplicarFiltros]); // Agregar aplicarFiltros como dependencia

    const manejarCambioFiltroEspecialidad = (especialidad) => {
        setFiltroEspecialidad(especialidad);
    };

    const manejarCambioFiltroTemporada = (temporada) => {
        setFiltroTemporada(temporada);
    };

    const manejarCambioFiltroTemporadaFin = (temporada) => {
        setFiltroTemporadaFin(temporada);
    };

    const manejarBusqueda = (term) => {
        setSearchTerm(term);
    };

    // Paginación
    const indexOfLastCharacter = currentPage * personajesPorPagina;
    const indexOfFirstCharacter = indexOfLastCharacter - personajesPorPagina;
    const currentCharacters = filteredPersonajes.slice(
        indexOfFirstCharacter,
        indexOfLastCharacter
    );

    const pagAnte = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const pagDesp = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const renderizarNumerosDePaginas = () => {
        return Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index + 1}
                className={currentPage === index + 1 ? "active btn-hoja" : "btn-hoja"}
                onClick={() => setCurrentPage(index + 1)}
            >
                {index + 1}
            </button>
        ));
    };


    return (
        <div className='contenedor-info'>
            <Nav onSearch={manejarBusqueda} />
            <Botones
                currentPage={currentPage}
                totalPages={totalPages}
                pagAnte={pagAnte}
                pagDesp={pagDesp}
            />
            <div className="contenedor-paginacion">
                <div className="numeros-pagina">{renderizarNumerosDePaginas()}</div>
            </div>

            <div className="contenedor-filtros">
                <Filtros onFilterChange={manejarCambioFiltroEspecialidad} />
                <FiltroTempIni cambioFiltroCambio={manejarCambioFiltroTemporada} />
                <FiltroTempFin cambioFiltroFin={manejarCambioFiltroTemporadaFin} />
            </div>
            <div className="personajes-lista">
                {currentCharacters.map((personaje) => (
                    <Personajes key={personaje.id} personaje={personaje} />
                ))}
            </div>
        </div>
    );
}