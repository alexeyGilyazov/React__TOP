import React, { useState } from 'react';
import './HomeWork.css';

const HomeWork0409 = ({ answer }) => {
    const [text, setText] = useState('');
    const [isShaking, setIsShaking] = useState(false);

    const randomIndex = () => {
        const randomTextIndex = Math.floor(Math.random() * answer.length);
        setIsShaking(true);
        setTimeout(() => {
            setText('')
            setIsShaking(false);
            setText(answer[randomTextIndex]);
        }, 3000);
    }

    return (
        <div>
            <div className="wrapper">
                <div className="ball-container">
                    <div onClick={randomIndex} className={`ball ${isShaking ? 'shake' : ''}`}>
                        <span className='answer'>{isShaking ? 'Ожидайте...' : text}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeWork0409;