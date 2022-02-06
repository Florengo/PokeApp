const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
const { Pokemon, Types } = require('../db')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
    const apiUrl = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const first20 = apiUrl.data.results
    const apiUrl2 = await axios.get(apiUrl.data.next)
    const last20 = apiUrl2.data.results
    const allLinks = first20.map(e => e.url).concat(last20.map(e => e.url))
    const promises = allLinks.map(e => axios.get(e))
    const allData = Promise.all(promises)
        .then(resp => {
            let final = resp.map(p => {
                return {
                    id: p.data.id,
                    name: p.data.name,
                    height: p.data.height,
                    hp: p.data.stats[0].base_stat,
                    attack: p.data.stats[1].base_stat,
                    defense: p.data.stats[2].base_stat,
                    speed: p.data.stats[5].base_stat,
                    weight: p.data.weight,
                    types: p.data.types.map(e => e.type.name),
                    img: p.data.sprites.other.home.front_default,

                }
            })

            return final
        })

    return allData
}

const getDbInfo = async () => {
    const dbinfo = await Pokemon.findAll({
        include: {
            model: Types,
            attributes: ['name']

        }
    })
    const dbpoke = dbinfo.map(e => {
        return {
            ...e.dataValues,
            types: e.types.map(el => el.name)
        }
    })
    return dbpoke
}


router.get('/pokemons', async (req, res) => {
    const { name } = req.query
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    const allinfo = [...apiInfo, ...dbInfo]
    if (name) {
        const namepokemon = allinfo.filter(e => e.name === name)
        return res.json(namepokemon)
    }
    return res.json(allinfo)
})

router.post('/pokemons', async (req, res) => {
    const { name,
        attack,
        defense,
        speed,
        height,
        weight,
        hp,
        img,
        types }
        = req.body
    Pokemon.create({
        name,
        attack,
        defense,
        speed,
        height,
        weight,
        hp,
        img
    })
        .then(pokemon => {
            pokemon.addTypes(types)
                .then(() => {
                    return res.send('ok')
                })
        })

})

router.post('/types', async (req, res) => {
    const apitypes = await axios.get('https://pokeapi.co/api/v2/type')
    const namesp = apitypes.data.results.map(e => {
        return { name: e.name }
    })
    Types.findAll()
        .then(resp => {
            let resp2 = resp.map( e => e.name)
            if (resp.length !== 0) {
                return res.json(resp2)
            }
            else {
                Types.bulkCreate(namesp)
                    .then(resp => {
                        return res.json(resp)
                    })
            }
        })
})

router.get('/pokemons/:id', async (req, res) => {
    const { id } = req.params
    if (id.toString().length < 6) {
        const pokeid = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokedetails = {
            id: pokeid.data.id,
            name: pokeid.data.name,
            height: pokeid.data.height,
            hp: pokeid.data.stats[0].base_stat,
            attack: pokeid.data.stats[1].base_stat,
            defense: pokeid.data.stats[2].base_stat,
            speed: pokeid.data.stats[5].base_stat,
            weight: pokeid.data.weight,
            types: pokeid.data.types.map(e => e.type.name),
            img: pokeid.data.sprites.other.home.front_default,
        }
        return res.json(pokedetails)
    }
    else {
        Pokemon.findOne({
            where: {
                id: id
            },
            include: {
                model: Types,
                attributes: ['name']
            }
        })
            .then(resp => {
                const resp2 = {
                    ...resp.dataValues,
                    types: resp.types.map(e => e.name)
                }
                return res.json(resp2)
            })
    }
})

module.exports = router;
