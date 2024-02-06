import React from 'react'
import styles from './season.css'

const Season = () => {
    return (
        <div className='season'>
            <h1 className='q-title'>Which Season you like the most?</h1>

            <div className='q-flex-box'>
                <div className='team-wrapper'>
                    <p>Winter</p>
                </div>

                <div className='team-wrapper'>
                    <p>Summer</p>
                </div>
            </div>

            <div className='btn-grp'>
                <button className='q-btn'>Comment</button>
                <button className='q-btn'>Share</button>
            </div>
        </div>
    )
}

export default Season