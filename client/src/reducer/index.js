const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: []

}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            }

        case 'FILTER_BY_TYPES':
            const allPokemons = state.allPokemons
            const statusFiltered = action.payload === 'All' ? allPokemons : allPokemons.filter(el => el.types.includes(action.payload))
            return {
                ...state,
                pokemons: statusFiltered

            }

        case 'POST_POKEMONS':
            return {
                ...state
            }



        case 'FILTER_CREATED':
            const createdFilter = action.payload === 'Created' ? state.allPokemons.filter(el => el.createdInDb) : state.allPokemons.filter(el => !el.createdInDb)
            return {
                ...state,
                pokemons: createdFilter
            }



        case 'ORDER_BY_NAME':
            let sortedArr = action.payload === 'asc' ?
                state.pokemons.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) :

                state.pokemons.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })

            return {
                ...state,
                pokemons: sortedArr
            }

        case 'GET_NAME_POKEMONS':
            return {
                ...state,
                pokemons: action.payload
            }




        case "FILTER_BY_ATTACK":
            const filtered = state.allPokemons.filter(e => e.attack > 50)
            return {
                ...state,
                pokemons: filtered
            }


        case 'ORDER_BY_ATTACK':
            let array = action.payload === 'asc' ?
                state.pokemons.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return 1;
                    }
                    if (b.attack > a.attack) {
                        return -1;
                    }
                    return 0;
                }) :

                state.pokemons.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return -1;
                    }
                    if (b.attack > a.attack) {
                        return 1;
                    }
                    return 0; //no se cambia
                })

            return {
                ...state,
                pokemons: array
            }

        case 'GET_DETAILS':
            return {
                ...state,
                detail: action.payload
            }



        case 'RESET_DETAIL':
            return {
                ...state,
                detail: []
            }
        default: return state;
    }


}



export default rootReducer;