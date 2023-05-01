let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');

    function add(pokemon) {
        return pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    function showDetails(pokemon) {
        console.log(pokemon)
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        //Adding event listener to each list item
        button.addEventListener("click", function () {
            showDetails(pokemon);
        })
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });

        function showModal(pokemon) {
            pokemonRepository.loadDetails(pokemon).then(function () {

                let modalTitle = document.querySelector('.modal-title');
                modalTitle.innerText = pokemon.name;

                let imageContainer = document.querySelector('.image-container');

                let pokemonImage = document.createElement('img');

                pokemonImage.src = pokemon.imageUrl;

                pokemonImage.classList.add("pokemon-image");

                imageContainer.innerHTML = '';

                imageContainer.append(pokemonImage);

                let pokemonHeight = document.querySelector(".height");

                pokemonHeight.innerText = "Height: " + pokemon.height;

                let modal = document.querySelector(".modal");

                modal.classList.add("modal-is-visible");

                modal.classList.remove("modal");

                let buttonContainer = document.querySelector("#button-container");

                let modalCloseButton = document.createElement("button");

                modalCloseButton.classList.add("btn");

                modalCloseButton.classList.add("modal-close");
                modalCloseButton.innerText = "x";
                buttonContainer.innerHTML = "";

                buttonContainer.append(modalCloseButton);

                modalCloseButton.addEventListener("click", function () {
                    closeModal();
                });
            });
        })
    }

    function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');

        if (dialogPromiseReject) {
            dialogPromiseReject();
            dialogPromiseReject = null;
        }
    }

    


        modalContainer.addEventListener('click', (e) => {
            // Since this is also triggered when clicking INSIDE the modal
            // We only want to close if the user clicks directly on the overlay
            let target = e.target;
            if (target === modalContainer) {
                hideModal();
            }
        });

        document.querySelector('#show-modal').addEventListener('click', () => {
            showModal();

            function showDetails(pokemon) {
                pokemonRepository.loadDetails(pokemon).then(function () {
                    console.log(pokemon);
                });
            }
            return {
                add: add,
                getAll: getAll,
                addListItem: addListItem,
                loadList: loadList,
                loadDetails: loadDetails,
                showDetails: showDetails
            };
        })();

        pokemonRepository.loadList().then(function () {
            pokemonRepository.getAll().forEach(function (pokemon) {
                pokemonRepository.addListItem(pokemon);
            });
        });
    });