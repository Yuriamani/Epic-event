import React, { useState } from 'react';
import './Auth.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate(); 
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    
    const userData = {
        username,
        role,
        email,
        password1:password,
        password2:confirmPassword
    };

    try {
        const response = await fetch('https://epic-event-backend.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            alert('Account created successfully!');
            navigate('/events');
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message || 'An error occurred'}`);
        }
    } catch (error) {
        alert('Network error: ' + error.message);
    }
};

  return (
    <><div className='form-container'>
            <form onSubmit={handleSubmit} className='form'>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <h2>Sign Up</h2>
            
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
                        <label htmlFor="password" className="label">Create Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-span">
                        <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-span">
                    <label htmlFor="role" className="label">Select your role:</label>
                    <select id="role" name="role" onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    </div>
                    <button type="submit" className="submit">Create Account</button>
                    <div className="span">
                        Already have an account? <a href="/login">Log in</a>
                    </div>
                </form>
              
                </div></>
  );
}

export default SignUp;