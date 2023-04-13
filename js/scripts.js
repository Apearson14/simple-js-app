let pokemonList=[
    {name:'Charizard',height:1.7,type:'Fire'},
    {name:'Jigglypuff',height:0.5,type:'Fairy'},
    {name:'Ditto',height:0.3,type:'normal'},
    {name:'Mewtwo',height:2,type:'psychic'}
]
pokemonList.forEach(pokemon => {
    if (pokemon.height > 1) {
      document.write(`${pokemon.name} (height: ${pokemon.height}) Wow, that's Big!<br>`);
    } else {
      document.write(`${pokemon.name} (height: ${pokemon.height})<br>`);
    }
  });
  