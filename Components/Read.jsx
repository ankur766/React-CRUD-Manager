import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './CSS/Read.css';
import { Link } from 'react-router-dom';

export default function Read() {

    const [data,setdata]=useState([]);

    async function getData() {
        try {
          const response = await axios.get('https://65a396d3a54d8e805ed3bf5a.mockapi.io/crud-operation');
          console.log(response.data);
          setdata(response.data);
        } catch (error) {
          setError(error.message);
        }
      }
    
      useEffect(() => {
        const fetchData = async () => {
          await getData();
        };
    
        fetchData();
      }, []);



      async function  handledelete(id)
      {
         try{
           await axios.delete(`https://65a396d3a54d8e805ed3bf5a.mockapi.io/crud-operation/${id}`)
          
           .then(()=>
           {
            getData();
           })
         }
         catch (error) {
            setError(error.message);
          }
        
      }

   const  setToLocalStorage=(id,name,email)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);


   }
  return (
    <>
    <h2 className='Heading'> Read Operation</h2>
    <Link to='/'>
        <button className="btn btn-secondary" >Create Data</button>
        </Link>
 
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Update</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
    {
  data.map((eachdata) => (
    <tr key={eachdata.id}>
      <th scope="row">{eachdata.id}</th>
      <td>{eachdata.name}</td>
      <td>{eachdata.email}</td>
      <td>
        <Link  to='/update'>
        <button type="button" className="btn btn-primary" onClick={()=>setToLocalStorage(eachdata.id,
          eachdata.name,
          eachdata.email)}>Edit</button>
        </Link>
        </td>
      <td><button type="button" className="btn btn-danger" onClick={()=>handledelete(eachdata.id)}>Delete</button></td>
    </tr>
  ))
}
</tbody>
  </table>
</>

    
  )
}
