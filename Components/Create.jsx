import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Create.css'; // Import the CSS file

export default function Create() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const history = useNavigate();
  const header={"Access-control-Allow-origin":"+"}

  const handelesubmit = (e) => {
    e.preventDefault();
    console.log("success");
    axios.post('https://65a396d3a54d8e805ed3bf5a.mockapi.io/crud-operation', {
      name: name,
      email: email,
      header
    })
      .then(() => {
        history("/read");
      })
  }

  return (
    <>
      <div className='container'>
        <div className='login-box'>
          <h2>CREATE</h2>
          <Link to='/read'>
            <button className="btn btn-primary mx-4" >Show Data</button>
          </Link>
          <form>
            <div className="user-box">
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
              <label htmlFor="exampleInputPassword1">Name</label>
            </div>

            <div className="user-box">
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
              <label htmlFor="exampleInputEmail1">Email address</label>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handelesubmit}>
      Submit
    </button>
          </form>
        </div>
      </div>
    </>
  );
}
