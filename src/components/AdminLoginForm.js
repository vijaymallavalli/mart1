import React, { useState } from "react";
import './Style.css';

const AdminLoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic for admin
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
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
  );
};

export default AdminLoginForm;
