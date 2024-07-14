import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default function DataPokemon({ namePokemon }) {
  const [pokemon, setPokemon] = useState({
    name: '',
    img: '',
    stats: [],
    type: [],
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`);
        if (!response.ok) {
          throw new Error('Error al cargar la página');
        }
        const data = await response.json();
        setPokemon({
          name: data.name,
          img: data.sprites.other.dream_world.front_default,
          stats: data.stats,
          type: data.types,
        });
        setError(null);
      } catch (error) {
        console.error('Error: ', error);
        setError('Error al cargar datos del Pokémon');
      }
    };

    fetchPokemonData();
  }, [namePokemon]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Card style={{ width: '18rem', margin: '0 auto' }}>
      {error ? (
        <Card.Body>
          <Card.Text>{error}</Card.Text>
        </Card.Body>
      ) : (
        <>
          <Card.Img variant="top" src={pokemon.img} alt={pokemon.name} />
          <Card.Body>
            <Card.Title>{capitalizeFirstLetter(pokemon.name)}</Card.Title>
            <Card.Text>
              <ul>
                {pokemon.stats.map((stat, index) => (
                  <li key={index}>
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
                <li>
                  {pokemon.type.map((type, index) => (
                      <Badge key={index} className="mt-2 d-flex justify-content-center bg-secondary">
                        {type.type.name} 
                      </Badge>
                  ))}
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </>
      )}
    </Card>
  );
}
