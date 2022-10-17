import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
      <ul>
        {pokemons.map((pokemon) => {
          return <li key={pokemon.id}>{pokemon.name}</li>
        })}
      </ul>
    </>
  )
}
