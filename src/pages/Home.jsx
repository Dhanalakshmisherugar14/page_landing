import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection' 
import Cards from '../components/Cards'
import Mainbody from '../components/Mainbody'
import Endtoend from '../components/Endtoend'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
           <Navbar/>
           <Herosection/>
           <Cards/>
           <Mainbody/>
           <Endtoend/>
           <Footer/>
        </div>
    )
}

export default Home