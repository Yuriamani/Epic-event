import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from 'react-router-dom';

function DashBoard() {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token'); // Check if token is present

  const handleRedirect = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token'); // Remove token from local storage
    navigate('/login');
  };

  return (
    <DropdownButton
            as={ButtonGroup}
            id="profile-dropdown"
            variant="outline-warning"
            title={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <i style={{borderRadius: '50%', width: '2.5rem', height: '2.5rem'}} className="bi bi-person-circle" /> 
                <span style={{ marginLeft: 10 }}>
                </span>
              </div>
            }
          >
            {token ? (
              <>
                {/* <Dropdown.Item onClick={() => handleRedirect('/my_events')}>My Events</Dropdown.Item> */}
                <Dropdown.Item onClick={() => handleRedirect('/history')}>Participated</Dropdown.Item>
                {/* <Dropdown.Item onClick={() => handleRedirect('/host_events')}>Host Event</Dropdown.Item> */}
                <Dropdown.Item onClick={() => handleRedirect('/profile')}>Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item onClick={() => handleRedirect('/login')}>Login</Dropdown.Item>
                <Dropdown.Item onClick={() => handleRedirect('/signup')}>Sign Up</Dropdown.Item>
              </>
            )}
          </DropdownButton>
  );
}

export default DashBoard;

