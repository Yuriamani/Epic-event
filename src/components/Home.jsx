import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import Testimonial from './Testimonal';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Home.css';

function Home() {
    const aboutUsRef = useRef(null);

  const handleAboutUsClick = () => {
    aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
        <section className="hero">
        <div className="home-banner">
        <div>
          <h3>One Stop</h3>
        </div>
        <div>
          <p>
            <em>Event Planner</em>
          </p>
        </div>
        <div>
          <h2>Every Event Is Toptear</h2>
        </div>
        <div className="mb-2">
          <Button
            variant="outline-info"
            size="lg"
            style={{ marginRight: "45vh" }}
          >
            <Link onClick={handleAboutUsClick} style={{ textDecoration: 'none', color: 'inherit' }}>
              About Us
            </Link>
          </Button>
          <Button variant="outline-success" size="lg">
            <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
        </section>

        <section className="upcoming-events">
        <h1 style={{fontFamily: "sans-serif",fontStyle: "italic",color: "InactiveBorder",fontSize: "33px",marginTop: "20px", textAlign: "center",}}>
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
      
      <div className='about-us' ref={aboutUsRef}>
      <Testimonial />
      </div>
      
    </div>
  );
}

export default Home;