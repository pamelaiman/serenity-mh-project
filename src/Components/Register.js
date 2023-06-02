import Form from 'react-bootstrap/Form';
import '../App.css';
import React, { useState } from 'react';

const API_BaseURL = 'http://127.0.0.1:5000';
const API_RegisterURL = `${API_BaseURL}/register`;


function Register({ onRegister }) {
  const [message, setMessage] = useState('');
  
  const handleRegister = async (event) => {
    event.preventDefault();
  
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    try {
      const response = await fetch(API_RegisterURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
    
      if (response.ok) {
        const result = await response.json();
        setMessage(result.message);
        console.log('Registration successful');
        onRegister();
      if (response === 'Email already exists') {
        console.log('Email already exists. Please use a different email')}
      } else {
        const result = await response.json();
        setMessage(result.message);
        console.log('Registration failed:', result.message);
      }
    } catch (error) {
      setMessage('There was an error with your registration. Please try again.');
      console.error('Failed to register. Please try again', error);
    }
  }

  return (
    <Form className="loginsection" onSubmit={handleRegister}>
      <h2>REGISTER</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>
      <button type= "submit" className='bttn'>
        REGISTER
      </button>
      <div>{message}</div>
    </Form>
  );
}

export default Register;