import React, { useState } from 'react';
import './style.css';

export default function State() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('black');
    const [radius, setRadius] = useState(0);
    const [text, setText] = useState('Hello');

    const increment = () => {
        setCount(count + 1);
        randomColor();
        randomBorder();
    };

    const decrement = () => {
        setCount(count - 1);
        randomColor();
        randomBorder();
    };

    const randomColor = () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
        setColor(randomColor);
    };

    const randomBorder = () => {
        const randomBorder = Math.floor(Math.random() * 40);
        setRadius(randomBorder);
    };

    const setRandomText = () => {
        let someText = ['1', '2', '3', '4', '5'];
        const rand = Math.floor(Math.random() * 5);
        setText(someText[rand]);
    };

    return (
        <div>
            <p style={{ color }}>Counter: {count}</p>
            <button
                style={{ borderRadius: `${radius}%`, background: `${color}` }}
                onClick={increment}
            >
                Increment +
            </button>
            <button
                style={{ borderRadius: `${radius}%`, background: `${color}` }}
                onClick={decrement}
            >
                Decrement -
            </button>
            <p>{text}</p>
            <button onClick={setRandomText}>random text</button>
        </div>
    );
}
