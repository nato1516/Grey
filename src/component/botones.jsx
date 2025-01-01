import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import "./style/personaje.css";

export default function Botones({ currentPage, totalPages, pagAnte, pagDesp }) {
    return (
        <div className="botones-pagi">
            <button
                className="btn-pag"
                onClick={pagAnte}
                disabled={currentPage === 1}
            >
                <GoChevronLeft /> Anterior
            </button>
            <button
                className="btn-pag"
                onClick={pagDesp}
                disabled={currentPage === totalPages}
            >
                Siguiente <GoChevronRight />
            </button>
        </div>
    );
}
