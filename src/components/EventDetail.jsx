import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.css';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate for redirection

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = React.useState({});
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location and its state
  const [hasAttended, setHasAttended] = React.useState(false);
  const [attendedEvents, setAttendedEvents] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://epic-event-backend.onrender.com/events/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data));
  }, [id]);

  const handleBuyTicket = () => {
    alert('Buy Ticket')

    window.location.href = "https://desolate-ridge-69417-63835eb682ea.herokuapp.com/";
    // Mark the event as attended
    setHasAttended(true);
  
    // Add the event details to the attended events array
    const newAttendedEvent = {
      name: event.name,
      datetime: event.datetime
    };
    setAttendedEvents([...attendedEvents, newAttendedEvent]);
  
    // Navigate to the history page
    navigate('/history', { state: { attendedEvents } });
  };

  return (
    <div className="event-detail-container">
      <div className="event-image">
        <img src={event.image} alt={`${event.name}`} />
      </div>
      <div className="event-details">
        <h1>{event.name}</h1>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Time:</strong> {event.datetime}</p>
        <div className="tickets-section">
        <h2>Attend Event</h2>
              <div className="ticket-item">
                <p>Capacity - {event.capacity}</p>
                <button onClick={handleBuyTicket}>Buy Now</button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;