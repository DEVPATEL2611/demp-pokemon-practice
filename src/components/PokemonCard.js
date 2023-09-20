import React, { useState } from "react";
import '../styles/PokemonCard.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    let statsData = props.pokemon.stats;
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    
    >
      
      <Modal.Body>
      <div className={"pokemon-body-div "+ props.pokemon.type}>
                <div className="clas1">
                    <img src={props.pokemon.image} alt={props.pokemon.name} className="pokemon-img-modal" />
                    <h2>{props.pokemon.name.toUpperCase()}</h2>
                </div>
                <div className="clas2">
                        <div className="dimensions">
                            <div style={{marginBottom:"20px"}}><b>Weight: </b>{props.pokemon.weight}</div>
                            <div><b>Height: </b>{props.pokemon.height}</div>
                        </div>
                        <div className="stats">
                        {statsData.map((element,index)=><div id="detailst"><b>Stat{index+1}: </b>{` ${element.stat.name}`}</div>)}
                        </div>
                        <div className="bs">
                        {statsData.map((element,index)=><div id="detailst"><b>Bs{index+1}: </b>{` ${element.base_stat}`}</div>)}
                        </div>
                </div>
      </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button className="close-modal" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const PokemonCard = (props)=>{
    //console.log(props.pokemon.id)
    const [modalShow, setModalShow] = React.useState(false);

  
    return(<div className="pokemon-card">
        <div className={"card-body " +`${props.pokemon.type}`}>
        <h3 id="pokemon-id">#{props.pokemon.id}</h3>
        <img id="img-pokemon" src={props.pokemon.image} alt=""/>
        <h1 id="pokemon-title">{props.pokemon.name}</h1>
        <p id="pokemon-type">Type: {props.pokemon.type}</p>
        <button id="ddetails-button" onClick={() => setModalShow(true)}>Know more...</button>
        </div>
        <MyVerticallyCenteredModal
        pokemon={props.pokemon}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>)
}

export default PokemonCard;