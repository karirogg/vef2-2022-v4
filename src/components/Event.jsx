import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { formatDate } from '../utils/help-functions';
import { Button } from './Button';

export function Event({ loggedIn }) {
  const [comment, setComment] = useState('');
  const [registrations, setRegistrations] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState();

  const { id: eventID } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await fetch(
        `https://vef2-v3-kari.herokuapp.com/events/${eventID}`
      );

      const { event, registrations } = await result.json();

      setLoading(false);
      setEvent(event);
      setRegistrations(registrations);
    }

    fetchData();
  }, [eventID]);

  const submitRegistration = (e) => {
    e.preventDefault();
    setRegistrations([...registrations, { name: 'test', comment: comment }]);
    setComment('');
    setIsRegistered(true);
  };

  return (
    <div>
      {loading && <p>Sækir gögn...</p>}
      <h1 className="event__title">{event.name}</h1>
      <div className="event__info">
        <p>{event.description}</p>
        <p>
          Viðburður búinn til: {formatDate(event.created)} af {event.creator}
        </p>
      </div>
      <ul className="event__registered">
        {registrations.map((registration, i) => (
          <li className="registered__item" key={i}>
            <p className="event__registeredName">{registration.name}</p>
            <p className="event__registeredComment">{registration.comment}</p>
          </li>
        ))}
      </ul>
      {loggedIn && !isRegistered && (
        <form onSubmit={submitRegistration}>
          <div className="field">
            <label>Athugasemd:</label>
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <Button>Skrá á viðburð</Button>
        </form>
      )}
      <Link to={-1}>
        <p className="link">Til baka</p>
      </Link>
    </div>
  );
}
