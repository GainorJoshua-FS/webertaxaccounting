import React from 'react'
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={styles.header}>
            <Link id="link" to="/" style={styles.link}>
                <img style={styles.logo} src={Logo} alt=''/>
            </Link>
            <Link id="link" to="/" style={styles.link}>
                Home
            </Link>
            <Link id="link" to="/contact" style={styles.link}>
                Contact Us
            </Link>
        </header>
    )
}

export default Header

const styles ={
    header:{
        backgroundColor: '#000045',
        // padding: '20px 0px',
        color: "white"
    },
    logo:{
        width: '10%',
        height: '10%'
    },
    link:{
        color: "white",
        textDecoration: "none",
        display: "inline",
        textAlign: "left",
        marginRight: '20px'
    }
}