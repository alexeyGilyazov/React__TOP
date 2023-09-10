import React from 'react';
import './style.css'
import CostForm from './CostForm';

const NewCost = (props) => {

    const saveCostDataHandler = (inputCostData) => {
        {
            const costData = {
                ...inputCostData,
                id: Math.random().toString()
            }
                
            props.onAddCost(costData)
        }
    }

    return (
        <div className='new-cost'>
            <CostForm onSaveCostDate = {saveCostDataHandler} />
        </div>
    );
}

export default NewCost;
