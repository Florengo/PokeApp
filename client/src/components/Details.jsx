import react from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import style from './Details.module.css'
import Nav from "./Nav";

export default function Details(props) {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch])

    return (
        <div>
            {
                Object.keys(pokemons).length > 0 ?
            <div className={style.background}>
                <Nav />
                <div >
                    <div className={style.main} id={style[pokemons.types[0]]}  >
                        <div>
                            <img src={pokemons.img} alt='img not found' width='300px' />
                        </div>
                        <div className={style.details}>
                            <h1>{pokemons.name.slice(0, 1).toUpperCase() + pokemons.name.slice(1)}</h1>
                            <div className={style.columns}>
                                <div>
                                    <p> Hp: {pokemons.hp} </p>
                                    <p> Attack: {pokemons.attack}</p>
                                    <p> Height:{pokemons.height} </p>
                                    <p> Special Attack: {pokemons.special_attack}</p>
                                    <p> Special Defense: {pokemons.special_defense}</p>
                                </div>
                                <div>
                                    <p>Speed: {pokemons.speed}</p>
                                    <p> Defense: {pokemons.defense}</p>
                                    <p>Weight: {pokemons.weight}</p>
                                </div>
                            </div>
                            <div className={style.types}>
                                <h3 className={style.details}>
                                    {pokemons.types[0].slice(0, 1).toUpperCase() + pokemons.types[0].slice(1)}
                                </h3>
                                <h3 className={style.details}>
                                    {pokemons.types[1] ? pokemons.types[1].slice(0, 1).toUpperCase() + pokemons.types[1].slice(1) : ''}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className={style.loading}>
                        <img src="https://cdn.shopify.com/s/files/1/0277/5246/4523/products/133-eevee_110x110@2x.gif?v=1591304809" alt="" width='200px' />
                        <h1> Loading... </h1>
                    </div>
}
        </div>
    )
}