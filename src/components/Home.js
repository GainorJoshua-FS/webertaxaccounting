import React from 'react'
import Kyle from '../images/Kyle.jpeg'
import Bio from './Bio'
import Services from './Services'

function Home() {
    return (
        <section className="Section">
            <Services/>
            <Bio/>
        </section>
    )
}

export default Home

const styles ={
    img:{
        borderRadius: '2%'
    },
}