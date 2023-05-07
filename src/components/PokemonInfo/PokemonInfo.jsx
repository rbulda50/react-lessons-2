import { Component } from "react";
import PokemonFallbackView from "./PokemonFallbackView";
import PokemonDataView from "./PokemonDataView";
import PokemonPendingView from "./PokemonPendingView";
import pokemonAPI from '../../services/pokemonAPI';

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: 'idle',
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonName !== this.props.pokemonName) {

            this.setState({ status: 'pending'})
            
            pokemonAPI.fetchPokemon(this.props.pokemonName)
                .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
                .catch(error => this.setState({error, status: 'rejected'}))
        };
    };

    render() {
        const { pokemon, error, status } = this.state;
        const { pokemonName } = this.props;

        if (status === 'idle') {
            return <p>Введіть ім'я покемону</p>
        }

        if (status === 'pending') {
            return <PokemonPendingView pokemonName={pokemonName}/>
        }

        if (status === 'rejected') {
            return <PokemonFallbackView message={error.message} />
        }

        if (status === 'resolved') {
            return <PokemonDataView pokemon={pokemon} />
        };
    };
};