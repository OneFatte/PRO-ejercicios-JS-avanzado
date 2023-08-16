const URL = "https://swapi.dev/api/people/";
const axios = require('axios');

function buscarPelicula(i) {

    axios.get(i)
        .then(({ data }) => {
            console.log(data.title);
        })
}


function buscarPersonaje(nombre) {

    axios.get(URL + nombre + "/")
        .then(function ({ data }) {

            for (const i of data.films) {

                buscarPelicula(i);
            }
            console.log(`El personaje de ${data.name} estuvo en las peliculas: `);
        })
        .catch(function (error) {
            // handle error
            console.log(error.message);
        })
        .finally(function () {
            // always executed
            console.log("");
        });


}

buscarPersonaje("2")