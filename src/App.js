import "./App.css";
import Dice from "./Dice";

function App() {
  return (
    <main className="App">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="container">
        <Dice value="1" />
        <Dice value="2" />
        <Dice value="3" />
        <Dice value="4" />
        <Dice value="5" />
        <Dice value="6" />
        <Dice value="7" />
        <Dice value="8" />
        <Dice value="9" />
        <Dice value="10" />
      </div>
    </main>
  );
}

export default App;
