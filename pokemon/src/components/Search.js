import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style/style.css"
import { useNavigate } from "react-router";
import PokemonPage from "./PokemonPage";

function PokemonAPI() {
  const [name, setname] = useState("");
  const [Find, setFind] = useState("");
  const [setType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function get_all_Data() {
      let return_ = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
      console.log(return_);
    //   setImg(return_.data.sprites.front_default);
      setType(return_.data.types[0].type.name);
    }

    get_all_Data();
  }, [Find]);

  const Typename = (tour) => {
    setname(tour.target.value);
  };

  const Search_poke = () => {
    if (name !== "") setFind(name);
    setname("");
  };

  return (
    <>
      <div className="back">
        <div className="card">
            <input type="text"className="input" onChange={Typename} value={name}/>
            <button className="bton" onClick={Search_poke}>Search^^^</button>
            <div className="name" onClick={() => navigate(`/${PokemonPage.id}`)}>{Find.toUpperCase()}</div>
        </div>
      </div>
    </>
  );
}

export default PokemonAPI;

