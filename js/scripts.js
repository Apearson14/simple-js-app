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
    return {
        add: add,
        getAll: getAll
    };
})();

pokemonList.forEach(function(pokemon) {
    pokemonRepository.add(pokemon);
});

pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height > 1) {
        document.write(`${pokemon.name} (height: ${pokemon.height}) Wow, that's Big!<br>`);
    } else {
        document.write(`${pokemon.name} (height: ${pokemon.height})<br>`);
    }
});