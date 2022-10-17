import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/NavBar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Image src='/images/pokeball.png' width='30' height='30' alt='poke'/>
            <h1>Poke-dex</h1>
        </div>
        <ul className={styles.linkItems}>
            <li>
                <Link href='/'><a>home</a></Link>
            </li>
            <li>
                <Link href='/about'><a>Sobre</a></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar