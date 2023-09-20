import React, { useState } from "react";
import '../styles/PokemonCard.css'
const PokemonCard = (props)=>{
    //console.log(props.pokemon.id)
    const [modal,setModal] = useState(false);
    const [pokemonData,setPokemonData] = useState([]);
    const toggleModal = (data)=>{
        setModal(!modal);
    }
    return(<div className="pokemon-card">
        <div className={"card-body " +`${props.pokemon.type}`}>
        <h3 id="pokemon-id">#{props.pokemon.id}</h3>
        <img id="img-pokemon" src={props.pokemon.image} alt=""/>
        <h1 id="pokemon-title">{props.pokemon.name}</h1>
        <p id="pokemon-type">Type: {props.pokemon.type}</p>
        <button id="ddetails-button" onClick={()=>{
            setPokemonData(props.pokemon);
            toggleModal();
        }}>Know more...</button>
        </div>
        {modal &&  <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    <h1>{pokemonData.name}</h1>
                    <button className="close-modal" onClick={toggleModal}>Close</button>
                </div>
            </div>
         </div>}
    </div>)
}

export default PokemonCard;