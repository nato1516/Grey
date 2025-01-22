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
    const [personajes, setPersonajes] = useState([]); // Todos los personajes
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
    }, [aplicarFiltros]);
    const manejarCambioFiltroEspecialidad = (especialidad) => {
        //Actualiza el estado del filtro de especialidad con el valor seleccionado.
        setFiltroEspecialidad(especialidad);
    };
    //Se encargan de un rango por temporada desde la primera aparicion hasta la ultima 
    const manejarCambioFiltroTemporada = (temporada) => {
        setFiltroTemporada(temporada);
    };
    const manejarCambioFiltroTemporadaFin = (temporada) => {
        setFiltroTemporadaFin(temporada);
    };
    //El term es lo que el usuario escribe en el input de busqueda 
    const manejarBusqueda = (term) => {
        //Actualiza la lista en base a lo que se digito en el input de busqueda 
        setSearchTerm(term);
    };
    // Paginación
    //Se encarga de calcular cuantas paginas se pone cuando se aplican filtros busca el ultimo personaje 
    const ultimoPersonajeEnPagina = currentPage * personajesPorPagina;
    const primerPersonajeEnPagina  = ultimoPersonajeEnPagina - personajesPorPagina;
    //muestra los personajes que estan entre la constante primerPersonaje y ultimoPersonaje 
    const currentCharacters = filteredPersonajes.slice(
        primerPersonajeEnPagina ,
        ultimoPersonajeEnPagina
    );
    //Se encarga de reducir el numero de paginas  y por medio del  setCurrentPage se actualiza la pagina 
    const pagAnte = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    //Se encarga de aumentat el numero de paginas y cuando ya se encuentra en la ultima no avanza mas 
    const pagDesp = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const mostrarBotonesDePaginas = () => {
        //se crea un arreglo en el cual se crean elementos en base a la candidad de paginas que hay 
        return Array.from({ length: totalPages }, (_, index) => (
            //boton para cambiar de pagina 
            <button
                //identificador unico que se le va a agregar a cada boton que seria el número de pagina 
                key={index + 1}
                //Si se esta en la pagina actual se ponen ciertas caracteristicas y las demas estarian con las clase boton-pagina
                className={currentPage === index + 1 ? "active btn-hoja" : "btn-hoja"}
                //por medio del onClick se cambia la pagina a la cual representa el identificador del boton 
                onClick={() => setCurrentPage(index + 1)}
            >
                {index + 1}
            </button>
        ));
    };
    return (
        <div className='contenedor-info'>
            <Nav onSearch={manejarBusqueda} />
            <div className="tiulo-poke">
                
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
            <Botones
                currentPage={currentPage}
                totalPages={totalPages}
                pagAnte={pagAnte}
                pagDesp={pagDesp}
            />
            <div className="contenedor-paginacion">
                <div className="numeros-pagina">{mostrarBotonesDePaginas()}</div>
            </div>
        </div>
    );
}
