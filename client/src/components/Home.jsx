import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPokemons, getTypes, orderByName } from "../actions";
import style from './Home.module.css'
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import { filterPokemonsByTypes } from "../actions";
import { filterCreated } from "../actions";
import SearchBar from "./SearchBar";
import Nav from "./Nav";
import { orderByAttack } from "../actions";
import { attack } from "../actions";


export default function Home() {

    const dispatch = useDispatch()
    const allpokemons = useSelector((state) => state.pokemons)
    const allallpokemons = useSelector(state => state.allPokemons)
    const alltypes = useSelector((state) => state.types)
    const [orden, setOrden] = useState(' ')
    const [ordenAttack, setOrdenAttack] = useState(' ')
    const [currentPage, setCurrentPage] = useState(1)
    const pokemonsPerPage = 12
    const indexOfLastPokemon = currentPage * pokemonsPerPage //12
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage //0
    const currentPokemons = allpokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getPokemons())
        dispatch(getTypes())
    }, [])

    function handleOnFilter(e) {
        e.preventDefault();
        setCurrentPage(1);
        dispatch(filterPokemonsByTypes(e.target.value))
    }

    function handleFilterCreated(e) {
        e.preventDefault();
        setCurrentPage(1);
        dispatch(filterCreated(e.target.value))
    }

    function handleFilterAttack(e){
        e.preventDefault();
        dispatch(attack());
    }


    function handleOrderByName(e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleOrderByAttack(e) {
        e.preventDefault();
        dispatch(orderByAttack(e.target.value))
        setCurrentPage(1);
        setOrdenAttack(`Ordenado ${e.target.value}`)
    }
    // console.log(currentPokemons)
    return (
        <div>
            {
                allallpokemons && allallpokemons.length > 0 ?
                    <div className={style.background}>
                        <Nav />
                        <div>
                            {/* <Link to="/pokemons"> Crear pokemon </Link> */}
                            {/* <h1>pepal</h1> */}
                            {/* <button onClick={e => { handleOnClick(e) }}>
                    Volver a cargar los personajes
                </button> */}
                <button onClick={e => {handleFilterAttack(e)}}>  FILTRAR </button>
                        </div>
                        <select onChange={e => { handleOrderByName(e) }} className={style.search}>
                        <option value="" selected disabled hidden>Sort by Name</option>

                            <option value='asc'>
                                Ascending
                            </option>
                            <option value='desc'>
                                Descending
                            </option>

                        </select>
                        <select onChange={e => { handleOrderByAttack(e) }} >
                        <option value="" selected disabled hidden>Sort by Attack</option>

                            <option value='asc'>
                                Ascending
                            </option>
                            <option value='desc'>
                                Descending
                            </option>
                        </select>
                        <select onChange={e => { handleOnFilter(e) }}>
                            {alltypes && alltypes.map((e, i) => {
                                return (
                                    <option value={e} key={i}>
                                        {e.slice(0, 1).toUpperCase() + e.slice(1)}
                                    </option>
                                )
                            })}
                        </select>

                        <select onChange={e => { handleFilterCreated(e) }}>
                        <option value="" selected disabled hidden>Filter by origin</option>

                            <option value='All'> All </option>
                            <option value='Created'>Created </option>
                            <option value='Api'> Existent</option>
                        </select>
                        <Paginado
                            pokemonsPerPage={pokemonsPerPage}
                            allpokemons={allpokemons.length}
                            paginado={paginado} />


                        {/* <div className={style.search}>
                <SearchBar />
            </div> */}
                        <div className={style.cards}>
                            {
                                currentPokemons.length === 0 ?
                                    <div>
                                        <h1>There no current pokemons with the given type</h1>
                                    </div>
                                    :
                                    ''
                            }
                            {

                                currentPokemons && currentPokemons.map((e, i) => {
                                    return (
                                        <Fragment key={i}>
                                            <Link to={"/pokemon/" + e.id} className={style.links}>
                                                <Card name={e.name} img={e.img} types={e.types} id={e.id} key={e.id} ></Card>
                                            </Link>
                                        </Fragment>)
                                })
                            }
                        </div>

                        <div>

                        </div>
                    </div>
                    : <div className={style.loading}>
                        <img src="https://cdn.shopify.com/s/files/1/0277/5246/4523/products/133-eevee_110x110@2x.gif?v=1591304809" alt="" width='200px' />
                        <h1> Loading... </h1>
                    </div>
            }
        </div>
    )

}

