import "../src/style/index.css";
import React from 'react';
import Cost from "./UDEMY/Lesson23/Cost";
import Lesson36 from "./UDEMY/Lesson33/Lesson36";
import NewCost from "./UDEMY/Lesson33/NewCost";
import CostsFilter from "./UDEMY/Lesson33/CostFilter";



function App() {

  const costs = [
    {
      id: 'c1',
      date: new Date().toLocaleDateString(),
      good: 'Macbook M2',
      price: '1500',
    },
    {
      id: 'c2',
      date: new Date().toLocaleDateString(),
      good: 'Iphone 14 pro Max',
      price: '999',
    },
    {
      id: 'c3',
      date: new Date().toLocaleDateString(),
      good: 'AirPods',
      price: '400',
    },
  ];


  const addCostHandler = (cost) => {
    console.log(cost)
    console.log('app component')
  }

  return (
    <div className="App">

      <Cost>
        <CostsFilter />
        <Cost > <NewCost onAddCost={addCostHandler } /></Cost>
        {costs.map((cost, index) => (
          <Lesson36 key={index} date={cost} />
        ))}
        
      </Cost>
    </div>
  );
}

export default App;