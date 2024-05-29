import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src="/sharkass.jpg" alt="Logo" />
        <p>
          CA: EpaV7tty7hgHJLn5vXrViUh3AxNXrKkvSbM8ABKrE9TK
        </p>
        <div className="flex">
          <a
            className="App-link"
            href="https://t.me/SharkassCTO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logo" src="/logo.png" alt="telegram logo" />
          </a>
          <a
            className="App-link"
            href="https://dexscreener.com/solana/EpaV7tty7hgHJLn5vXrViUh3AxNXrKkvSbM8ABKrE9TK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logo" src="/dex-logo.png" alt="dex logo" />
          </a>
          <a
            className="App-link"
            href="https://x.com/SharkassSol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logo" src="/logo-black.png" alt="x logo" />
          </a>
        </div>

        <p>This is a CTO of a CTO</p>
      </header>
    </div>
  );
}

export default App;
