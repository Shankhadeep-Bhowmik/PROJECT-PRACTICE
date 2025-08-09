function findPokemon(){
  let searchPokemon = document.getElementById('searchPokemon').value.toLowerCase();
  let imgPokemon = document.getElementById('imgPokemon');
  searchPokemon.value = "";
  try {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      imgPokemon.src = data.sprites.front_default;
      imgPokemon.style.display = 'block';
      imgPokemon.style.width = '450px';
      imgPokemon.style.height = '450px';
      
    })
  } catch (error) {
      console.log(error)
  }

}