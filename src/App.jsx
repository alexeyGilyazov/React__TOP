import "../src/style/index.css";
import HomeWork0409 from "./04.09/HomeWork0409";
import { RandomText } from "./data/RandomText";

function App() {
  return (
    <div className="App">
      <HomeWork0409 answer={RandomText} />
    </div>
  );
}

export default App;