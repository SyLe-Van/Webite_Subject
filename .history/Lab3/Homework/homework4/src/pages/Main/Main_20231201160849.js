import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing, About, Skills,  Blog,  Projects, Services, Achievement } from '../../components'
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
