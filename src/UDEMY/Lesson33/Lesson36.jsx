// введение в состояния  
import React, {useState} from 'react';
import './style.css';

export default function Lesson36(props) {
  const [desc, setDesc] = useState(props.date.good)
  
  const changeDescriptionHandler = () => {
    setDesc('new value ')
    console.log(desc)
  }


  return (
    <div>
      <div className="cost-item">
        <div className="date">{props.date.date}</div>
        <div className="cost-item__desc">
          <h2>{desc}</h2>
          <div className="cost-item__price">{props.date.price} $</div>
        </div>
        <button onClick={changeDescriptionHandler}>Change description</button>
      </div>
    </div>
  );
}