// Прокидывание PROPS в компоненты 
import React from 'react'
import './style.css'

export default function Lesson21({date,good,price}) {

  return (
    <>
      <div className="cost-item">
        <div className="date">{date}</div>
        <div className="cost-item__desc">
          <h2>{good}</h2>
          <div className="cost-item__price">{price}</div>
        </div>
      </div>
    </>
  )
}
