import React from 'react'
import Header from './components/header/Header'
import Slider from './components/slider/Slider'
import Products from './components/products/Products'
import NewsLetter from './components/newsLetter/NewsLetter'
import Footer from './components/footer/Footer'

const App = () => {
    return (
        <>
            <Header />
            <Slider />
            <Products />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default App