import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Auth.css'

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://epic-event-backend.onrender.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            const { access_token } = data;

            // Store the token in local storage
            localStorage.setItem('access_token', access_token);

            setSuccessMessage('Login successful! Redirecting...');

            // Redirect to the events page after a short delay
            setTimeout(() => {
                navigate('/events');
            }, 2000);
        }
        else if (response.status === 401) {
            setError('Invalid username, email, or password. Please try again.');
        } else if (response.status === 404) {
            setError('User not found. Please sign up first.');
        } else {
            const errorText = await response.text();
            setError(`An error occurred: ${errorText}`);
        }
      } catch (err) {
        setError('Login failed. Please check your credentials and try again.');
      }finally {
      setLoading(false);
    }
  };

  return (<>
    <div className="form-container">
            <form onSubmit={handleSubmit} className='form'>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {error && <div className="error">{error}</div>}
            <h2>Login</h2>
            <div className="input-span">
                        <label htmlFor="username" className="label">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                <div className="input-span">
                    <label htmlFor="email" className="label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-span">
                    <label htmlFor="password" className="label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="submit" type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <div className="span">
                    Don't have an account? <a href="/signup">Sign Up</a>
                </div>
            </form>
        </div>
        </>
  );
}

export default Login;

