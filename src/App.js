import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <p>Header Section</p>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main className="App-content">
        <p>Content Section</p>
      </main>
      <footer className="App-footer">
        <p>Footer Section</p>
      </footer>
    </div>
  );
}

export default App;
