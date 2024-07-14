import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Pokemones() {
  const [namePokemon, setNamePokemon] = useState('');
  const [error, setError] = useState('');
  const [namesPokemones, setNamesPokemones] = useState([]);
  const navigate = useNavigate();

  const handleViewPokemonDetails = () => {
    if (!namePokemon) {
      setError('¡Tienes que seleccionar un Pokémon!');
    } else {
      setError('');
      navigate(`/pokemons/${namePokemon}`);
    }
  };

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        const pokemonNames = data.results.map((poke) => poke.name);
        setNamesPokemones(pokemonNames);
      } catch (error) {
        console.error('Error: ', error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <main>
      <h1>Selecciona un Pokémon</h1>
      <div className="d-flex justify-content-center p-3">
      <Form.Select onChange={({ target }) => setNamePokemon(target.value)}>
        <option value="">Selecciona un Pokémon</option>
        {namesPokemones.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </Form.Select>
      </div>
      <Button variant="secondary" onClick={handleViewPokemonDetails}>
        Ver Detalles
      </Button>
      {error && <p className="error">{error}</p>}
    </main>
  );
}
