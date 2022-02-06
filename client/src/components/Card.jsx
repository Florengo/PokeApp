import react from "react";

export default function Card ({ name, img, types, id}) {
    return (
        <div>
            <h3>{name}</h3>
            <h5>{types}</h5>
            <img src={img} alt='img not found' />
             <h1> {id}</h1>
        </div>
    );
}