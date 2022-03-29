import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postPokemons, getTypes } from '../actions/index'
import { useDispatch, useSelector } from "react-redux";
import style from './PokemonCreate.module.css'
import Nav from "./Nav";


function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'Name is required'
    }
    else if (!input.height) {
        errors.height = 'Height is required'
    }
    else if (!input.hp) {
        errors.hp = 'Hp is required'
    }
    else if (!input.attack) {
        errors.attack = 'Attack is required'
    }
    else if (!input.special_attack) {
        errors.special_attack = 'Special Attack is required'
    }
    else if (!input.special_defense) {
        errors.special_defense = 'Special Defense is required'
    }
    else if (!input.defense) {
        errors.defense = 'Defense is required'
    }
    
    else if (!input.speed) {
        errors.speed = 'Speed is required'
    }
    else if (!input.weight) {
        errors.weight = 'Weight is required'
    }
    else if (!input.img) {
        errors.img = 'Img is required'
    }
    else if (!input.types.length) {
        console.log(input.types.length)
        errors.types = 'Types is required'
    }
    return errors;
}
export function PokemonCreate({ history }) {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types)
    const typesId = {}
    const [errors, setErrors] = useState({});
    for (var i = 0; i < types.length; i++) {
        typesId[types[i]] = i + 1

    }
    const [input, setInput] = useState({
        name: '',
        height: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        weight: '',
        img: '',
        special_attack: '',
        special_defense: '',
        types: []

    })
    console.log(errors)
    console.log()
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch(postPokemons(input))
        alert('¡Pokemon succesfully created!')
        history.push('/home')
    }

    function handleTypes(e) {
        if (e.target.name === 'type1') {
            if (input.types.length === 0) {
                setInput({
                    ...input,
                    types: [typesId[e.target.value]]
                })
                setErrors({
                    ...errors,
                    types: ''
                })
            }
            else {
                input.types.shift()
                setInput({
                    ...input,
                    types: [typesId[e.target.value], ...input.types]
                })
                setErrors({
                    ...errors,
                    types: ''
                })
              
            }
        }
        else {
            if (input.types.length === 1) {
                setInput({
                    ...input,
                    types: [...input.types, typesId[e.target.value]]
                })
                setErrors({
                    ...errors,
                    types: ''
                })
            }
            else {
                input.types.pop()
                setInput({
                    ...input,
                    types: [...input.types, typesId[e.target.value]]
                })
                setErrors({
                    ...errors,
                    types: ''
                })
            }
        }
    }
    useEffect(() => {
        dispatch(getTypes());
    }, []);

    return (
        <div className={style.main}>
            <Nav />
            <h1>Create your pokemon</h1>
            <form className={style.form}>
                <div className={style.div}>
                    <label> Name</label>
                    <input
                        type='text'
                        value={input.name}
                        name='name'
                        onChange={handleChange} />

                    {errors.name && (
                        <p className="error"> {errors.name}</p>
                    )}

                </div>

                <div className={style.div}>
                    <label>Height </label>
                    <input
                        type='number'
                        value={input.height}
                        name='height'
                        onChange={handleChange} />
                    {errors.height && (
                        <p className="error"> {errors.height}</p>
                    )}
                </div>

                <div className={style.div} >
                    <label> Hp </label>
                    <input
                        type='number'
                        value={input.hp}
                        name='hp'
                        onChange={handleChange} />
                    {errors.hp && (
                        <p className="error"> {errors.hp}</p>
                    )}
                </div>

                <div className={style.div}>
                    <label> Attack </label>
                    <input
                        type='number'
                        value={input.attack}
                        name='attack'
                        onChange={handleChange} />
                    {errors.attack && (
                        <p className="error"> {errors.attack}</p>
                    )}

                </div>

                <div className={style.div}>
                    <label> Special Attack </label>
                    <input
                        type='number'
                        value={input.special_attack}
                        name='special_attack'
                        onChange={handleChange} />
                    {errors.special_attack && (
                        <p className="error"> {errors.special_attack}</p>
                    )}

                </div>

                <div className={style.div}>
                    <label> Special Defense </label>
                    <input
                        type='number'
                        value={input.special_defense}
                        name='special_defense'
                        onChange={handleChange} />
                    {errors.special_defense && (
                        <p className="error"> {errors.special_defense}</p>
                    )}

                </div>
                <div className={style.div}>
                    <label> Defense </label>
                    <input
                        type='number'
                        value={input.defense}
                        name='defense'
                        onChange={handleChange} />
                    {errors.defense && (
                        <p className="error"> {errors.defense}</p>
                    )}
                </div>
                <div className={style.div}>
                    <label>Speed </label>
                    <input
                        type='number'
                        value={input.speed}
                        name='speed'
                        onChange={handleChange} />
                    {errors.speed && (
                        <p className="error"> {errors.speed}</p>
                    )}
                </div>
                <div className={style.div}>
                    <label>Weight </label>
                    <input
                        type='number'
                        value={input.weight}
                        name='weight'
                        onChange={handleChange} />
                    {errors.weight && (
                        <p className="error"> {errors.weight}</p>
                    )}
                </div>

                <div className={style.div}>
                    <label>Image </label>
                    <input
                        type='text'
                        value={input.img}
                        name='img'
                        onChange={handleChange} />
                    {errors.img && (
                        <p className="error"> {errors.img}</p>
                    )}
                </div>
                Types
                <div className={style.types}>
                    <select onChange={handleTypes} name='type1'>
                        <option value="" selected disabled hidden>Type 1</option>
                        {types.map((e) =>
                            <option value={e} > {e}  </option>)}
                    </select>
                    <select onChange={handleTypes} name='type2'>
                        <option value="" selected disabled hidden>Type 2</option>
                        {types.map((e) =>
                            <option value={e}> {e}  </option>)}
                    </select>
                    {errors.types && (
                        <p className="error"> {errors.types}</p>
                    )}
                </div>
                <button type='submit' onClick={handleOnSubmit} disabled={errors.name || errors.hp || errors.attack || errors.defense || errors.height || errors.weight || errors.speed || errors.img || errors.types || errors.special_attack || errors.special_defense}> Create Pokemon  </button>
            </form>
        </div>




    )
}
