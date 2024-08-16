import React, {useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventCard from './EventCard';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://epic-event-backend.onrender.com/events/events')
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div>
      <Row>
        {events.map(event => (
          <Col key={event.id}>
            <EventCard event={event} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
<button>Buy Ticket</button>
export default Events;