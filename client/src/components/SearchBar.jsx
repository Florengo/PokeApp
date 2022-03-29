import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../actions";
import style from './Search.module.css'

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e){
    e.preventDefault()
   setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePokemons(name))
    }

    return(
        <div className={style.main}>
            <input type = 'text' 
            placeholder=" Search..."
            onChange={(e) => handleInputChange(e)}/>
            <button onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}