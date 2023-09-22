import React , { useState } from "react";
import './Style.css';
import StockEntryForm from "./StockEntryForm";

const UserLoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false); //newly added

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic for user
    setLoggedIn(true);
  };

  return (
    <div>

    {!loggedIn ? (
        <form className="form-container" onSubmit={handleSubmit}>
      <h2>User Login</h2>
      <div className="login">
        <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
        />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
        />
      <button type="submit">Login</button>
        </div>
    </form>
     ) : (
        <StockEntryForm  loggedIn={loggedIn}/>
        )}
  </div>
  );
};

export default UserLoginForm;
