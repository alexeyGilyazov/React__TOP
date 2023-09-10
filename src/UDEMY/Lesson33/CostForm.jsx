import React, { useState } from 'react';
import './style.css'


const CostForm = (props) => {

    const [descInput, setInputDesc] = useState('')
    const [priceInput, setInputPrice] = useState('')
    const [dateInput, setInputDate] = useState('')

    const descChangeHandler = (event) => {
        setInputDesc(event.target.value)
    }

    const priceChangedHandler = (event) => {
        setInputPrice(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const costData = {
            desc: descInput,
            price: priceInput,
            date: new Date(dateInput)
        }
        props.onSaveCostDate(costData)
        setInputDesc('')
        setInputPrice('')
        setInputDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input value={descInput} type='text' onChange={descChangeHandler}/>
                </div>
                <div className="new-cost__control">
                    <label>Sum</label>
                    <input value={priceInput} onChange={priceChangedHandler} type='number' min='0.01' step='0.01' />
                </div>
                <div className="new-cost__control">
                    <label>Date</label>
                    <input value={dateInput} onChange={dateChangeHandler} type='date'/>
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Add</button>
                </div>
            </div>
        </form>
    );
}

export default CostForm;
