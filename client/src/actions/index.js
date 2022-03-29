import axios from "axios";

export function getPokemons(){
    return async function (dispatch){
    var json = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
type: 'GET_POKEMONS',
payload: json.data
    })
}
}

export function getTypes(){
    return async function (dispatch){
        var json = await axios.post("http://localhost:3001/types");
        return dispatch({
            type: 'GET_TYPES',
            payload: json.data
        })   
    }
}


export function postPokemons(payload){
    return async function(dispatch){
        const response = await axios.post("http://localhost:3001/pokemons",payload);
        console.log(response)
        return response;
    }
}



export function getNamePokemons(name){
return async function (dispatch){
    try {
        var json = await axios.get ("http://localhost:3001/pokemons?name=" + name );
        return dispatch({
            type: 'GET_NAME_POKEMONS',
            payload: json.data
        })
    }catch (error){
        console.log(error)
    }
}}

 
export function filterPokemonsByTypes(payload){
return{
    type: 'FILTER_BY_TYPES',
    payload
}

}


export function filterCreated(payload){
return{
    type: 'FILTER_CREATED',
    payload
}}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}



export function attack(payload){
    return{
        type: 'FILTER_BY_ATTACK',
        payload
    }
}


export function orderByAttack(payload){
    return{
        type: 'ORDER_BY_ATTACK',
        payload
    }
}



export function getDetail (id){
    return async function (dispatch){
       try {
           var json = await axios.get("http://localhost:3001/pokemons/" + id);
           return dispatch({
               type: 'GET_DETAILS',
               payload: json.data
           })
        } catch(error){
            console.log(error)
        }
       }
   
}

export function resetDetail(){
    return {
        type: 'RESET_DETAIL'
    }
}