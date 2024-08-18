import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyEvents.css'
import axios from 'axios';

function MyEvents() {
  const navigate = useNavigate();

  // Retrieve hosted events from local storage
  const myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];

  if (!myEvents || myEvents.length === 0) {
    return <div style={{height: '600px'}}> No event hosted</div>;
  }

  const handleUpdate = async (id) => {
    navigate(`/update_event/${id}`)
  }

  const deleteEvent = async (id) => {
    if (!id) {
      console.error('Invalid event ID');
      return;
    }
    try {
      // Delete event from backend
      await axios.delete(`https://epic-event-backend.onrender.com/events/events/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}` // Include the JWT in the Authorization header
        },
      });

      // Remove event from local storage
      const updatedEvents = myEvents.filter(event => event.id !== id);
      localStorage.setItem('myEvents', JSON.stringify(updatedEvents));

      // Optionally force a re-render or navigate away if necessary
      window.location.reload(); // Reload the page to reflect changes
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <div className="card-container">
          {myEvents.map((event) => (
            <div className="card" key={event.id} >
              <img src={event.image} alt={event.name}/>
              <div className="card-content" >
                <h3 >{event.name}</h3>
                <p>Price - {event.ticket_price}</p>
                <p>Capacity - {event.capacity}</p>
                <p>Location - {event.location}</p>
                <p>Date & Time - {event.datetime}</p>
                <p>Available Tickets - {event.available_tickets}</p>
                <a className='btn' onClick={() => handleUpdate(event.id)} >
                  Update
                </a>
                <br/>
                <a className='btn' onClick={() => deleteEvent(event.id)} >
                  Delete
                </a>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default MyEvents;