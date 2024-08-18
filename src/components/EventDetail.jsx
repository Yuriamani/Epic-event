import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = React.useState({});
  const [hasAttended, setHasAttended] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Fetch event data from API
    fetch(`https://epic-event-backend.onrender.com/events/events/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching event data:', error));
  }, [id]);

  const handleBuyTicket = async () => {
    if (hasAttended) {
      alert('You have already attended this event.');
      return;
    }

    if (event.vip_tickets <= 0) {
      alert('Sorry, this event is fully booked.');
      return;
    }

    // Confirm ticket purchase
    alert('Buy Ticket');

    const token = localStorage.getItem('access_token'); // Retrieve JWT from local storage

    try {
      // Update event capacity on the backend
      await fetch(`https://epic-event-backend.onrender.com/events/events/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include the JWT in the Authorization header
        },
        body: JSON.stringify({ normal_events: event.normal_events - 1 }),
      });

      // Mark the event as attended
      setHasAttended(true);

      // Add the event details to the attended events array in localStorage
      const newAttendedEvent = {
        name: event.name,
        datetime: event.datetime
      };
      const currentAttendedEvents = JSON.parse(localStorage.getItem('attendedEvents')) || [];
      localStorage.setItem('attendedEvents', JSON.stringify([...currentAttendedEvents, newAttendedEvent]));

      // Navigate to the history page
      navigate('/history');
    } catch (error) {
      console.error('Error updating event tickets:', error);
      alert('An error occurred while processing your request. Please try again.');
    }
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
            <p>Remaining - {event.available_tickets}</p>
            <p>Price - {event.ticket_price}</p>
            <button onClick={handleBuyTicket} disabled={hasAttended || event.capacity <= 0}>
              Buy Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
