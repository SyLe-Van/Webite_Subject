import React from 'react'
import { Helmet } from 'react-helmet'

import { Navba, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <Blog />
            <Skills />
        </div>
    )
}

export default Main