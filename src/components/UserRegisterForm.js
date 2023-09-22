import React, { useState } from "react";
import './Style.css';

const UserRegisterForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic for user
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>User Register</h2>
      <div className="register">
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
      <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default UserRegisterForm;
