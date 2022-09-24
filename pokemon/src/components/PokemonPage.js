import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./style/style.css"

const PokemonPage = () => {
    const { id } = useParams();
    const [ pokemon, setPokemon ] = useState({});
    const [ loading, setLoading ] = useState(true);

    const getPokemonData = async () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(function (response) {
            // handle success
            setPokemon(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            setLoading(false);
        });
    }


    useEffect(() => {
        getPokemonData();
    }, []);

    // console.log(pokemon);
    // console.log(pokemon.id)
    // console.log(pokemon.stats)
    if (loading) return;

    return Object.keys(pokemon).length > 0 && (
        <div className="poke_page">
            <a href="/">
                <div className="pokemon_img">
                    <img
                        width={400}
                        height={400}
                        alt={""}
                        src={pokemon.sprites.other.dream_world.front_default}
                    />
                </div>
            </a>   
            <div className="pokemon_name">
                <h1>{pokemon.name}</h1>
                <h1 className="id">id: #{pokemon.id}</h1>
            </div>
            <div className="block">
            <h2>Abilities:</h2>
                {pokemon.abilities.map((item) => (
                    <div className="ability">{item.ability.name}</div>    
                ))}
            </div>
                <h2 className="character">Game characteristic:</h2>
            <div className="poke_info">
                {pokemon.stats.map((item)=>(
                    <h3 className="info">{item.stat.name}:{item.base_stat}</h3>
                ))}
            </div>
        </div>    
    )
}

export default PokemonPage;