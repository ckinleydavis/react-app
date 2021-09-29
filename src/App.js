import React from "react";
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main className="App-content">
        <p>This is the Content Section</p>
      </main>
      <footer className="App-footer">
        <p>This is the Footer Section</p>
      </footer>
    </div>
  );
}

export default App;
