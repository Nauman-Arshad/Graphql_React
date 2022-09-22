import React from 'react'
import { useQuery, gql } from "@apollo/client"
const GET_CHARACTERS = gql`
query {
    characters{
      results{
     	id
        name
        image
      }
    }
}
`
function CharactersList() {
    const { error, loading, data } = useQuery(GET_CHARACTERS);
    console.log({ error, loading, data });
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