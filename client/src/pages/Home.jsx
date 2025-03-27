import React from 'react'
import Hero from '../features/home/Hero'
import Menu from '../features/home/Menu'
import UseTitle from '../Hooks/UseTitle'

const Home = ({handleAddToCart}) => {
  UseTitle("Welcome to Eggys place")
  return (
    <>
    <main>
      <Hero/>
      {/* <Menu handleAddToCart={handleAddToCart}/> */}
      <Menu/>
    </main>
    </>
  )
  
}

export default Home