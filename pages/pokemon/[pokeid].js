import Image from 'next/image';
import React from 'react'
import styles from '../../styles/Pokemon.module.css'

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
    <div className={styles.pokemonContainer}>
        <h1 className={styles.title}>{pokemon.name}</h1>
        <Image 
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width='200'
        height='200'
        alt={pokemon.name}
        />
        <div>
            <h3>Número:</h3>
            <p>#{pokemon.id}</p>
        </div>
        <div>
            <h3>tipo:</h3>
            <di className={styles.typesContainer}>
                {pokemon.types.map((item, index) => {
                    return <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                })}
            </di>
        </div>
        <div className={styles.dataContainer}>
            <div className={styles.dataHeight}>
                <h4>Altura:</h4>
                <p>{pokemon.height * 10} cm</p>
            </div>
            <div className={styles.dataWeight}>
                <h4>peso:</h4>
                <p>{pokemon.weight / 10} kg</p>
            </div>
        </div>
    </div>
  )
}

export default Pokemon