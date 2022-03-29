import react from "react";
import style from './Card.module.css'


export default function Card({ name, img, types, id }) {
    const lengths = {
        1: '00',
        2: '0',
        3: ''

    }
   
    return (
        <div className={style.main}>
            <h3>{name.slice(0, 1).toUpperCase() + name.slice(1)}</h3>
            <img src={img} alt='img not found' />
            <div className={style.types}>
                <h5>{types[0].slice(0, 1).toUpperCase() + types[0].slice(1)}</h5>
                {types[1] ? <h5>{types[1].slice(0, 1).toUpperCase() + types[1].slice(1)}</h5> : ''}
            </div>
            {
                id.toString().length < 6 ?
                    <h1>Nº{lengths[id.toString().length] + id}</h1> :
                    ''
            }
        </div>
    );
}