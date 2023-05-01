let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
          ) {
            pokemonList.push(pokemon);
          } else {
            console.log("pokemon is not correct");
          }
    }
    function getAll() {
        return pokemonList;
    }
    function showDetails(pokemon) {
        console.log(pokemon)
    }
    function showModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.add('is-visible');
      }
      
      document.querySelector('#show-modal').addEventListener('click', () => {
        showModal();
      });
