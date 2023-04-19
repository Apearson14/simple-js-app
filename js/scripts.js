let pokemonList=[
    {name:'Charizard',height:1.7,type:'Fire'},
    {name:'Jigglypuff',height:0.5,type:'Fairy'},
    {name:'Ditto',height:0.3,type:'normal'},
    {name:'Mewtwo',height:2,type:'psychic'}
];

let pokemonRepository = (function () {
    let pokemonList = [];
    function add(pokemon) {
        pokemonList.push(pokemon);
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
        button.addEventListener("click", function() {
            showDetails(pokemon);
        })
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
