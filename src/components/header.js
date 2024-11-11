import React from 'react'
import Logo2 from '../images/Logo2.svg'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='PrimBack'>
            <article>
                <Link className='LinkLogo' to="/">
                    <img className='Logo' src={Logo2} alt=''/>
                </Link>
                <h1 className='Tert'>Weber <br/> Tax &amp; Accounting</h1>
            </article>

            <div>
                <Link className='Link' id="link" to="/">
                    Home
                </Link>
                <Link className='Link' id="link" to="/contact">
                    Contact Us
                </Link>
            </div>
        </header>
    )
}

export default Header