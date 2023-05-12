// import React, { Component } from "react";
import { toast } from 'react-toastify';
import { useState } from "react";

export default function PokemonForm({onSubmit}) {

    const [pokemonName, setPokemonName] = useState('')


    const handleNameChange = e => {
        setPokemonName(e.currentTarget.value.toLowerCase())
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (pokemonName.trim() === '') {
            return toast.error("Введіть ім'я покемона");
        };

        onSubmit(pokemonName);
        setPokemonName('')
    };

        return (
            <form onSubmit={handleSubmit}>
                <input
                    value={pokemonName}
                    onChange={handleNameChange}
                    type="text"
                    name="pokemonName" />
                
                <button type="submit">Find pokemon</button>
            </form>
        )
};

// export default class PokemonForm extends Component {
//     state = {
//         pokemonName: '',
//     };

//     handleNameChange = e => {
//         this.setState({pokemonName: e.currentTarget.value.toLowerCase()})
//     };

//     handleSubmit = (e) => {
//         e.preventDefault();

//         if (this.state.pokemonName.trim() === '') {
//             return toast.error("Введіть ім'я покемона");
//         };

//         this.props.onSubmit(this.state.pokemonName);
//         this.setState({pokemonName: ''})
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     value={this.state.pokemonName}
//                     onChange={this.handleNameChange}
//                     type="text"
//                     name="pokemonName" />
                
//                 <button type="submit">Find pokemon</button>
//             </form>
//         )
//     }
// };