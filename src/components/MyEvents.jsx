import React, {useState, useEffect} from 'react';
import EventCard from './EventCard';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyEvents() {
    const [events, setEvents] = useState([]);
  const lastFourEvents = events.slice(-4);

  useEffect(() => {
    fetch('https://epic-event-backend.onrender.com/events/events', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setEvents(data);
          } else {
            console.error('Unexpected data format:', data);
          }
        })
        .catch((err) => {
          console.error('Failed to load events:', err);
        });
    }, []);

  return (
    <div>
      <Row>
        {lastFourEvents.map(event => (
          <Col key={event.id}>
            <EventCard event={event} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MyEvents;