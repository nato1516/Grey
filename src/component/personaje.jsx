import React from "react";
import CardPersonaje from "./cardPersonaje";
import "./style/personaje.css";

const Personajes = ({ personaje }) => {
    if (!personaje) {
        return <p>Error: No se encontró el personaje.</p>;
    }

    return (
        <div>
            <div className="div-conten">
                <CardPersonaje key={personaje.id} personaje={personaje} />
            </div>
        </div>

    );
};

export default Personajes;
