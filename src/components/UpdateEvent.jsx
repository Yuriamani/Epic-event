import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateEvent.css";

const UpdateEvent = () => {
  const { id } = useParams();
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

  const [buttonText, setButtonText] = useState("Update Event");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setButtonText("Updating...");
      const token = localStorage.getItem('access_token');
      const response = await fetch(`https://epic-event-backend.onrender.com/events/events/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to update event");
      const data = await response.json();
      console.log(data);
      setButtonText("Event Updated");
      navigate('/my_events');
    } catch (error) {
      console.error("Error updating event:", error);
      setButtonText("Update Event");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="page">
      <div className="update-event-container">
        <h2 className="update-event-title">Update Event</h2>
        <form className="update-event-form" onSubmit={handleSubmit}>
          <label className="update-event-label">
            Event Name:
            <input
              type="text"
              name="name"
              placeholder={"Labour Party"}
              value={formData.name}
              onChange={handleChange}
              className="update-event-input"
              required
            />
          </label>
          <label className="update-event-label">
            Date and Time:
            <input
              type="text"
              name="datetime"
              placeholder="October 15 2024"
              value={formData.datetime}
              onChange={handleChange}
              className="update-event-input"
              required
            />
          </label>
          <label className="update-event-label">
            Image URL:
            <input
              type="text"
              name="image"
              placeholder="https://i.pinimg.com/564x/ff/11/93/ff1193408f51f6b34ffcff14e9fb0f03.jpg"
              value={formData.image}
              onChange={handleChange}
              className="update-event-input"
              required
            />
          </label>
          <label className="update-event-label">
            Location:
            <input
              type="text"
              name="location"
              placeholder="Kenya"
              value={formData.location}
              onChange={handleChange}
              className="update-event-input"
              required
            />
          </label>
          <label className="update-event-label">
            Capacity:
            <input
              type="number"
              name="capacity"
              placeholder="5"
              value={formData.capacity}
              onChange={handleChange}
              className="update-event-input"
              required
            />
          </label>
          <label className="update-event-label">
            Available VIP Tickets:
            <input
              type="number"
              name="available_tickets"
              placeholder="0"
              value={formData.available_tickets}
              onChange={handleChange}
              className="update-event-input"
              required
            />
          </label>
          <label className="update-event-label">
            Ticket Price (Normal):
            <input
              type="number"
              name="ticket_price"
              placeholder="Ksh..."
              value={formData.ticket_price}
              onChange={handleChange}
              className="update-event-input"
              required
            />
          </label>
          <label className="update-event-label">
            Description:
            <textarea
              name="description"
              placeholder="Experience the energy of the mau mau fighters as we celebrate the sleeping legends - A comforting memory to all"
              value={formData.description}
              onChange={handleChange}
              className="update-event-input"
              required
            />
          </label>
          <button
            type="submit"
            className="update-event-button"
            disabled={buttonText !== "Update Event"}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEvent;
