import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Event({ loggedIn }) {
  const [comment, setComment] = useState('');
  const [registrations, setRegistrations] = useState([]);
  const [event, setEvent] = useState({});

  const { id: eventID } = useParams();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`http://vef2-v3-kari.herokuapp.com/events/1`);

      const { event, registrations } = await result.json();

      console.log(event);
      setEvent(event);
      setRegistrations(registrations);
    }

    fetchData();
  }, []);

  const submitRegistration = (e) => {
    e.preventDefault();
    setRegistrations([...registrations, { name: 'Admin', comment: comment }]);
    setComment('');
  };

  return (
    <div>
      <h1>{event.name}</h1>
      <ul>
        {registrations.map((registration, i) => (
          <li key={i}>
            <p>{registration.name}</p>
            <p>{registration.comment}</p>
          </li>
        ))}
      </ul>
      {loggedIn && (
        <form onSubmit={submitRegistration}>
          <label>
            Athugasemd:
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
          <button>Skrá á viðburð</button>
        </form>
      )}
    </div>
  );
}
