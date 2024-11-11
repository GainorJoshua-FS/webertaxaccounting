import React from 'react'
// import Logo from '../images/Logo.png'
import Logo2 from '../images/Logo2.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='PrimBack'>
            <article>
                <Link className='LinkLogo' to="/" style={styles.link}>
                    <img className='Logo' src={Logo2} alt=''/>
                </Link>
                <h1 className='Tert'>Weber <br/> Tax &amp; Accounting</h1>
            </article>

            <div>
                <Link className='Link' id="link" to="/" style={styles.link}>
                    Home
                </Link>
                <Link className='Link' id="link" to="/contact" style={styles.link}>
                    Contact Us
                </Link>
            </div>
        </header>
    )
}

export default Header

const styles ={
    // header:{
    //     color: "#9abbd0"
    // },
    // link:{
    //     color: "white",
    //     textDecoration: "none",
    //     display: "inline",
    //     textAlign: "left",
    //     marginRight: '20px'
    // },
    // div:{
    //     color:'#C3AD54'
    // }
}