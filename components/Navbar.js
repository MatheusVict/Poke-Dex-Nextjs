import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
        <div>
            <Image src='/images/pokeball.png' width='30' height='30' alt='poke'/>
            <h1>Poke-dex</h1>
        </div>
        <ul>
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