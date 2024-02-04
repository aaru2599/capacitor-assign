import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard")
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >

                <input type="text" />
                <input type="text" />
                <button type='submit'> Submit</button>
            </form>
        </div>
    )
}

export default Home