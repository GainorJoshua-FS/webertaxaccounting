import React from 'react'

function Contact() {
    return (
        <section className='ContactSection'>
            <p className='ContactBody'>
                Prospective clients please email kyle.<a href='mailto:Kyle.Weber@webertaxaccounting.com'>weber@webertaxaccounting.com</a> describing the nature of your inquiry.
                
                If further documents are required to understand the complexity and scope of your request, we will provide you a secure link to our portal to upload necessary documentation 
                
                If an introductory meeting is requested, please indicate so in your inquiry.
                
                Weber Tax &amp; Accounting does not currently maintain an office-front location, but in-person meetings can be arranged upon request.
            </p>

            <form className='ContactForm'>
                <label for='Name'>Name:</label>
                <input type='text' name='Name' placeholder='First and Last Name'/>

                <label for='Email'>Email</label>
                <input type='email' name='Email' placeholder='example@example.com'/>

                <label for='Inquiry'>Inquiry:</label>
                <select name='Inquiry'>
                    <option value='client'>Prospective Client</option>
                    <option value='meeting'>Meeting Request</option>
                    <option value='other'>Other</option>
                </select>

                <label for='Message'>Message:</label>
                <input type='text' name='Message' placeholder='Type Here'/>
            </form>
        </section>
    )
}

export default Contact

const styles ={
    example:{

    },
}