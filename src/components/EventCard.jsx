import React from 'react';
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";

function EventCard({ event }) {
  return (
              <Card
                style={{
                  // height: "370px",
                  width: "280px",
                  marginTop: "10px",
                  objectFit: "cover",
                }}
              >
                <Card.Img
                  variant="top"
                  src={event.image}
                  style={{ height: "370px", width: "280px" }}
                />
                <Card.Body style={{ height: "170px" }}>
                  <Card.Title>
                    <p>
                      <em>{event.name}</em>
                    </p>
                  </Card.Title>

                  <Card.Text>
                    <i className="bi bi-calendar3">{event.datetime}</i>
                  </Card.Text>
                  <Card.Text>
                    <i className="bi bi-geo-alt"> {event.location}</i>
                  </Card.Text>
                  <Card.Text><Link to={`/events/${event.id}`}>View Details</Link></Card.Text>
                </Card.Body>
              </Card>
  );
}

export default EventCard;