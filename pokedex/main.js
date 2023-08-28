const URL = "data-pokedex.json";

const arregloPokemones = [];
let contador = 0;
let tipoPokemon, buscarPokemon;

const btnEnviar = document.querySelector(".btnEnviar");
const buscarInput = document.querySelector("#buscador-pokemon");

axios.get(URL)
    .then(function ({ data }) {// 207 primera gen
        for (let index = 0; index < 315; index++) {

            if (data[index].id != data[index + 1].id) {
                arregloPokemones[contador] = {
                    id: data[index].id,
                    name: data[index].name,
                    altura: data[index].height,
                    peso: data[index].weight,
                    tipo: data[index].type,
                    habilidades: data[index].abilities,
                    imagen: data[index].ThumbnailImage,
                }
                contador = contador + 1;
            }
        }

    })
    .catch(function (error) {
        console.log(error.message);
    })
    .finally(function () {
        crearTarjetas();
    });


function crearTarjetas(listaPokemones = arregloPokemones) {
    buscarInput.value = "";
    let contenedor = document.querySelector('.tarjetas');
    contenedor.innerHTML = '';

    for (let pokemon of listaPokemones) {

        let card = document.createElement('div');
        card.classList.add('card');

        tiposPokemon(pokemon);
        colorearTipos(card, pokemon);

        card.innerHTML = `
            <div class="card-body">
                <img class="img-fluid" src="${pokemon.imagen}"></img>
                <h5 class="card-title">${pokemon.id} - ${pokemon.name}</h5>
                ${tipoPokemon}
                
                <button type="button" class="btn btn-primary">
                    Ver detalles
                </button>
            </div>
        `;
        card.querySelector('button').addEventListener('click', () => mostrarDetallesPokemon(pokemon.id));
        contenedor.appendChild(card);
    }
}

btnEnviar.addEventListener('click', () => {
    let filteredList = arregloPokemones.filter(p => p.name.toLowerCase() == (buscarInput.value.toLowerCase()));
    console.log(filteredList);
    crearTarjetas(filteredList);

});




function mostrarDetallesPokemon(id) {

    let pokemon = arregloPokemones.find(p => p.id === id);
    let modal = document.getElementById('modal-pokemon');

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${pokemon.name}</h5>
                </div>
                <div class="modal-body">
                    <p>Tipo: ${tipoPokemon}</p>
                    <p>Altura: ${pokemon.altura} pulgadas</p>
                    <p>Peso: ${pokemon.peso} kg</p>
                    <p>Habilidades: ${pokemon.habilidades}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    `;

    // Bootstrap 5
    var myModal = new bootstrap.Modal(document.getElementById('modal-pokemon'), {});
    myModal.show();

}

function tiposPokemon(pokemon) {
    if (pokemon.tipo[1] == undefined) {
        tipoPokemon = `<h6 class="card-subtitle mb-2">${pokemon.tipo[0]}</h6>`;
    } else {
        tipoPokemon = `<h6 class="card-subtitle mb-2">${pokemon.tipo[0]}, ${pokemon.tipo[1]}</h6>`;
    }
}
function colorearTipos(card, pokemon) {
    switch (pokemon.tipo[0]) {
        case "grass":
            card.classList.add('hierva')
            break;
        case "poison":
            card.classList.add('veneno')
            break;
        case "fire":
            card.classList.add('fuego')
            break;
        case "flying":
            card.classList.add('volador')
            break;
        case "water":
            card.classList.add('agua')
            break;
        case "bug":
            card.classList.add('bicho')
            break;
        case "normal":
            card.classList.add('normal')
            break;
        case "electric":
            card.classList.add('electrico')
            break;
        case "ground":
            card.classList.add('tierra')
            break;
        case "fairy":
            card.classList.add('hada')
            break;
        case "fighting":
            card.classList.add('pelea')
            break;
        case "psychic":
            card.classList.add('mentalista')
            break;
        case "rock":
            card.classList.add('roca')
            break;
        case "steel":
            card.classList.add('metal')
            break;
        case "ice":
            card.classList.add('hielo')
            break;
        case "ghost":
            card.classList.add('fantasma')
            break;
        case "dark":
            card.classList.add('fantasma')
            break;
        default:
            card.classList.add('dragon')
            break;
    }
}