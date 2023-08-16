const URL = "https://openlibrary.org/search/authors.json?q=";


const axios = require('axios');

function buscarLibro(nombre) {
    console.log(`${nombre} escribio: `);

    axios.get(URL + nombre)
        .then(function ({ data }) {
            for (const iterator of data.docs) {
                console.log(iterator.top_work);
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


}

buscarLibro("Gabriel Garcia Marquez")
