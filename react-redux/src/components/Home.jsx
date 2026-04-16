import React from 'react'

function Home() {
    return (
        <div>
            <div className='add-to-cart'>
                <img src="https://th.bing.com/th/id/OIP.pcXcZIkEzJ3TIf-MMNSUGgHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3" />
            </div>
            <h1>Home Component</h1>
            <div className='card-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://th.bing.com/th/id/OIP.3MJE00ychUjPH4poRWmyZQHaFj?w=229&h=180&c=7&r=0&o=7&pid=1.7&rm=3" />
                </div>

                <div className='text-wrapper item'>
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>

                <div className='btn-wrapper item'>
                    <button>Add To Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Home
