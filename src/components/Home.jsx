import React, {useState, useEffect} from 'react';
import EventCard from './EventCard';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeBanner from './HomeBanner';

function Home() {
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
    <div >
        <HomeBanner/>

        <section className="upcoming-events">
        <h1 style={{fontFamily: "sans-serif",fontStyle: "italic",color: "InactiveBorder",fontSize: "33px",marginTop: "20px", textAlign: "center"}}>
        Upcoming Events
      </h1>
      <Row>
        {lastFourEvents.map(event => (
          <Col key={event.id}>
            <EventCard event={event} />
          </Col>
        ))}
      </Row>
      </section>
      
    </div>
  );
}

export default Home;