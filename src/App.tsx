import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import { Card } from './components/card/Card';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <Card>
        <Card.Header>Ma jolie carte</Card.Header>
        <Card.Body>
          <p>
            Ceci est le contenu principal de la carte. Tu peux y mettre
            n'importe quoi : du texte, des images, ou même d'autres composants.
          </p>
        </Card.Body>
        <Card.Footer>Dernière mise à jour : aujourd’hui.</Card.Footer>
      </Card>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
