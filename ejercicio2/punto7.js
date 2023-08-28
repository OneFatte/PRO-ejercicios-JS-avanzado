const URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
const axios = require('axios');

const arregloPokemones = [];
axios.get(URL)
    .then(function ({ data }) {

        for (const i of data.results) {
            console.log(`El personaje es ${i.name} `);
            buscarPokemon(i.name);
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error.message);
    })

function buscarPokemon(nombre) {

    axios.get("https://pokeapi.co/api/v2/pokemon/" + nombre)
        .then(function ({ data }) {
            console.log(data.id);
            arregloPokemones[data.id - 1] = {
                id: data.id,
                name: nombre,
                tamaño: data.height,
                peso: data.weight
            }
            console.log(arregloPokemones);
        })
        .catch(function (error) {
            // handle error
            console.log(error.message);
        })
}

