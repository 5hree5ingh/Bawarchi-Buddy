import React from 'react'
import Nav_bar from '../Nav_bar/Nav_bar'
import Category from '../Category/Category'
import Hero from '../Hero/Hero'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
const Home = () => {
    return (
        <div>
            <Nav_bar />
            <Hero />
            <Category/>
            <Values/>
            <Products/>
            <Discount/>
            <Process/>
        </div>
    )
}

export default Home