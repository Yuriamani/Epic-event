import { useLocation } from 'react-router-dom';

function History() {
  const location = useLocation();
  // Check if location and location.state are defined
  const attendedEvents = location && location.state ? location.state.attendedEvents : [];

  if (!attendedEvents || attendedEvents.length === 0) {
    return <div style={{height: '600px'}}> No event selected</div>;
  }

  return (
    <table style={{height: '600px'}} class="table">
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