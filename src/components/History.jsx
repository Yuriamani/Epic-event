import { useLocation } from 'react-router-dom';

function History() {
  const location = useLocation();
  const attendedEvents =  [] || location.state.attendedEvents;

  return (
    <table class="table">
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