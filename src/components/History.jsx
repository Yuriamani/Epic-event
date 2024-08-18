import React from 'react';

function History() {
  // Retrieve attended events from local storage
  const attendedEvents = JSON.parse(localStorage.getItem('attendedEvents')) || [];

  if (!attendedEvents || attendedEvents.length === 0) {
    return <div style={{height: '600px'}}> No event selected</div>;
  }

  return (
    <table style={{height: '600px'}} className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Event Date</th>
      <th scope="col">Event Name</th>
      <th scope="col">Booked on</th>
    </tr>
  </thead>
  <tbody>
        {attendedEvents.map((event, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{event.datetime}</td>
              <td>{event.name}</td>
              <td>{new Date().toLocaleTimeString()}</td>
            </tr>
          ))}
  </tbody>
</table>
  );
}

export default History;