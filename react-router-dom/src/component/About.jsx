import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='about'>
            <h1>About Page</h1>
            <p>This is a about page a good style and awesam app</p>
            <p>and here we are learning react page add link</p>
            <Link to="/">Go to home page</Link>
            <li><Link to="/user/anil">Anil</Link></li>
            <li><Link to="/user/peter">Peter</Link></li>
        </div>
    )
}

export default About
