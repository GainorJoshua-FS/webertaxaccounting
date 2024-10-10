import React from 'react'
// import Logo from '../images/Logo.png'
import Logo2 from '../images/Logo2.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='PrimBack' style={styles.header}>
            
            <Link className='LinkLogo' to="/" style={styles.link}>
                <img className='Logo' src={Logo2} alt=''/>
            </Link>
            <Link className='Link' id="link" to="/" style={styles.link}>
                Home
            </Link>
            <Link className='Link' id="link" to="/contact" style={styles.link}>
                Contact Us
            </Link>
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