import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./style/style.css"

const PokemonItem = ({ pokemon: pokemonData }) => {
    const [ pokemon, setPokemon ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();

    const getPokemonData = async () => {
        axios.get(pokemonData.url)
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
    }, [pokemonData]);


    // console.log(pokemon);
    
    if (loading) return;

    return Object.keys(pokemon).length > 0 && (
        
        <div className="all_block"> 
                <div className="vertical"onClick={() => navigate(`/${pokemon.id}`)}>
                    <img
                        width={150}
                        height={150}
                        alt={""}
                        src={pokemon.sprites.other.dream_world.front_default}
                    />
                    <div className="name">
                        {pokemon.name}
                    </div>
                </div>
        </div>    
    )
}

export default PokemonItem;