// Разделение компонента на мелкие 
import React from 'react';
import './style.css';

export default function Lesson23(props) {
  return (
    <div>
      <div className="cost-item">
        <div className="date">{props.date.date}</div>
        <div className="cost-item__desc">
          <h2>{props.date.good}</h2>
          <div className="cost-item__price">{props.date.price}</div>
        </div>
      </div>
    </div>
  );
}