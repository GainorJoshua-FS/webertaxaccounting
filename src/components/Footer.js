import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='PrimBack Footer'>
            Northern Virginia
            •
            Email: <a className='Link' href='mailto:Kyle.Weber@webertaxaccounting.com'>kyle.weber@webertaxaccounting.com</a>
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

}