import React from 'react'

const Home = () => {
    return (
        <div className='home-main'>
            <div className='home-details'>
                <h1>Welcome user to Our Recipe App</h1>
                <label htmlFor="tag">Discover, create , and share recipes with ease.</label>
            </div>
            <div className='home-searchbar'>
                <div>
                    <input type="search" name="search" placeholder='search recipe' />
                    <select name="recipe">
                        <option value="breakfast">breakfast</option>
                        <option value="dinner">dinner</option>
                        <option value="lunch">lunch</option>
                    </select>
                </div>
                <div>
                    <button >cart</button>
                </div>
            </div>
            <div className='home-recipe'>

            </div>
        </div>
    )
}

export default Home
