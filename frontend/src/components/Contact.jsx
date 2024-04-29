/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from 'axios'
const Contact = () => {
  const [querydata, setQueryData] = useState({
    email: "",
    query: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:5000/storequery', {
      email: querydata.email,
      query: querydata.query
    })
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder="yourmail@gmail.com"
          name="email"
          value={querydata.email}
          onChange={handleChange}
        />
      </div>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder="your query"
          name="query"
          value={querydata.query}
          onChange={handleChange}
        />
      </div> <br/>
      <button className="secondary-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Contact;
