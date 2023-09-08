import "../src/style/index.css";
import Lesson21 from "./UDEMY/Lesson21/Lesson21";


function App() {

  const costs = [
    {
        date: new Date().toLocaleDateString(),
        good: 'Macbook M2 ',
        price: `1500`,
    },
    {
        date: new Date().toLocaleDateString(),
        good: 'Iphone 14 pro Max',
        price: `999`,
    },
    {
        date: new Date().toLocaleDateString(),
        good: 'AirPods',
        price: `400`,
    }

]

  return (
    <div className="App">
      <Lesson21 date={costs[0].date} good={costs[0].good} price={costs[0].price} />
      <Lesson21 date={costs[1].date} good={costs[1].good} price={costs[1].price} />
      <Lesson21 date={costs[2].date} good={costs[2].good} price={costs[2].price} />
    </div>
  );
}

export default App;