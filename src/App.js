import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Event } from './components/Event';
import { Events } from './components/Events';
import { Login } from './components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/events/:id" element={<Event loggedIn={loggedIn} />} />
      </Routes>
      <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;
