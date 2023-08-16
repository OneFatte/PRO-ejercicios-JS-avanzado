const URL = "https://www.theaudiodb.com/api/v1/json/2/search.php?s=";


const axios = require('axios');

function buscarLibro(nombre) {
    console.log(`${nombre} es de genero: `);

    axios.get(URL + nombre)
        .then(function ({ data }) {
            console.log(data.artists[0].strStyle);
            console.log("y sub genero: ");
            console.log(data.artists[0].strGenre);

        })
        .catch(function (error) {
            // handle error
            console.log(error.message);
        })
        .finally(function () {
            // always executed
            console.log("Termino de ejecutar la peticion");
        });


}

buscarLibro("coldplay")