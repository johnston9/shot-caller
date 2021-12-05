import React from 'react'
import { useRedirect } from '../hooks/Redirect'

const Home = () => {
    useRedirect("loggedOut")
    return (
        <div>
            <h2>homio</h2>
        </div>
    )
}

export default Home

