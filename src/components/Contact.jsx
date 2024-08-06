import React, { useState } from "react";
import useFormValidation from "../hooks/useFormValidation";

const Contact = () => {
  const [values, handleChange, handleBlur, errors] = useFormValidation();

  return (
    <section>
      <h1>Contact</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={values.message || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <span>{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
