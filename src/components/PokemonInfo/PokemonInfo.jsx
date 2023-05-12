// import { Component } from "react";
import PokemonFallbackView from "./PokemonFallbackView";
import PokemonDataView from "./PokemonDataView";
import PokemonPendingView from "./PokemonPendingView";
import pokemonAPI from '../../services/pokemonAPI';
import { useState, useEffect } from "react";

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: ' resolved',
    REJECTED: 'rejected',
};

export default function PokemonInfo({pokemonName}) {

    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

    useEffect(() => {

        if (!pokemonName) {
            return;
        }
        setStatus(Status.PENDING);

        pokemonAPI.fetchPokemon(pokemonName)
            .then(pokemon => {
                setPokemon(pokemon);
                setStatus(Status.RESOLVED)})
            .catch(error => {
                setError(error)
                setStatus(Status.REJECTED)
            })
    }, [pokemonName])

        if (status === Status.IDLE) {
            return <p>Введіть ім'я покемону</p>
        }

        if (status === Status.PENDING) {
            return <PokemonPendingView pokemonName={pokemonName}/>
        }

        if (status === Status.REJECTED) {
            return <PokemonFallbackView message={error.message} />
        }

        if (status === Status.RESOLVED) {
            return <PokemonDataView pokemon={pokemon} />
        };

};

// export default class PokemonInfo extends Component {
//     state = {
//         pokemon: null,
//         error: null,
//         status: 'idle',
//     };

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.pokemonName !== this.props.pokemonName) {

//             this.setState({ status: 'pending'})
            
//             pokemonAPI.fetchPokemon(this.props.pokemonName)
//                 .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
//                 .catch(error => this.setState({error, status: 'rejected'}))
//         };
//     };

//     render() {
//         const { pokemon, error, status } = this.state;
//         const { pokemonName } = this.props;

//         if (status === 'idle') {
//             return <p>Введіть ім'я покемону</p>
//         }

//         if (status === 'pending') {
//             return <PokemonPendingView pokemonName={pokemonName}/>
//         }

//         if (status === 'rejected') {
//             return <PokemonFallbackView message={error.message} />
//         }

//         if (status === 'resolved') {
//             return <PokemonDataView pokemon={pokemon} />
//         };
//     };
// };