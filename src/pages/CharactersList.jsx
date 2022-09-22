import React from 'react'
import { useCharacters } from '../hooks/useCharacters';


function CharactersList() {
    const { error, loading, data } = useCharacters();
    if (loading) return <div>Loading.....</div>
    if (error) return <div>Something Went wrong</div>
    return (
        <div className='CharacterList'>
            { data.characters.results.map((character) => {
                return (
                    <div key={ character.id }>
                        <img src={ character.image } alt='img'></img>
                        <br />
                        <h3>{ character.name }</h3>
                    </div>
                )
            }) }
        </div>
    )
}

export default CharactersList