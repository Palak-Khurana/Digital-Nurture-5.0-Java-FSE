import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("Euro");

  // Increment
  function incrementValue() {
    setCount(count + 1);
  }

  // Hello message
  function sayHello() {
    alert("Hello! Member");
  }

  // Multiple methods
  function increment() {
    incrementValue();
    sayHello();
  }

  // Decrement
  function decrement() {
    setCount(count - 1);
  }

  // Welcome
  function welcome(message) {
    alert(message);
  }

  // Synthetic Event
  function clickMe() {
    alert("I was clicked");
  }

  // Currency Convertor
  function handleSubmit(e) {
    e.preventDefault();

    // As per expected output
    let euro = Number(amount) * 80;

    alert("Converting to Euro Amount is " + euro);
  }

  return (
    <div className="App">

      <h3>{count}</h3>

      <button onClick={increment}>Increment</button>
      <br /><br />

      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={() => welcome("Welcome")}>
        Say welcome
      </button>

      <br /><br />

      <button onClick={clickMe}>
        Click on me
      </button>

      <br /><br /><br />

      <h1 style={{color:"green"}}>Currency Convertor!!!</h1>

      <form onSubmit={handleSubmit}>

        <label>Amount: </label>

        <input
          type="number"
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
        />

        <br /><br />

        <label>Currency: </label>

        <input
          type="text"
          value={currency}
          readOnly
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default App;