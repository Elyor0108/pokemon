import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonItem from "./components/PokemonItem";
import PokemonAPI from "./components/Search";

function App() {
  const [ pokemonData, setPokemonData ]  = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ offset, setOffset ] = useState(0);
  
  const getAllPokemonData = async() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=649`)
    .then(function (response) {
      setPokemonData([... pokemonData, ...response.data.results]);
    })
    .catch(function (error) {
      console.log(error);
    }).then(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    getAllPokemonData();
  }, [offset])

//   window.onscroll = function() {
//       if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
//           setOffset(offset + 25);
//       }
// };
 
  if(loading) {
    return <div>loading</div>
  }

  return (
    <div>
      <h1 className="title">POKEMONS</h1>
        <div className="search">
          <PokemonAPI/>
        </div>
        <div className="row">
            {pokemonData.map((item) => (
            <PokemonItem key={item.url} pokemon={item}/>
            ))}
        </div>
    
    </div>
  );
}



export default App;
