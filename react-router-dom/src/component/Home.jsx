import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const navToPage = (url) => {
        navigate(url)    // two type navigate function
    }
    return (
        <div className='home'>
        <h1>Home Page</h1>
        <p>This is a home page a good style and awesam app</p>
        <p>and here we are learning react page add link</p>
        <Link to="about">Go to about page</Link>
        <br /> <br />
        <button onClick={() => navigate('/about')}>Go to About page</button>
        <br /> <br />
        <button onClick={() => navigate('/filter')}>Go to Filter page</button>
        <br /> <br />
        <button onClick={() => navToPage('/filter')}>Go to Filter page</button>
        <br /> <br />
        <button onClick={() => navToPage('/about')}>Go to About page</button>
        </div>
    )
}

export default Home
