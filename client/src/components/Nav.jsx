import react from "react";
import SearchBar from "./SearchBar";
import style from './Nav.module.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetDetail } from "../actions";


export default function Nav() {
    const dispatch = useDispatch()
    const handleLogo = () => {
        dispatch(resetDetail())

    }
    return (
        <div className={style.main}>
            <div className={style.left}>
                <Link to='/home' onClick={() => handleLogo()}>
                    <img src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_960_720.png" alt="logo" width='30pxs' />
                </Link>
                <Link to='/pokemons'>
                    Create
                </Link>
                <Link to='/about'>
                    About
                </Link>
            </div>
            <SearchBar />
        </div>
    )
}