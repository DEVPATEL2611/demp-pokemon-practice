import React,{useEffect,useState} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

function App() {
  const [url,setUrl] = useState("https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1");
  const [pokemonList , setPokemonList ] = useState([]);
  
  const getPokemonApi =async ()=>{
    let response = await fetch(url);
    let data = await response.json();
    let pokemonData = data[0];
    setUrl(pokemonData.next);
    
    async function getallPokemonDetails(pokemons){
      let pokemonDataList = [];
      for (let pokemon of pokemons) {
        let response = await fetch(pokemon.url);
        let data = (await response.json())[0];
        pokemonDataList.push(data);
      }
       setPokemonList([...pokemonList,...pokemonDataList]);
    }
    await getallPokemonDetails(pokemonData.results)
  } 
  useEffect(()=>{
    getPokemonApi();
  },[])
  console.log(pokemonList)
  return (
    <div className="App">
      <h1 id="main-heading">Pokemon Kingdom</h1>
      <div className='main-body'>
      {
        pokemonList.map((pokemon)=><PokemonCard pokemon={pokemon} />)
      }
      </div>
      <div className='btn-div'>
      <button className='loadMore' onClick={getPokemonApi}>Load More</button>
      </div>
    </div>
  );
}

export default App;
