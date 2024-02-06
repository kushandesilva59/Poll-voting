import React from 'react'
import styles from './questionbar.css'

const QuestionBar = () => {
    return (
        <div className='q-div'>
            <h1>Have a question you want to ask everyone?</h1>

            <div className='q-wrapper'>
                <input type="text" placeholder='Eg: How do you come to work?' className='q-input'/>

                <button className='q-button'>Ask</button>
            </div>


        </div>
    )
}

export default QuestionBar