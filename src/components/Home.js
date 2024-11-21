import React from 'react'
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