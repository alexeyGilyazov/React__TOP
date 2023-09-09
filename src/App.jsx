import "../src/style/index.css";
import React from 'react';
import Cost from "./UDEMY/Lesson23/Cost";
import Lesson32 from "./UDEMY/Lesson32/Lesson23";

function App() {

  const costs = [
    {
      date: new Date().toLocaleDateString(),
      good: 'Macbook M2',
      price: '1500',
    },
    {
      date: new Date().toLocaleDateString(),
      good: 'Iphone 14 pro Max',
      price: '999',
    },
    {
      date: new Date().toLocaleDateString(),
      good: 'AirPods',
      price: '400',
    },
  ];

  return (
    <div className="App">
      <Cost>
        {costs.map((cost, index) => (
          <Lesson32 key={index} date={cost} />
        ))}
      </Cost>
    </div>
  );
}

export default App;