import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPokemons, getTypes } from "../actions";
import style from './Home.module.css'
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Home() {

    const dispatch = useDispatch()
    const allpokemons = useSelector((state) => state.pokemons)
    const alltypes = useSelector((state) => state.types)
    const [currentPage, setCurrentPage] = useState(1)
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
    const indexOfLastPokemon = currentPage * pokemonsPerPage //12

    useEffect(() => {
        dispatch(getPokemons())
        dispatch(getTypes())
    }, [])

    function handleOnClick(e) {
        e.PreventDefault();
        dispatch(getPokemons());
    }


    return (
        <div>
            <div>
                <Link to="/pokemons"> Crear pokemon </Link>
                <h1>pepal</h1>
                <button onClick={e => { handleOnClick(e) }}>
                    Volver a cargar los personajes
                </button>
            </div>
            <select>
                <option value='asc'>
                    Ascendente
                </option>
                <option value='desc'>
                    Descendente
                </option>
            </select>
            <select>
            {alltypes && alltypes.map( e => {
                return (
                    <option value={e}> 
                        {e}
                    </option>
                )
            })}
            </select>

            <select>
                <option value='All'> Todos </option>
                <option value='Created'>Creados </option>
                <option value= 'Api'> Existentes</option>
            </select>
            {
               allpokemons && allpokemons.map( (e) => {
                   return(
                       <fragment>
                   <Link to={"/home/" + e.id}>
                    <Card name={e.name} img={e.img} types={e.types}></Card>
                    </Link>
                    </fragment>)
                })
            }

            <div>

            </div>
        </div>

    )

}

