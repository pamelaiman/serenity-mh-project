import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const API_BaseURL = 'http://127.0.0.1:5000';
const API_LoginURL = `${API_BaseURL}/login`;

function Login({ onLogin }) {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();


    try {
      const response = await fetch(API_LoginURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const result = await response.json();

      if (response.ok && result.message === 'Login successful') {
        setMessage(result.message);
        console.log('Login successful');
        onLogin(true);
        navigate('/account');

      } else {
        setMessage(result.message)
        onLogin(false);
        console.log('Login failed')
      }
    } catch (error) {
      setMessage('There was an error with logging in. Please try again.')
      console.error('Failed to login due to invalid email or password. Please try again.', error);
      onLogin(false);
    }
  };

  return (
    <Form className="loginsection" onSubmit={handleLogin}>
      <h2>LOG IN</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <button type="submit" className="bttn">
        LOG IN
      </button>
      {message && <div>{message}</div>}
    </Form>
  );
}

export default Login;