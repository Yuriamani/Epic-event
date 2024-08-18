import React, { useState } from "react";
import "./HostEvent.css"; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const HostEvent = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    capacity: "",
    datetime: "",
    image: "",
    available_tickets: "",
    ticket_price: "",
    description: "",
  });

  const [buttonText, setButtonText] = useState("Host Event");

  const token = localStorage.getItem('access_token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonText("Hosting...");
      const response = await fetch("https://epic-event-backend.onrender.com/events/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to Host Event");
      }
      const data = await response.json();
      console.log(data);

      // Assuming `data` contains the full event details including the `id`
      const newEvent = {
        ...formData,
        id: data.id, // Use the ID returned from the server
    };

      setFormData({
        name: "",
        location: "",
        capacity: "",
        datetime: "",
        image: "",
        available_tickets: "",
        ticket_price: "",
        description: "",
      });
      
      const myEvents = JSON.parse(localStorage.getItem('myEvents')) || [];
      localStorage.setItem('myEvents', JSON.stringify([...myEvents, newEvent]));

      setButtonText("Event Added");

      navigate('/my_events');
    } catch (error) {
      console.error("Error Hosting Event:", error);
      setButtonText("Host Event");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page">
    <div className="add-game-container">
      <h2 className="add-game-title">Host An Event</h2>
      <form className="add-game-form" onSubmit={handleSubmit}>
        <label className="add-game-label">
          Event Name:
          <input
            type="text"
            name="name"
            placeholder="Labour Party"
            value={formData.name}
            onChange={handleChange}
            className="add-game-input"
          />
        </label>
        <label className="add-game-label">
          Date and Time:
          <input
            type="text"
            name="datetime"
            placeholder="October 15 2024"
            value={formData.datetime}
            onChange={handleChange}
            className="add-game-input"
          />
        </label>
        <label className="add-game-label">
          Image URL:
          <input
            type="text"
            name="image"
            placeholder="https://i.pinimg.com/564x/ff/11/93/ff1193408f51f6b34ffcff14e9fb0f03.jpg"
            value={formData.image}
            onChange={handleChange}
            className="add-game-input"
          />
        </label>
        <label className="add-game-label">
          Location:
          <input
            type="text"
            name="location"
            placeholder="Kenya"
            value={formData.location}
            onChange={handleChange}
            className="add-game-input"
          />
        </label>
        <label className="add-game-label">
          Capacity:
          <input
            type="text"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="5" 
            className="add-game-input"
          />
          <label className="add-game-label">
          Available Tickets:
          <input
            type="text"
            name="available_tickets"
            placeholder="5"
            value={formData.available_tickets}
            onChange={handleChange}
            className="add-game-input"
          />
        </label>
          <label className="add-game-label">
          Ticket Price:
          <input
            type="text"
            name="ticket_price"
            placeholder="Ksh..."
            value={formData.ticket_price}
            onChange={handleChange}
            className="add-game-input"
          />
        </label>
        <label className="add-game-label">
          Description:
          <input
            type="text"
            name="description"
            placeholder="Experience the energy of the mau mau fighters as we celebrate the sleeping legends - A comforting memory to all"
            value={formData.description}
            onChange={handleChange}
            className="add-game-input"
          />
        </label>
        </label>
        <button
          type="submit"
          className="add-game-button"
          disabled={buttonText !== "Host Event"}
        >
          {buttonText}
        </button>
      </form>
    </div>
    </div>
  );
};

export default HostEvent;