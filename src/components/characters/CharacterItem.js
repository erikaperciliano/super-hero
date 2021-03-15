import React, {useState } from 'react';
import {Button, Modal} from 'react-bootstrap';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const CharacterItem = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [favorites, setFavorites] = useState([]);
    

    const {data} = props;

    return (
            <>
                
                <div className="card">
                    <div className="card-inner">
                            <div className="card-front">
                                <img src={data.image.url} alt="super pic" />
                            </div>
                            <div className="card-back">
                                <h1>{data.name}</h1>
                                <ul>
                                    <li>
                                        <strong>Intelligence: {data.powerstats.intelligence}</strong>
                                    </li>
                                    <li>
                                        <strong>Strength: {data.powerstats.strength}</strong>
                                    </li>
                                    <li>
                                        <strong>Speed: {data.powerstats.speed}</strong>
                                    </li>
                                    <li>
                                        <strong>Durability: {data.powerstats.durability}</strong>
                                    </li>
                                    <li>
                                        <strong>Power: {data.powerstats.power}</strong>
                                    </li>
                                    <li>
                                        <strong>Combat: {data.powerstats.combat}</strong>
                                    </li> 
                                   
                                    <FormGroup row>
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name={data.name} onClick={() => setFavorites(data.name)}/>}
                                            label="Favorite"
                                        />                    
                                    </FormGroup>
                                   
                                    <Button variant="primary" onClick={handleShow}>
                                        Show More
                                    </Button>                          
                                </ul>
                            </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose} size='xl'>
                    <Modal.Header closeButton>
                        <Modal.Title>{data.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <ul>
                        <h5>Biography:</h5>
                        <li>
                            <strong>Publisher: {data.biography.publisher}</strong>
                        </li> 
                        <li>
                            <strong>Aliases: {data.biography.aliases}</strong>
                        </li> 
                        <li>
                            <strong>Alignment: {data.biography.alignment}</strong>
                        </li>
                        <hr/>
                        <h5>Appearance:</h5>
                        <li>
                            <strong>Gender: {data.appearance.gender}</strong>
                        </li> 
                        <li>
                            <strong>Race: {data.appearance.race}</strong>
                        </li> 
                        <li>
                            <strong>Height: {data.appearance.height}</strong>
                        </li>
                        <li>
                            <strong>Weight: {data.appearance.weight}</strong>
                        </li>
                        <hr/>
                        <h5>Work:</h5>
                        <li>
                            <strong>Occupation: {data.work.occupation}</strong>
                        </li> 
                        <li>
                            <strong>Base: {data.work.base}</strong>
                        </li> 
                      </ul>    
                    </Modal.Body>
                    <Modal.Footer/>
                </Modal>
            </>
        )
}

export default CharacterItem;
