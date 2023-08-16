
const URL = "https://openlibrary.org/search.json?title=";
const axios = require('axios');

function buscarLibro(nombre) {
    console.log(`El libro ${nombre} fue escrito por: `);

    axios.get(URL + nombre)
        .then(function ({ data }) {

            console.log(data.docs[0].author_name);

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

buscarLibro("Harry Potter and the Chamber of Secrets")





