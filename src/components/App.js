import React, { useState } from 'react';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!name ||!email ||!gender ||!phoneNumber ||!password ||!confirmPassword) {
      setMessage('All fields are mandatory.');
      isValid = false;
    } else if (!/^[a-zA-Z0-9 ]*$/.test(name) || name.includes(' ')) {
      setMessage('Name can only contain letters, numbers and spaces.');
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setMessage('Email must be in the format <EMAIL>.');
      isValid = false;
    } else if (gender === '') {
      setMessage('Please identify as male, female or others.');
      isValid = false;
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(phoneNumber)) {
      setMessage('Phone Number must be in the format XXX-XXX-XXXX.');
      isValid = false;
    } else if (password.length < 6 ||!/[A-Z]/.test(password) ||!/[a-z]/.test(password) ||!/[0-9]/.test(password)) {
      setMessage('Password must contain at least 6 characters, including at least one uppercase letter, one lowercase letter and one number.');
      isValid = false;
    } else if (password!== confirmPassword) {
      setMessage('Passwords do not match.');
      isValid = false;
    }

    if (isValid) {
      setMessage(`Hello ${email.split('@')[0]}, your information has been submitted successfully.`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" id="name-label">Name:</label>
      <br />
      <input
        type="text"
        id="name"
        aria-labelledby="name-label"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="name"
      />
      <br />
      <label htmlFor="email" id="email-label">Email:</label>
      <br />
      <input
        type="text"
        id="email"
        aria-labelledby="email-label"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-testid="email"
      />
      <br />
      <label htmlFor="gender" id="gender-label">Gender:</label>
      <br />
      <select
        id="gender"
        aria-labelledby="gender-label"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        data-testid="gender"
      >
        <option key="male" value="male">Male</option>
        <option key="female" value="female">Female</option>
        <option key="other" value="other">Other</option>
      </select>
      <br />
      <label htmlFor="phoneNumber" id="phoneNumber-label">Phone Number:</label>
      <br />
      <input
        type="text"
        id="phoneNumber"
        aria-labelledby="phoneNumber-label"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
        data-testid="phoneNumber"
      />
      <br />
      <label htmlFor="password" id="password-label">Password:</label>
      <br />
      <input
        type="password"
        id="password"
        aria-labelledby="password-label"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-testid="password"
      />
      <br />
      <label htmlFor="confirmPassword" id="confirmPassword-label">Confirm Password:</label>
      <br />
      <input
        type="password"
        id="confirmPassword"
        aria-labelledby="confirmPassword-label"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        data-testid="confirmPassword"
      />
      <br />
      <input type="submit" data-testid="submit" />
      {message && <p data-testid="message">{message}</p>}
    </form>
  );
};

export default function App() {
  return (
    <div className="App">
      <SignUpForm />
    </div>
  );
}
