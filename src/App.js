import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Natalie Chin</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React is so cool!
        </p>
        <p>this is another paragraph element</p>
        <ul>
          <li>
            A
          </li>
          <li>
            B
          </li>
          <li>
            C
          </li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
