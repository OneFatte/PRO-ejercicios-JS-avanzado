
const axios = require('axios');

const URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';

axios.get(URL)
    .then(function ({ data }) {
        // handle success
        console.log(`El pokemon ${data.name} tiene los tipos: `);

        for (let i of data.types) {

            console.log(i.type.name);
        }

    })
    .catch(function (error) {
        // handle error
        console.log(error.message);
    })
    .finally(function () {
        // always executed
        console.log("Termino de ejecutar la peticion");
    });


