import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
        <Head>
            <link rel='shortcut icon' href='/images/favicon.ico'/>
            <title>Poke-dex</title>
        </Head>
        <Navbar/>
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout