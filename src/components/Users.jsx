import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://epic-event-backend.onrender.com/users/users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('access_token')}` ,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              if (Array.isArray(data)) {
                setUsers(data);
              } else {
                console.error('Unexpected data format:', data);
              }
            })
            .catch((err) => {
              console.error('Failed to load users:', err);
            });
        }, []);

        const deleteUser = async (id) => {
            if (!id) {
              console.error('Invalid user ID');
              return;
            }
            try {
              // Delete user from backend
              await axios.delete(`https://epic-event-backend.onrender.com/users/users/${id}`, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('access_token')}` // Include the JWT in the Authorization header
                },
              });
        
              // Optionally force a re-render or navigate away if necessary
              window.location.reload(); // Reload the page to reflect changes
            } catch (error) {
              console.error('Error deleting user:', error);
            }
          };            

  return (<div>
    <table style={{height: 'auto'}} className="table">
  <thead>
    <tr>
      <th scope="col">User id</th>
      <th scope="col">User Name</th>
      <th scope="col">User Email</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
        {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td><button
              variant="danger"
              size="sm"
              onClick={() => deleteUser(user.id)}
            >
              &times;
            </button></td>
            </tr>
          ))}
  </tbody>
</table>
{users.length === 0 && (
    <div style={{height: '600px'}}> No user data</div>
  )}
  </div>
  );
}

export default Users;