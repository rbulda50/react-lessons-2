// import Reader from './Reader/Reader';
// import publications from '../publications.json';

import { useState } from 'react';
// import React, { Component } from 'react';
import PokemonForm from './PokemonInfo/PokemonForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonInfo from './PokemonInfo/PokemonInfo';

export function App() {

  const [pokemonName, setPokemonName] = useState('')




    return (
      <div>
        <PokemonForm onSubmit={setPokemonName} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer autoClose={2000} />


        {/* <Reader items={publications} /> */}
      </div>
    );
};


// export class App extends Component {
//   state = {
//     pokemonName: '',
//   };

//   handleFormSubmit = (pokemonName) => {
//     this.setState({pokemonName})
//   };


//   render() {
//     return (
//       <div>
//         <PokemonForm onSubmit={this.handleFormSubmit} />
//         <PokemonInfo pokemonName={this.state.pokemonName} />
//         <ToastContainer autoClose={2000} />


//         {/* <Reader items={publications} /> */}
//       </div>
//     );
//   };
// };