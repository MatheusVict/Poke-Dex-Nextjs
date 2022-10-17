import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
        <h1>Sobre o projeto</h1>
        <p>Um projeto feito em Next 
            consuindo o a Poké-API para 
            meu aprendizado em NextJs
        </p>
        <Image 
        src='/images/charizard.png' 
        width='300' height='300' 
        alt='pokemon'/>
    </div>
  )
}

export default About