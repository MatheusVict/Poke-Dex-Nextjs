import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

const Card = ({ name, poke }) => {
  return (
    <div className={styles.card}>
        <Image 
        src={`https://cdn.traction.one/pokedex/pokemon/${poke}.png`}
        width='120' height='120'
        alt={name}
        />
        <p className={styles.id}>#{poke}</p>
        <h3 className={styles.title}>{name}</h3>
        <Link href={`/pokemon/${poke}`}>
          <a className={styles.btn}>Detalhes</a>
        </Link>
    </div>
  )
}

export default Card