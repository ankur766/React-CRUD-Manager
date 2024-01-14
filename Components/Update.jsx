import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/Create.css'; // Import the CSS file

export default function Update() {
  const [id, setid] = useState();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setid(localStorage.getItem("id"))
    setname(localStorage.getItem("name"))
    setemail(localStorage.getItem("email"))
  }, [])

  const handleupdate = async (e) => {
    e.preventDefault();
    console.log("success");

    await axios.put(`https://65a396d3a54d8e805ed3bf5a.mockapi.io/crud-operation/${id}`, {
      name: name,
      email: email,
    })
      .then(() => {
        navigate("/read");
      })
  }

  return (
    <>
    <h2 className='Heading'> UPDATE DATA</h2>
      <form>
        <div className="login-box">
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

          <button type="submit" className="btn btn-primary" onClick={handleupdate}>
            Update
          </button>

          <Link to='/read'>
            <button className="btn btn-danger mx-2"  >Back</button>
          </Link>
        </div>
      </form>
    </>
  );
}
