import React from "react";
import "./style/personaje.css"; // Ruta al archivo CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from '../assets/logo.png'

const CardPersonaje = ({ personaje }) => {
    if (!personaje || !personaje.nombre) {
        return <p>Error: Información del personaje no disponible.</p>;
    }

    return (
        <div>
            {/* Modal */}
            <div className="modal fade  " id={`modal-${personaje.id}`} tabIndex="1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className=" modal-dialog">
                    <div className="modal-content tamaño-modal color-modal ">
                        <div className="modal-header">
                            <h5 className="modal-title titulo-modal" id="exampleModalLabel">{personaje.nombre}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body infomacion ">
                            <div className="modal-info">
                                <img
                                    className="imagen-modal"
                                    src={personaje.imagen}
                                    alt={personaje.nombre}

                                />
                                <div className="textos">
                                    <p><strong>Apodo:</strong> {personaje.apodo}</p>
                                    <p><strong>Especialidad:</strong> {personaje.especialidad}</p>
                                    <p><strong>Estado:</strong> {personaje.estado}</p>
                                    <p><strong>Primera aparicion:</strong> {personaje.temporadasIni}</p>
                                    <p><strong>Ultima aparicion:</strong>{personaje.temporadaFin} </p>
                                    <p><strong>Pareja:</strong> {personaje.pareja}</p>
                                    {/* <p><strong>Frase:</strong> {personaje.frase}</p> */}
                                    <p><strong>Actor:</strong> {personaje.actor}</p>
                                </div>
                            </div>
                            

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="principal-card">
                <div className="header-card">
                <img className="logo-hospital" src={personaje.logo} alt="" />
                </div>
                
                <img
                    className="imagen-primaria"
                    src={personaje.imagen}
                    alt={personaje.nombre}
                />
                <h2 className="h2-primario">{personaje.nombre}</h2>
                <p className="p"><strong>Apodo:</strong> {personaje.apodo}</p>
                <p className="p"><strong>Especialidad:</strong> {personaje.especialidad}</p>

                {/* Botón para abrir el modal */}
                <button type="button" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target={`#modal-${personaje.id || 'default'}`} >
                    Ver más
                </button>
            </div>


        </div>

    );
};

export default CardPersonaje;
