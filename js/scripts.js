let pokemonList=[
    {name:'Charizard',height:1.7,type:'Fire'},
    {name:'Jigglypuff',height:0.5,type:'Fairy'},
    {name:'Ditto',height:0.3,type:'normal'},
    {name:'Mewtwo',height:2,type:'psychic'}
]
for(let i=0;i<pokemonList.length; i++) {
    document.write(pokemonList[i].name + '(height:'+ pokemonList[i].height+')')
}