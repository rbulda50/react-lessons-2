import { ImSpinner } from 'react-icons/im';
import '../PokemonInfo/IconSpin.css';
import pendingImage from '../../answer.png';
import PokemonDataView from './PokemonDataView';


export default function PokemonPendingView({ pokemonName }) {
    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    front_default: pendingImage,
                },
            },
        },
        stats: [],
    };

    return (
        <div role="alert">
            <div>
                <ImSpinner size="32" className="icon-spin" />
                Loading...
            </div>
            <PokemonDataView pokemon={pokemon} />
        </div>
    );
};