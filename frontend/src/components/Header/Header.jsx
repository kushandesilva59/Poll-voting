import React from 'react'
import styles from './header.css'
import image from '../../assets/unnamed.png'

const Header = () => {
    return (
        <div className='header'>
       
            <img src={image} alt="" />

            <div className='h-btn-group'>
                <button className='h-login-btn'>Login</button>

                <button className='h-reg-btn'>Register</button>
            </div>
        </div>
    )
}

export default Header