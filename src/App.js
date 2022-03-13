import { useState } from 'react';
import './App.css';
import { Layout } from './components/Layout';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;
