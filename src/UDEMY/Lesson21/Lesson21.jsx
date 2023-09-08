// Прокидывание PROPS в компоненты 
import React from 'react'
import './style.css'

export default function Lesson21() {
  
  const currentDate = new Date().toLocaleDateString()
  const good = 'Macbook'

  return (
    <>
      <div className="cost-item">
        <div className="date">{currentDate}</div>
        <div className="cost-item__desc">
          <h2>{good}</h2>
          <div className="cost-item__price">999$</div>
        </div>
      </div>
    </>
  )
}
