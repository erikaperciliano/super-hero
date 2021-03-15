import React from 'react';
import CharacterItem from './CharacterItem';


const CharacterGrid = (props) =>{
    const {superheroData = []} = props;

    return (
        <div>
            <section className="cards">
            { superheroData.map(superhero =>
                <CharacterItem data={superhero}/>
            )}
            </section>
        </div>
    )
        
        
}

export default CharacterGrid;
