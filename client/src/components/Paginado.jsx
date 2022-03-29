import React from "react";
import style from './Paginado.module.css'

export default function Paginado({ pokemonsPerPage, allpokemons, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allpokemons / pokemonsPerPage); i++) { //divido todos los pj por los personajes por pagina que quiero.
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className={style.paginado}>
                {pageNumbers && pageNumbers.map(number => {
                    return (
                        <button className={style.number} key={number} onClick={() => paginado(number)}>
                            {number}
                        </button> 
                    )
                })}
            </ul>
        </nav>
    )
}