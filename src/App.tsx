import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ count, setCount] = React.useState(0);
  const ADDER = 2;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WELCOME TO CS360 Gallery.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Click Count: {count}</h1>
        <button onClick={()=> setCount(count + ADDER)}>Click Me!</button>
      </header>
    </div>
  );
}

export default App;
