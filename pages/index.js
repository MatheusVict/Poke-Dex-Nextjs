import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

export async function getStaticProps() {

  const maxPokes = 251;

  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokes}`);

  const data = await res.json();

  data.results.forEach((item, index) => {

    item.id = index + 1;

  })

  return {
    props: {
      pokemons: data.results
    }
  }

}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Poke<span>Dex</span></h1>
        <Image src='/images/pokeball.png' width='50' height='50' alt='poke-dex'/>
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemon) => {
          return <p key={pokemon.id}>{pokemon.name}</p>
        })}
      </div>
    </>
  )
}
