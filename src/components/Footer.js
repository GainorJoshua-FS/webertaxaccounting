import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer style={styles.footer}>
            <Link id="link" to="/privacy-policy">
                Privacy Policy
            </Link>
            Lorem
        </footer>
    )
}

export default Footer

const styles ={
    footer:{
        backgroundColor: '#000045',
        padding: "20px",
        color: "white"
    },
}