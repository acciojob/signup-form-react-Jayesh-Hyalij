// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";



// ReactDOM.render(<App />, document.getElementById("root"));


import React, { useState } from 'react';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!name || !email || !gender || !phoneNumber || !password) {
      setMessage('All fields are mandatory.');
      isValid = false;
    } else if (!/^[a-zA-Z0-9 ]*$/.test(name)) {
      setMessage('Name is not alphanumeric.');
      isValid = false;
    } else if (!email.includes('@')) {
      setMessage('Email must contain @.');
      isValid = false;
    } else if (gender !== 'male' && gender !== 'female' && gender !== 'other') {
      setMessage('Please identify as male, female or others.');
      isValid = false;
    } else if (!/^\d*$/.test(phoneNumber)) {
      setMessage('Phone Number must contain only numbers.');
      isValid = false;
    } else if (password.length < 6) {
      setMessage('Password must contain at least 6 letters');
      isValid = false;
    } else {
      setMessage(`Hello ${email.split('@')[0]}`);
    }

    if (isValid) {
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label><br />
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="name"
      /><br />
      <label htmlFor="email">Email:</label><br />
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-testid="email"
      /><br />
      <label htmlFor="gender">Gender:</label><br />
      <select
        id="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        data-testid="gender"
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select><br />
      <label htmlFor="phoneNumber">Phone Number:</label><br />
      <input
        type="text"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        data-testid="phoneNumber"
      /><br />
      <label htmlFor="password">Password:</label><br />
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-testid="password"
      /><br />
      <input type="submit" data-testid="submit" />
    </form>
  );
};

export default SignUpForm;
