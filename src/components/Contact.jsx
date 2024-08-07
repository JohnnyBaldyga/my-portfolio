import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Email is invalid";
    if (!formData.message) formErrors.message = "Message is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted");
      // Handle form submission here
    }
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
