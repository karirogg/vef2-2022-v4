import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export const Login = ({ loggedIn, setLoggedIn }) => {
  return (
    <React.Fragment>
      {loggedIn ? (
        <div>
          <p>Skráð/ur inn sem: Admin</p>
          <Button onClick={() => setLoggedIn(false)}>Útskráning</Button>
        </div>
      ) : (
        <div>
          <Link to="/login">Skrá inn</Link>
          <Button onClick={() => setLoggedIn(true)}>Nýskráning</Button>
        </div>
      )}
    </React.Fragment>
  );
};
