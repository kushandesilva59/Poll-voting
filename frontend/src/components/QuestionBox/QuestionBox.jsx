import React from 'react'
import image from '../../assets/image.jpg'
import styles from './questionbox.css'

const QuestionBox = () => {
    return (
        <div className='q-box'>
            <h1 className='q-title'>Who will win mens T20 world cup?</h1>

            <div className='q-flex-box'>
                <img src={image} className='q-image' alt="image" />

                <div className='team-wrapper'>
                    <p>Pakistan</p>
                </div>

                <div className='team-wrapper'>
                    <p>Pakistan</p>
                </div>

                <div className='team-wrapper'>
                    <p>Pakistan</p>
                </div>

                <div className='team-wrapper'>
                    <p>Pakistan</p>
                </div>

                <div className='team-wrapper'>
                    <p>Pakistan</p>
                </div>

                <div className='team-wrapper'>
                    <p>Pakistan</p>
                </div>
            </div>

            <div className='btn-grp'>
                <button className='q-btn'>Comment</button>
                <button className='q-btn'>Share</button>
            </div>
        </div>
    )
}

export default QuestionBox