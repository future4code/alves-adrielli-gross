import axios from "axios";
import { useEffect, useState } from "react";

function PokeCard() {
  const [pokemonNome, setPokemonNome] = useState('')
  const [pokemonLista, setPokemonLista] = useState([])
  

  // Passo 4c
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
       setPokemonLista({ pokemon: res.data });
      })
     .catch((erro) => {
           console.log(erro);
     });
  })

  // Passo 4c
  const mudarPokemonNome = (event) => {
    setPokemonNome(event.target.value)
  }
 

  return (
    <figure>
      {/* Passo 4d */}
      <strong>Nome do Pokémon</strong>
      {/* Passo 4d */}
      <p>Peso: 1000 Kg</p>
      {/* Passo 4d */}
      <p>Tipo: Fire</p>
      {/* Passo 4d */}
      {true && (
        <img src={""} alt={"Nome do Pokémon"} />
      )}
    </figure>
  );
};

export default PokeCard;
