import React, { Component } from "react";
import { toast } from 'react-toastify';

export default class PokemonForm extends Component {
    state = {
        pokemonName: '',
    };

    handleNameChange = e => {
        this.setState({pokemonName: e.currentTarget.value.toLowerCase()})
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.pokemonName.trim() === '') {
            return toast.error("Введіть ім'я покемона");
        };

        this.props.onSubmit(this.state.pokemonName);
        this.setState({pokemonName: ''})
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.pokemonName}
                    onChange={this.handleNameChange}
                    type="text"
                    name="pokemonName" />
                
                <button type="submit">Find pokemon</button>
            </form>
        )
    }
};