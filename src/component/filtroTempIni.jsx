import React from 'react'
import "./style/personaje.css";


export default function FiltroTempIni({cambioFiltroCambio}) {
    return (
        <div className="filtros">
            <div className="especialidad-conten">
                <label className="titulo-label" htmlFor="especialidad">Primera aparición:</label>
                <select className="especialidad"
                    id="aparicionIni"
                    onChange={(e) => cambioFiltroCambio(e.target.value)}
                >
                    <option value="">Todas</option>
                    <option value="1">1 </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    {/* Agrega más opciones según sea necesario */}
                </select>
            </div>

        </div>
    )
}
