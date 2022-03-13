import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await fetch('https://vef2-v3-kari.herokuapp.com/events/');

      const events = await result.json();

      setLoading(false);
      setEvents(events);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Viðburðasíðan</h1>
      {loading && <p>Sækir gögn...</p>}
      <ul className="events">
        {events.map((event) => (
          <li className="events__event" key={event.id}>
            <Link className="events__eventLink" to={`events/${event.id}`}>
              {event.name}
            </Link>
            <p className="events__eventDescription">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
