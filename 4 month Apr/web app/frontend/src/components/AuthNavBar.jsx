import React from 'react'

const AuthNavBar = () => {
    return (
        <div className='d-flex bg-light '>
            <div className='mx-5'>
                <h3>logo</h3>
            </div>
            <div className='mx-5'>
                <h3><a href="/dashboard">Dashboard</a></h3>
            </div>
             <div className='mx-5'>
                <h2><a href="/Item">items</a></h2>
            </div>

        </div>
    )
}

export default AuthNavBar

