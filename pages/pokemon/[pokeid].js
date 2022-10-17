import React from 'react'

export const getStaticPaths = async() => {
    
  const maxPokes = 251;

  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokes}`);

  const data = await res.json();

  const paths = data.results.map((pokemon, index) => {
    return {
        params: {
            pokeid: (index + 1).toString()
        }
    }
  })

  return {
    paths,
    fallback: false
  }

}

export const getStaticProps = async(context) => {

    const id = context.params.pokeid;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json();

    return {
        props: {
            pokemon: data
        }
    }

}

const Pokemon = ({ pokemon }) => {
  return (
    <>
        <p>{pokemon.name}</p>
    </>
  )
}

export default Pokemon