import React, { useEffect, useState } from 'react';

export function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('http://vef2-v3-kari.herokuapp.com/events/');

      const events = await result.json();

      setEvents(events);
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
}
