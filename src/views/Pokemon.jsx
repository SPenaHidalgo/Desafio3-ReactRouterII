import Button from 'react-bootstrap/Button';

import { useParams, useNavigate } from 'react-router-dom';
import DataPokemon from '../components/DataPokemon';

export default function Pokemon() {
  const { namePokemon } = useParams();
  const navigate = useNavigate();

  const backClick = () => {
    navigate('/pokemons');
  };

  return (
    <main>
      <DataPokemon namePokemon={namePokemon} />
      <Button variant="secondary" onClick={backClick}>Volver</Button>
    </main>
  );
}
