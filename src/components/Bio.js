import React from 'react'
import Kyle from '../images/Kyle.jpeg'

function Bio() {
    return (
        <section className='BioSection'>
            <article className='BioArticle'>
                <h2 className='BioName'>Kyle Weber</h2>
                <h3 className='BioTitle'>Meet the Partner</h3>
                <p className='BioBody'>
                    Kyle gained experience under multiple top firms that ranked top 15 in the nation. He specializes in high net-worth, individuals and families, and small businesses. He has served with various local businesses, athletes, executives and self-starters. In addition to offering a wealth of knowledge in tax law, he also is proficient in establishing tax strategies, tax planning, and has a thorough understanding of how to maximize deductions and credits. <br/> <br/> Kyle received his undergraduate degree in Accounting and Finance at The Catholic University of America. His Masters in Science was received at Geroge Mason University. Kyle is a Certified Public Accountant in the District of Columbia.
                </p>
            </article>
            <img className='BioImg' style={styles.img} src={Kyle} alt='Kyle Weber'/>
        </section>
    )
}

export default Bio

const styles ={
    img:{
        borderRadius: '2%'
    },
}