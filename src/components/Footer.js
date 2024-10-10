import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer style={styles.footer}>
            Vienna, VA
            •
            Email: <a className='Link' href='mailto:Kyle.Weber@webertaxaccounting.com'>kyle.weber@webertaxaccounting.com</a>
            &nbsp;•
            Phone Number:<a className='Link'     href='tel://+12013163034'>+1 (201) 316-3034</a>
            <br/><br/>
            <Link className='Link' id="link" to="/privacy-policy">
                Privacy Policy
            </Link>
            <br/><br/>
            © 2024 Weber Tax & Accounting, LLC. All rights reserved
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